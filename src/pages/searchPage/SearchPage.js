import React from 'react'
import classes from './SearchPage.module.css'
import ButtonsFilter from '../../components/buttonsFilter/ButtonsFilter'
import CardSearchPage from '../../components/cardSearchPage/CardSearchPage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import CardModalPage from '../cardModalPage/CardModalPage'
function SearchPage() {
    return (
        <div className={classes.search_parent}>
            <div className={classes.container}>
                <div className={classes.search_inner}>
                    <div className={classes.search_form}>
                        <SearchComponent/>
                    </div>
                </div>
            </div>
            <ButtonsFilter />
            <CardSearchPage />
            <CardModalPage/>
        </div>
    )
}

export default SearchPage
