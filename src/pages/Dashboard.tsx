import {useEffect, useState} from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import SectionTitle from '../components/section-title/sectiontitle'
import { useAppSelector } from '../lib/store/hooks'
//import {NotificationManager} from 'react-notifications'

const Dashboard = () => {
    const [message, didShow] = useState(false)
    const name = useAppSelector((state) => state.dashboard.dashboardlayout.name)
    const title = useAppSelector((state) => state.dashboard.dashboardlayout.title)
    const subtitle = useAppSelector((state) => state.dashboard.dashboardlayout.subtitle)
    
    useEffect(() => {
        if (message) return
        //NotificationManager.info('You have 5 new messages', null, 1500)
        didShow(true)
    }, [message])
    return (
        <DashboardLayout>
            <div className="w-full lg:px-6">
                <SectionTitle title={title} subtitle={subtitle} />

                <div className="flex flex-row flex-wrap w-full mb-4">
                </div>


            </div>
        </DashboardLayout>
    )
}
export default Dashboard