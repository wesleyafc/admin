import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './featured.scss';
export const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>

            <div className="bottom">
                <div className="featuredChart">

                </div>
            </div>
        </div>
    )
}
