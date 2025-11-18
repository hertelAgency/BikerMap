import {X} from 'react-feather'
import {shallowEqual} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../lib/store/hooks'

const Toggle = ({}) => {
    const {toggleRightSidebar} = useAppSelector(
        state => ({
            toggleRightSidebar: state.dashboard.toggleRightSidebar
        }),
        shallowEqual
    )
    const dispatch = useAppDispatch()
    return (
        <button
            onClick={() =>
                dispatch({
                    type: 'SET_CONFIG',
                    config: {
                        key: 'toggleRightSidebar',
                        value: !toggleRightSidebar
                    }
                })
            }
            className="btn btn-transparent btn-circle">
            <X/>
        </button>
    )
}

export default Toggle
