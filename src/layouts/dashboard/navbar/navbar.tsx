import {Link} from 'react-router-dom';
import {Menu, Settings, ChevronsLeft} from 'react-feather'
import Search from './search'
import { useAppDispatch, useAppSelector } from '../../../lib/store/hooks';
import '../../../styles/components/navbar.scss'

const Navbar = () => {
    const collapsed = useAppSelector((state) => state.dashboard.collapsed);
    const toggleRightSidebar = useAppSelector((state) => state.dashboard.toggleRightSidebar);
    const dispatch = useAppDispatch()
    return (
        <div className="navbar">
            <div className="navbar-inner w-full flex items-center justify-start">
                <button
                    onClick={() =>
                        dispatch({
                            type: 'SET_CONFIG',
                            config: {
                                key: 'collapsed',
                                value: !collapsed
                            }
                        })
                    }
                    className="mx-4">
                    {collapsed ? <Menu size={20}/> : <ChevronsLeft size={20}/>}

                </button>
                <Search/>
                <span className="ml-auto"></span>
                <Link to="/pages/logout">Logout</Link>
                <Link to="/pages/login">Login</Link>
                <button
                    className="btn-transparent flex items-center justify-center h-16 w-8 pl-2 lg:pl-0"
                    onClick={() =>
                        dispatch({
                            type: 'SET_CONFIG',
                            config: {
                                key: 'toggleRightSidebar',
                                value: !toggleRightSidebar
                            }
                        })
                    }>
                    <Settings size={18}/>
                </button>
            </div>
        </div>
    )
}

export default Navbar
