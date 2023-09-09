

import  './index.css';
import { 
    PlusOutlined
  } from '@ant-design/icons';



import SideBar from '../layout/Sidebar.js'
import NavBar from '../layout/Navbar.js';

import profileImage from '../assets/images/profile-1.jpg'
import profileImage2 from '../assets/images/profile-2.jpg'
import profileImage3 from '../assets/images/profile-3.jpg'
import Plus from '../assets/images/plus.png'


const User = () => {
    return (
       <div className="container"> 
           <SideBar/>
           <main>
               <NavBar/>
                <h1>OverView</h1>
                <div className="new-users">
                    <div className='container-user-admin'>
                        <div className='user-admin-search'>
                            <div className='user-admin-select'>
                               <select name="cars" id="cars" className='user-select'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='user-admin-'>
                                <input type='text' className='user-search-input'></input>
                            </div>
                        </div>
                        <div className='user-admin-create'>
                           <button><PlusOutlined /> Thêm mới</button>
                        </div>
                    </div>
                    <div className="user-list">
                        <div className="user">
                            <img src={profileImage} alt='profile'/>
                            <h2>Jack</h2>
                            <p>54 Min Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage2} alt='profile'/>
                            <h2>Amir</h2>
                            <p>3 Hours Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage3} alt='profile'/>
                            <h2>Ember</h2>
                            <p>6 Hours Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage} alt='profile'/>
                            <h2>Jack</h2>
                            <p>54 Min Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage2} alt='profile'/>
                            <h2>Amir</h2>
                            <p>3 Hours Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage3} alt='profile'/>
                            <h2>Ember</h2>
                            <p>6 Hours Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage3} alt='profile'/>
                            <h2>Ember</h2>
                            <p>6 Hours Ago</p>
                        </div>
                        <div className="user">
                            <img src={profileImage3} alt='profile'/>
                            <h2>Ember</h2>
                            <p>6 Hours Ago</p>
                        </div>
                        
                        <div className="user">
                            <img src={Plus}  alt='Plus'/>
                            <h2>More</h2>
                            <p>New User</p>
                        </div>
                        <div className="user">
                            <img src={Plus}  alt='Plus'/>
                            <h2>More</h2>
                            <p>New User</p>
                        </div>
                        <div className="user">
                            <img src={Plus}  alt='Plus'/>
                            <h2>More</h2>
                            <p>New User</p>
                        </div>
                        <div className="user">
                            <img src={Plus}  alt='Plus'/>
                            <h2>More</h2>
                            <p>New User</p>
                        </div>
                        <div className="user">
                            <img src={Plus}  alt='Plus'/>
                            <h2>More</h2>
                            <p>New User</p>
                        </div>
                        
                    </div>
                </div>
               </main>
       </div>
    );
  }
  
  export default User;
  