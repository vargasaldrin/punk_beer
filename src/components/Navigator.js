import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context'
import Select from './Select'
import * as svg from '../svg/images'

function Navigator(props) {
    const {setURL, nextPage, prevPage, setPrevPage}  = useContext(ThemeContext);
    const [optionABV, setOptionABV] = useState("")
    const [optionIBU, setOptionIBU] = useState("")

    const [page, setPage] = useState(1)


    function handleABV(e) {
        switch(e.target.id) {
            case "beerAll":
                setOptionABV("");
                break;
            case "beerWeak":
                setOptionABV("&abv_lt=4.6")
                break;
            case "beerMedium":
                setOptionABV("&abv_gt=4.5&abv_lt=7.6");
                break;
            case "beerStrong":
                setOptionABV("&abv_gt=7.5");
                break;
            default:
                break;
        }
        setPage(1)
        e.target.checked = true
    }

    function handleIBU(e) {
        switch (e.target.id) {
            case "hopsAll":
               setOptionIBU("")
                break;
            case "hopsWeak":
                setOptionIBU("&ibu_lt=35")
                break;
            case "hopsMedium":
                setOptionIBU("&ibu_gt=34&ibu_lt=75")
                break;
            case "hopsStrong":
                setOptionIBU("&ibu_gt=74")
                break;
            default:
                break;
        }
        setPage(1)
        e.target.checked = true
    }

    function prevPageClick(e) {
        setPage(page - 1)
    }

    function nextPageClick(e) {
        setPage(page + 1)
    }

    useEffect(() => {
        setURL("https://api.punkapi.com/v2/beers?page=" + page + optionABV + optionIBU)
        setPrevPage(page === 1)
    }, [page, optionABV, optionIBU, setPrevPage, setURL])

    return (
        <nav>
            <div className="select">
                <span className="navTitle">Alcohol Vol (ABV):</span>
                <form id="filterBeer" className="filter-form">
                    <Select id="beerAll" classType="beerChoice" onChange={handleABV} check="true"><span id="beerAll">All</span></Select>
                    <Select id="beerWeak" classType="beerChoice" onChange={handleABV}>{svg.beerSmall}</Select>
                    <Select id="beerMedium" classType="beerChoice" onChange={handleABV}>{svg.beerMed}</Select>
                    <Select id="beerStrong" classType="beerChoice" onChange={handleABV}>{svg.beerLarge}</Select>
                </form>
            </div>

            <div className="select">
                <span className="navTitle">Hoppiness (IBU):</span>
                <div id="filterHops" className="filter-form">
                    <Select id="hopsAll" classType="hopsChoice" onChange={handleIBU} check="true"><span id="hopsAll">All</span></Select>
                    <Select id="hopsWeak" classType="hopsChoice" onChange={handleIBU}>{svg.hopsSmall}</Select>
                    <Select id="hopsMedium" classType="hopsChoice" onChange={handleIBU}>{svg.hopsMed}</Select>
                    <Select id="hopsStrong" classType="hopsChoice" onChange={handleIBU}>{svg.hopsLarge}</Select>
                </div>
            </div>

            <div className="select">
            <span className="navTitle">Page: {page}</span>
                <div id="filterPage" className="filter-form">
                    <button id="prevPage" className="page-btn" onClick={prevPageClick} disabled={prevPage}>
                        <i className="far fa-caret-square-left"></i>
                    </button>
                    <button id="nextPage" className="page-btn" onClick={nextPageClick} disabled={nextPage}>
                        <i className="far fa-caret-square-right"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigator