import {shallowEqual, useSelector} from 'react-redux'

const User = () => {
    const {leftSidebar} = useSelector(
        state => ({
            leftSidebar: state.dashboard.leftSidebar,
            user: state.dashboard.user,
        }),
        shallowEqual
    )

    return (
        <div className="w-full p-4 pb-0">
            <div className="flex items-center justify-start">
                <div className="flex-shrink-0 w-12">
                    <img
                        src={`/assets/images/m1.png`}
                        alt="Face"
                        className="shadow rounded-full h-12 w-12 border-2"
                    />
                </div>
                <div className="ltr:ml-2 rtl:mr-2 py-2">
                    <p
                        className={`text-sm font-bold whitespace-no-wrap`}>
                        Ewald Hertel
                    </p>
                    <p className={`text-sm whitespace-no-wrap`}>
                        ewald@kage-dev.de
                    </p>
                </div>
            </div>
        </div>
    )
}

export default User