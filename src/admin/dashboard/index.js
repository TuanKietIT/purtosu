

import  './index.css';




import SideBar from '../layout/Sidebar.js'
import NavBar from '../layout/Navbar.js';

import profileImage from '../assets/images/profile-1.jpg'
import profileImage2 from '../assets/images/profile-2.jpg'
import profileImage3 from '../assets/images/profile-3.jpg'
import Plus from '../assets/images/plus.png'


const Dashboard = () => {
    return (
       <div className="container"> 
           <SideBar/>
           <main>
               <NavBar/>
                <h1>OverView</h1>
                <div className="analyse">
                    <div className="sales">
                        <div className="status">
                            <div className="info">
                                <h3>
                                   Total Sales
                                </h3>
                                <h1>$65,024</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <div className="status">
                            <div className="info">
                                <h3>
                                   Total Sales
                                </h3>
                                <h1>$65,024</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <div className="status">
                            <div className="info">
                                <h3>
                                   Total Sales
                                </h3>
                                <h1>$65,024</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <div className="status">
                            <div className="info">
                                <h3>
                                   Total Sales
                                </h3>
                                <h1>$65,024</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="visits">
                        <div className="status">
                            <div className="info">
                                <h3>Site Visit</h3>
                                <h1>24,981</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>-48%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searches">
                        <div className="status">
                            <div className="info">
                                <h3>Searches</h3>
                                <h1>14,147</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+21%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-users">
                    <h2>New Users</h2>
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
                    </div>
                </div>
                <div className="recent-orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Number</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Course Name</td>
                                <td>Course Number</td>
                                <td>Payment</td>
                                <td>Status</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/">Show All</a>
                </div>
               </main>
       </div>
    );
  }
  
  export default Dashboard;
  