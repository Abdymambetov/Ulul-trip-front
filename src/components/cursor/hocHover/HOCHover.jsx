import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    getBigerCursor,
    getSmallerCursor
} from '../../../store/slices/preloaderSlice'

function WithHoverStyles(WrappedComponent) {
    return function WithHoverStyles(props) {
        const dispatch = useDispatch()

        function handleMouseEnter() {
            dispatch(getBigerCursor())
        }

        function handleMouseLeave() {
            dispatch(getSmallerCursor())
        }

        return (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <WrappedComponent {...props} />
            </div>
        )
    }
}
// export function HoveredComponent({ children }) {
//     return WithHoverStyles(children)
// }
export default WithHoverStyles
