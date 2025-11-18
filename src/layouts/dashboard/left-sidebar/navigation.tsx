import React from 'react'
import * as Icon from 'react-feather'

const navigation = [
    {
        title: 'Trails',
        items: [
            {
                url: '/',
                icon: <Icon.EyeOff size={20}/>,
                title: 'Privat',
                badge: {
                    color: 'red',
                    text: 9
                },
                items: []
            },
            {
                url: '/',
                icon: <Icon.Eye size={20}/>,
                title: 'Öffentliche',
                badge: {
                    color: 'green',
                    text: 6
                },
                items: []
            }
        ]
    },
    {
        title: 'Spots',
        items: [
            {
                url: '/',
                icon: <Icon.EyeOff size={20}/>,
                title: 'Privat',
                badge: {
                    color: 'red',
                    text: 9
                },
                items: []
            },
            {
                url: '/',
                icon: <Icon.Eye size={20}/>,
                title: 'Öffentliche',
                badge: {
                    color: 'green',
                    text: 6
                },
                items: []
            }
        ]
    },
    {
        title: 'Bikeparks',
        items: [
            {
                url: '/',
                icon: <Icon.Navigation size={20}/>,
                title: 'Deutschland',
                badge: {
                    color: 'blue',
                    text: 12
                },
                items: []
            },
            {
                url: '/',
                icon: <Icon.Navigation size={20}/>,
                title: 'EU',
                badge: {
                    color: 'blue',
                    text: 6
                },
                items: []
            }
        ]
    },
    {
        title: 'Gruppen',
        items: [
            {
                url: '/',
                icon: <Icon.Compass size={20}/>,
                title: 'Deine Gruppen',
                badge: {
                    color: 'blue',
                    text: 2
                },
                items: [
                    {
                        url: '/',
                        icon: <Icon.ChevronsRight size={20}/>,
                        title: 'Siegener Trailjäger',
                        items: []
                    },
                    {
                        url: '/',
                        icon: <Icon.ChevronsRight size={20}/>,
                        title: 'FrOErider',
                        items: [ ]
                    },
                ]
            },

        ]
    },
    {
        title: 'Account',
        items: [
            {
                url: '/',
                icon: <Icon.User size={20}/>,
                title: 'Profil',
                items: []
            }
        ]
    }
]
export default navigation
