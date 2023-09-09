

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
                
               </main>
       </div>
    );
  }
  
  export default Dashboard;
  