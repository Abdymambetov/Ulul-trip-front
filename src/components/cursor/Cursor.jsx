import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './Cursor.css'
function Cursor() {
    const { cursor } = useSelector(state => state.loading)
    const cursorRef = useRef()
    const circleRef = useRef()
    useEffect(() => {
        const cursor = cursorRef.current
        const circle = circleRef.current
        cursor.style.display = 'none'
        circle.style.display = 'none'
        document.addEventListener('mousemove', e => {
            const x = e.clientX
            const y = e.clientY
            // const circleX = x
            // const circleY = y
            const circleX = x - 20
            const circleY = y - 20
            cursor.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`
            circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`
        })

        function addMoveClass(e) {
            circle.classList.add('move')
        }

        function removeMoveClass() {
            circle.classList.remove('move')
        }

        function hideCursor() {
            cursor.style.display = 'none'
            circle.style.display = 'none'
        }

        function showCursor() {
            cursor.style.display = 'block'
            circle.style.display = 'block'
        }

        window.addEventListener('mouseout', hideCursor)
        window.addEventListener('mouseover', showCursor)

        setTimeout(() => {
            circle.classList.add('show')
        }, 1000)

        document.addEventListener('mouseenter', addMoveClass)
        document.addEventListener('mouseleave', removeMoveClass)

        return () => {
            document.removeEventListener('mouseenter', addMoveClass)
            document.addEventListener('mouseleave', removeMoveClass)
            document.removeEventListener('mousemove')
            window.removeEventListener('mouseout', hideCursor)
            window.removeEventListener('mouseover', showCursor)
        }
    }, [])
    return (
        <>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={circleRef} className={`cursor-circle ${cursor}`}></div>
        </>
    )
}

export default Cursor
