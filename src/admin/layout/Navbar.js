
import logoAdmin from '../assets/images/logo.png';
import profileImage from '../assets/images/profile-1.jpg'


const Navbar = () => {
    return (
        <div className="right-section">
            <div className="nav">
                <button id="menu-btn">
                    <span className="material-icons-sharp">
                        menu
                    </span>
                </button>
                <div className="dark-mode">
                    <span className="material-icons-sharp active"></span>
                    <span className="material-icons-sharp"></span>
                </div>

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Reza</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src={profileImage} alt='profile'/>
                    </div>
                </div>

            </div>

            <div className="user-profile">
                <div className="logo">
                    <img src={logoAdmin} alt='profile'/>
                    <h2>AsmrProg</h2>
                    <p>Fullstack Web Developer</p>
                </div>
            </div>

            <div className="reminders">
                <div className="header">
                    <h2>Reminders</h2>
                    <span className="material-icons-sharp">
                        notifications_none
                    </span>
                </div>

                <div className="notification">
                    <div className="icon">
                        <span className="material-icons-sharp">
                            volume_up
                        </span>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Workshop</h3>
                            <small className="text_muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span className="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div className="notification deactive">
                    <div className="icon">
                        <span className="material-icons-sharp">
                            edit
                        </span>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Workshop</h3>
                            <small className="text_muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span className="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div className="notification add-reminder">
                    <div>
                        <span className="material-icons-sharp">
                            add
                        </span>
                        <h3>Add Reminder</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar;