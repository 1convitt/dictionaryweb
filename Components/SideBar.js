import { Link } from "react-router-dom";
const SideBar = () => {
    return (
        <div>
            <ul className="p-4">
                <li className="p-2 hover:bg-gray-700 rounded">
                    <Link to='/home'>Trang chủ</Link>
                </li>
                <li className="p-2 hover:bg-gray-700 rounded">
                    <Link to='/newcontents'>News</Link>
                </li>
                <li className="p-2 hover:bg-gray-700 rounded">
                    <Link to='dichvu'>Dịch vụ</Link>
                </li>
                <li className="p-2 hover:bg-gray-700 rounded">
                    <Link to='/lienhe'>Liên hệ</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;