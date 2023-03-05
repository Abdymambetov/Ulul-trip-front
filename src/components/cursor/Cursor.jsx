import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Cursor.css'
function Cursor() {
    const { cursor } = useSelector(state => state.loading)
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor')
        const circle = document.querySelector('.cursor-circle')

        document.addEventListener('mousemove', e => {
            const x = e.clientX
            const y = e.clientY
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

        setTimeout(() => {
            circle.classList.add('show')
        }, 1000)

        document.addEventListener('mouseenter', addMoveClass)
        document.addEventListener('mouseleave', removeMoveClass)

        return () => {
            document.removeEventListener('mouseenter', addMoveClass)
            document.addEventListener('mouseleave', removeMoveClass)
            document.removeEventListener('mousemove')
        }
    }, [])
    return (
        <>
            <div className="custom-cursor"></div>
            <div className={`cursor-circle ${cursor}`}></div>
        </>
    )
}

export default Cursor
