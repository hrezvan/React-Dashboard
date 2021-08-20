import React from 'react';
import { Phone , Cake , Person , Mail , Home , Backup} from '@material-ui/icons';
import './user.css';

const User = () => {
    return ( 
        <div className="users">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURSKMljVXEm57DuInU5lTToyHcaiYmWnmA&usqp=CAU" alt="userShowImg" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Harry Thomas</span>
                            <span className="userShowUserTitle">Software Engineere</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <Person className='userShowIcon' />
                            <span className="userShowID">Harry_1999_Thomas</span>
                        </div>
                        <div className="userShowInfo">
                            <Cake className='userShowIcon' />
                            <span className="userShowID">8.19.1999</span>
                        </div>
                        <div className="userShowInfo">
                            <Phone className='userShowIcon' />
                            <span className="userShowID">+98123456789</span>
                        </div>
                        <div className="userShowInfo">
                            <Mail className='userShowIcon' />
                            <span className="userShowID">Harry_1999@domain.com</span>
                        </div>
                        <div className="userShowInfo">
                            <Home className='userShowIcon' />
                            <span className="userShowID">Tehran, Iran</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <div className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="username" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input type="text" placeholder="full name" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder="name@domain.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="number" placeholder="1234567890" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Tehran, Iran" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURSKMljVXEm57DuInU5lTToyHcaiYmWnmA&usqp=CAU" alt="userImg" className="userUpdateImg" />
                                <label for="file">
                                    <Backup className='userUpdateIcon' />
                                </label>
                                <input type="file" id="file" />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default User;