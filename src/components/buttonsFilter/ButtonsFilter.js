import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setComplexity } from '../../store/slices/FilterTour'
import { categoryAction } from '../../store/slices/TourSlice'
import classes from './ButtonsFilter.module.css'
const complexityList = ['Легкий', 'Средний', 'Сложный', 'Экстремальный']
function ButtonsFilter() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(categoryAction())
	}, [])
	const { categoryArr } = useSelector(state => state.tours)
	const {value} = useSelector(state=> state.filtered)
	const handleSetComplexity = param => {
		dispatch(setComplexity(param))
	}
	const handleSetCategory = param => {
		dispatch(setCategory(param))
	}
	return (
		<div className={classes.button}>
			<div className={classes.container}>
				<div className={classes.button_inner}>
					<div className={classes.buttons_tour}>
						{complexityList.map(item => (
							<button
								key={item}
								onClick={() => {
									handleSetComplexity(item)
								}}
								className={`${classes.tours_btn} ${value?.complexity === item ? classes.selected_color : ''}`}
							>
								{item}
							</button>
						))}
					</div>
					<div className={classes.buttons_tour}>
						{categoryArr.map(item => (
							<button
								onClick={() => {
									handleSetCategory(item.name)
								}}
								className={`${classes.tours_btn} ${value?.category === item?.name ? classes.selected_color : ''}`}
								key={item?.id}
							>
								{item?.name}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ButtonsFilter
