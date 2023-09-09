
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

        </div>
    )
}

export default Navbar;