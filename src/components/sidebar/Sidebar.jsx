import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="top">
                <span className="logo">AdminSYS</span>
            </div>
            <hr />

            <div className="center">
                <ul>
                    <p className="title">main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>DashBoard</span>
                    </li>
                    <p className="title">list</p>

                    <li>
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <StorefrontOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>

                    <li>
                        <CreditCardOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <p className="title">useful</p>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>delivery</span>
                    </li>
                    <li>
                        <TimelineOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <p className="title">service</p>

                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <AddchartOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <p className="title">user</p>

                    <li>
                        <ManageAccountsOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption">
                    <DarkModeOutlinedIcon className="icon" />
                </div>
                <div className="colorOption">
                    <WbSunnyOutlinedIcon className="icon" />
                </div>
            </div>


        </div>
    )
}
