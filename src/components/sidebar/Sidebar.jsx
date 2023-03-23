
import './sidebar.css';
import sidebarOptions from './sidebarOptions.json';
import { FaChartArea } from "react-icons/fa";

function OptionCheckBox() {
    return (<label className='item-checkbox'>
        <input type="checkbox" onChange={null} />
        <span className='green-check'></span>
    </label>);
}

function ChildItems({ node }) {
    if (node.nodes && node.nodes.length) {

        return (
            <li className="menu-item sub-items" key={node.key}>
                <a href='#' className='menu-link'>
                    <OptionCheckBox /> 
                    {node.label}
                </a>
                <ul className="sub-menu">
                    {node.nodes.map(child => (
                        <ChildItems node={child} key={child.key}/>
                    ))}
                </ul>
            </li>
        );
    }

    return (
        <li className="menu-item" key={node.key}>
            <a href='#' className='menu-link'>
                <OptionCheckBox />
                {node.label}
            </a>
        </li>

    );
}







function Sidebars() {

    return <div>
        <div className="sidebar-header"><FaChartArea /> <span className='title'>Statistics</span> </div>
        <div className="sidebar-main">
            <nav className='sidebar'>
                <ul className='main-sidebar'>
                    {sidebarOptions.map(option => (
                        <ChildItems node={option} key={option.key} />
                    ))}
                </ul>
            </nav>

        </div>
       
    </div>;

}

export default Sidebars;
