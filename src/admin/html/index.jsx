

import  './index.css';
import { 
    PlusOutlined
  } from '@ant-design/icons';



import SideBar from '../layout/Sidebar.js'
import NavBar from '../layout/Navbar.js';

import profileImage from '../assets/images/db.png'
import profileImage2 from '../assets/images/db2.png'
import profileImage3 from '../assets/images/db3.png'
import profileImage4 from '../assets/images/db4.png'


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
                        <div class="hash-card-html">
                            <div class="image">
                                <img src={profileImage} alt='imagePost'/>
                            </div>
                            <div class="title">
                            <h1>Dash board html css</h1>
                            </div>
                            <div class="des">
                                <p>Nội dung trang dashboard...</p>
                                <p>Thời gian hoàn thành: 10/9</p>
                                <button>Xem thêm</button>
                            </div>
                        </div>
                        <div class="hash-card-html">
                            <div class="image">
                               <img src={profileImage2} alt='imagePost'/>
                            </div>
                            <div class="title">
                            <h1>Dash board html css</h1>
                            </div>
                            <div class="des">
                                <p>Nội dung trang dashboard...</p>
                                <p>Thời gian hoàn thành: 12/9</p>
                                <button>Xem thêm</button>
                            </div>
                        </div>
                        <div class="hash-card-html">
                            <div class="image">
                                <img src={profileImage3} alt='imagePost'/>
                            </div>
                            <div class="title">
                            <h1>Dash board html css</h1>
                            </div>
                            <div class="des">
                                <p>Nội dung trang login...</p>
                                <p>Thời gian hoàn thành: 13/9</p>
                                <button>Xem thêm</button>
                            </div>
                        </div>
                        <div class="hash-card-html">
                            <div class="image">
                               <img src={profileImage4} alt='imagePost'/>
                            </div>
                            <div class="title">
                            <h1>Dash board html css</h1>
                            </div>
                            <div class="des">
                                <p>Nội dung trang dashboard...</p>
                                <p>Thời gian hoàn thành: 15/9</p>
                                <button>Xem thêm</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
               </main>
       </div>
    );
  }
  
  export default User;
