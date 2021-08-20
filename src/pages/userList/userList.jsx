import React , { useState } from 'react';
// import  from 'react';
import {Link} from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { Delete } from '@material-ui/icons';
import { userRows } from '../../data';
import './userList.css';

const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        console.log(id)
        setData(data.filter((item) => item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'userName',
          headerName: 'Username',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 110,
          editable: true,
        },
        {
          field: 'transAction',
          headerName: 'Transaction',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={'/user/'+params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <Delete className='recycle' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];
      
    // const rows = [
    //     { id: 1, userName: 'Mark Otto', status: 'active', transAction: '204 $'},
    //     { id: 2, userName: 'Jacob Thornton', status: 'active', transAction: '330 $'},
    //     { id: 3, userName: 'Larry Hughman', status: 'active', transAction: '185 $'},
    //     { id: 4, userName: 'Danny Junior', status: 'active', transAction: '310 $'},
        
    // ];

    return ( 
        <div className="userList">
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
     );
}
 
export default UserList;