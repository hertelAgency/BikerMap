import React from 'react'
import {ToggleLeft} from 'react-feather'
import {Link} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux'

const Logo = () => {
    const {leftSidebar} = useSelector(
        state => ({
            leftSidebar: state.dashboard.leftSidebar
        }),
        shallowEqual
    )
    const {showLogo} = {...leftSidebar}
    if (!showLogo) return null
    return (
        <div
            className="logo h-16 flex flex-row items-center uppercase font-bold text-lg tracking-wider justify-between px-4">
            <Link href="/">
                <span>Trailriding</span>
            </Link>
        </div>
    )
}

export default Logo
