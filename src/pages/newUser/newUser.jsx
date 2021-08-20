import React from 'react'
import './newUser.css';

const NewUser = () => {
    return ( 
        <div class="newUser">
            <h1 class="newUserTitle">New User</h1>
            <form class="newUserForm">
                <div class="newUserItem">
                    <label>Username</label>
                    <input type='text' placeholder="John" />
                </div>
                <div class="newUserItem">
                    <label>Full Name</label>
                    <input type='text' placeholder="John Smith" />
                </div>
                <div class="newUserItem">
                    <label>Email</label>
                    <input type='email' placeholder="AAA@domain.com" />
                </div>
                <div class="newUserItem">
                    <label>Passwords</label>
                    <input type='password' placeholder="password" />
                </div>
                <div class="newUserItem">
                    <label>Phone</label>
                    <input type='number' placeholder="12345678900" />
                </div>
                <div class="newUserItem">
                    <label>Address</label>
                    <input type='text' placeholder="Street 45, Washington" />
                </div>
                <div class="newUserItem">
                    <label>Gender</label>
                    <div class="newUserGender">
                        <input type='radio' name="gender" id='male' value="male" />
                        <label for="male">Male</label>
                        <input type='radio' name="gender" id='female' value="female" />
                        <label for="female">Female</label>
                    </div>
                </div>
                <div class="newUserItem">
                    <label>Active</label>
                    <select class="newUserSelect" name='active' id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>            
            </form>
            <button class="newUserButton">Submit</button>
        </div>
    );
}
 
export default NewUser;