import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



import './widget.scss';

export const Widget = ({ type }) => {


    let data;

    //create const ammount with random number
    const ammount = Math.floor(Math.random() * 100);
    const diff = Math.floor(Math.random() * 100);

    switch (type) {
        case "user":
            data = {
                title: "users",
                isMoney: false,
                link: "see-all-users",
                icon: <PersonOutlineOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: "rgba(3,120,128,0.2",
                        color: "green"
                    }}
                />
            }
            break;

        case "order":
            data = {
                title: "orders",
                isMoney: true,
                link: "see-all-orders",
                icon: <LocalGroceryStoreOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: "rgba(6,50,48,0.2",
                        color: "red"
                    }}
                />
            }
            break;
        case "balance":
            data = {
                title: "balances",
                isMoney: false,
                link: "see-all-balances",
                icon: <AccountBalanceWalletOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: "rgba(255,250,128,0.2",
                        color: "goldenrod"
                    }}
                />
            }
            break;
        case "earning":
            data = {
                title: "earnings",
                isMoney: false,
                link: "see-all-earnings",
                icon: <AttachMoneyOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: "rgba(95,180,0,0.2",
                        color: "magenta"
                    }}
                />
            }
            break;
        default:
            break;
    }



    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {ammount}</span>
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>

                {data.icon}

            </div>
        </div>
    )
}
