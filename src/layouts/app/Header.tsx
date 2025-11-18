import {useEffect, useState} from "react";
import { NavLink } from "react-router";
import "../../styles/components/navbar.scss"
import Logo from "../../assets/Biker-Map-Logo.svg";


const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        let currentPosition = window.pageYOffset;
        if(currentPosition > scrollTop){
            setSticky(true);
        }else{
            setSticky(false);
        }
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    return(
        <header
            className="lg:px-4 max-w-[100vw] max-w-lg:mr-auto max-lg:top-0 fixed top-0 lg:left-1/2 lg:-translate-x-1/2 z-20 flex h-[60px] w-full 
                    text-gray-700 bg-white dark:text-gray-200 dark:bg-[#17181b] px-[3%] rounded-md lg:max-w-5xl
                    lg:justify-around lg:!backdrop-blur-lg lg:opacity-[0.99]"
        >
            <a className="flex p-[4px] gap-2" href="#">
               

                <div className="h-[50px] max-w-[100px]">
                    <img
                        src={Logo}
                        alt="logo"
                        className="object-contain h-full w-full dark:invert"
                    />
                </div>
                <span className="uppercase text-base font-medium">Biker-Map</span>
            </a>
            <div
                className="collapsible-header animated-collapse max-lg:shadow-md"
                id="collapsed-header-items"
            >
                <nav
                    className="relative flex h-full max-lg:h-max w-max gap-5 text-base max-lg:mt-[30px] max-lg:flex-col 
                                max-lg:gap-5 lg:mx-auto place-items-center"
                >
                    <NavLink className="header-links" to="/"> Home </NavLink>
                    <NavLink className="header-links" to="trailmap"> Map </NavLink>
                    
                </nav>
            </div>
        </header>
    )
}

export default Header;