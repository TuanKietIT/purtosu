
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

                <div className="profile">
                    <div className="info">
                        <p><b>Phan Tuấn Kiệt</b></p>
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