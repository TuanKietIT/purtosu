
import { 
    DashboardOutlined,
    UserOutlined,
    CalendarOutlined,
    FileMarkdownOutlined,
    SketchOutlined,
    CodepenCircleOutlined,
    SettingOutlined,
    LogoutOutlined
  } from '@ant-design/icons';

import Logo from '../assets/images/logo.png';

const Sidebar = () => {
    return (
        <aside>
            <div className="toggle">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                    <h2>Purtosu<span className="danger">PTK</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <a href="/" >
                    <span>
                       <DashboardOutlined />
                    </span>
                    <span className="material-icons-sharp">
                        Dashboard
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <UserOutlined />
                    </span>
                    <span className="material-icons-sharp">
                        User
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <CalendarOutlined />
                    </span>
                    <span className="material-icons-sharp">
                        Calender
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <FileMarkdownOutlined />
                    </span>
                    <span className="material-icons-sharp">
                        Category
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <SketchOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       English
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <SketchOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       Japanese
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <CodepenCircleOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       Html/css
                    </span>
                </a>
                <a href="/" >
                    <span>
                      <CodepenCircleOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       React
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <CodepenCircleOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       Vue
                    </span>
                </a>
                <a href="/" >
                    <span>
                       <CodepenCircleOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       Angular
                    </span>
                </a>
                <a href="/" >
                    <span>
                    <SettingOutlined />
                    </span>
                    <span className="material-icons-sharp">
                       Setting
                    </span>
                </a>
                <a href="/">
                    <span>
                       <LogoutOutlined />
                    </span>
                    <span className="material-icons-sharp">
                        logout
                    </span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar;