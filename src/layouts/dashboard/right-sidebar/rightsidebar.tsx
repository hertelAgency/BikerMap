import UserCard from './user-card'
import Toggle from './toggle'
import {shallowEqual} from 'react-redux'
import { useAppSelector } from '../../../lib/store/hooks'

const layouts = [
    {name: 'layout-1', title: 'Default sidebar'},
    {name: 'layout-2', title: 'Sidebar over'},
    {name: 'layout-3', title: 'Small sidebar'},
    {name: 'layout-4', title: 'Top navigation'}
]

const RightSidebar = () => {
    const {toggleRightSidebar} = useAppSelector(
        state => ({
            leftSidebar: state.dashboard.leftSidebar,
            toggleRightSidebar: state.dashboard.toggleRightSidebar
        }),
        shallowEqual
    )
    
    return (
        <div
            className={`right-sidebar ${
                toggleRightSidebar ? 'open' : ''
            }`}>
            <div>
                <div>
                    <div className="flex flex-col">
                        <div
                            className={`px-4 h-16 flex flex-row items-center justify-between`}>
                            <div className={`uppercase font-bold tracking-wider`}>
                                Settings
                            </div>
                            <Toggle/>
                        </div>
                    </div>

                    <div className="flex flex-col p-4">

                        {/*section*/}
                        <div className="mb-4">
                            <div
                                className={`uppercase text-sm font-bold font-poppins tracking-wider`}>
                                Layout
                            </div>
                            <div className="flex flex-col">
                                {layouts.map((layout, i) => (
                                    <button
                                        key={i}
                                        className={`flex h-8 w-full`}>
                                        {layout.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/*section*/}
                        <div className="mb-4">
                            <div
                                className={`uppercase text-sm font-bold font-poppins tracking-wider`}>
                                Left sidebar
                            </div>
                            <button
                                className={`flex h-8 w-full`}> logo
                            </button>
                            <button
                                className={`flex h-8 w-full`}>section title
                            </button>
                            <button
                                className={`flex h-8 w-full`}> user card
                            </button>
                        </div>
                        <UserCard/>

                        {/*end section*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
