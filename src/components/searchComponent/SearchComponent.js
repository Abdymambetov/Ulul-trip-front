import { Box, InputBase, Slider } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import coordinates from '../../images/firstBlockImg/coordinates (2).svg'
import searchImg from '../../images/firstBlockImg/search.svg'
import {
	filterSearch, setValueDuration,
	setValuePrice,
	setValueWhere
} from '../../store/slices/FilterTour'
import Calendar from '../calendar/Calendar'
import classes from '../firstBlockHome/FirstBlockHome.module.css'
const marks = [
	{
		value: 1,
		label: '1 days',
	},
	{
		value: 3,
		label: '3 days',
	},

	{
		value: 7,
		label: 'week',
	},
]
const marksForPrice = [
	{
		value: 20000,
		label: 'до 20000 сом',
	},
	{
		value: 10000,
		label: 'до 10000 сом ',
	},

	{
		value: 5000,
		label: 'до 5000 сом',
	},
	{
		value: 3000,
		label: 'до 3000 сом',
	},
]

function SearchComponent() {
	const [activeInput, setActiveInput] = useState(null)
	const nav = useNavigate()
	const location = useLocation()
	const { value } = useSelector(state => state.filtered)
	const { duration, price_max,region } = value
	const handleSubmit = e => {
		e.preventDefault()
		if (location.pathname !== '/search') {
			nav('/search')
		}
		dispatch(filterSearch(value))
	}
	const dispatch = useDispatch()

	const handleChangeDuration = (event, newValue) => {
		dispatch(setValueDuration(newValue))
	}

	const handleChangeWhere = ({ target }) => {
		dispatch(setValueWhere(target.value))
		
	}

	const handleChangePrice = (event, newValue) => {
		dispatch(setValuePrice(newValue))
	}
	return (
		<form onSubmit={handleSubmit} className={classes.form_inputs}>
			<div className={classes.parent_input_where}>
				{activeInput === 1 && (
					<label
						htmlFor='inputs_from_where'
						className={classes.label_input_where}
					>
						Укажите место назначения
					</label>
				)}

				<div className={classes.slugPos}>
					<InputBase
						type='text'
						placeholder='Куда'
						sx={{
							p: '4px 35px 5px 22px',
							'&.Mui-focused': {
								border: '2px solid #ff6f32 !important',
							},
							'& .MuiInputBase-input': {
								fontSize: '18px !important',
							},
						}}
						value={region}
						onChange={handleChangeWhere}
						className={classes.inputs_from_where}
						onFocus={() => setActiveInput(1)}
						onBlur={() => setActiveInput(null)}
					/>
				</div>
				<img
					src={searchImg}
					alt='searchImg'
					className={classes.search_image}
				/>
				<img
					src={coordinates}
					alt='coordinates'
					className={classes.coordiante_image}
				/>
			</div>
			<div className={classes.parent_input_duration}>
				{activeInput === 2 && (
					<label
						htmlFor='inputs_from_duration'
						className={classes.label_input_duration}
					>
						Укажите кол-во дней
					</label>
				)}
				<InputBase
					type='text'
					placeholder='Длительность'
					sx={{
						'&.Mui-focused': {
							border: '2px solid #ff6f32 !important',
						},
						'& .MuiInputBase-input': {
							fontSize: '18px !important',
						},
					}}
					value={
						duration === ''
							? ''
							: duration === 7
							? `week`
							: `${duration} days`
					}
					className={classes.inputs_from_duration}
					onFocus={() => setActiveInput(2)}
					onBlur={() => setActiveInput(null)}
				/>
				{activeInput === 2 && (
					<Box
						sx={{
							background:
								'linear-gradient(0deg, #FFFFFF 90.37%, #000 120%, rgba(255, 255, 255, 0) 100%)',
							position: 'absolute',
							zIndex:100,
							py: '20px',
							width: 145,
							height: 200,
						}}
						onFocus={() => setActiveInput(2)}
						onBlur={() => setActiveInput(null)}
					>
						<Slider
							sx={{
								'& input[type="range"]': {
									WebkitAppearance: 'slider-vertical',
								},
							}}
							value={duration}
							onChange={handleChangeDuration}
							marks={marks}
							step={null}
							min={1}
							max={7}
							track={false}
							orientation='vertical'
						/>
					</Box>
				)}
			</div>
			<div className={classes.parent_input_price}>
				{activeInput === 3 && (
					<label
						htmlFor='inputs_from_price'
						className={classes.label_input_price}
					>
						Укажите ценовую категорию
					</label>
				)}
				<InputBase
					type='text'
					placeholder='Цена'
					sx={{
						'&.Mui-focused': {
							border: '2px solid #ff6f32 !important',
						},
						'& .MuiInputBase-input': {
							fontSize: '18px !important',
						},
					}}
					value={price_max}
					className={classes.inputs_from_price}
					onFocus={() => setActiveInput(3)}
					onBlur={() => setActiveInput(null)}
				/>
				{activeInput === 3 && (
					<Box
						sx={{
							background:
								'linear-gradient(0deg, #FFFFFF 90.37%, #000 120%, rgba(255, 255, 255, 0) 100%)',
							position: 'absolute',
							py: '20px',
							zIndex:100,
							width: 145,
							height: 200,
						}}
						onFocus={() => setActiveInput(3)}
						onBlur={() => setActiveInput(null)}
					>
						<Slider
							sx={{
								'& input[type="range"]': {
									WebkitAppearance: 'slider-vertical',
								},
							}}
							value={value.valuePrice}
							onChange={handleChangePrice}
							marks={marksForPrice}
							step={null}
							min={3000}
							max={20000}
							track={false}
							orientation='vertical'
						/>
					</Box>
				)}
			</div>
			<Calendar />
			<input
				type='submit'
				onSubmit={handleSubmit}
				placeholder='Найти туры'
				className={classes.form_btn}
				value='Найти туры'
			/>
		</form>
	)
}

export default SearchComponent
