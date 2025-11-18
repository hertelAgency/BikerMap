import React from 'react'
import {CircularBadge} from '../../../components/badges'
import navigation from "./navigation";
import Title from "./title";
import List from "./list";

const Item = ({icon, title, badge, items}) => (
    <>
        {icon}
        <span>{title}</span>
        {badge && (
            <CircularBadge size="sm" color={badge.color}>
                {badge.text}
            </CircularBadge>
        )}

    </>
)

export default Item
