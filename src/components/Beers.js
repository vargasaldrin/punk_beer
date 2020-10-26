import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../Context'

function Beers(props) {
    const {beers, setNextPage} = useContext(ThemeContext)

    useEffect(() => {
        setNextPage(beers.length < 25)
    }, [beers])

    const beerItems = beers.map(beer => {
        return (
            <div className='beer_card' key={beer.id}>
                <div className="beerItem">
                    <img className="beer_img" src={beer.image_url} alt="beer"/>
                    <h3>{beer.name}</h3>
                    <span className="beer_info">
                        <span><b>ABV:</b> {beer.abv}%</span>
                        <span><b>IBU:</b> {beer.ibu}</span>
                    </span>
                </div>
                <div className='beer_content'>
                    <div className='beer_name'>{beer.name}</div>
                    <div className='beer_tagline'>{beer.tagline}</div>
                    <div className='beer_description'>{beer.description}</div>
                    <div className='beer_foods'>Pair with: {beer.food_pairing.join(", ")}</div>
                </div>
            </div>
    )})

    return (
        <div id="beers_container">
            {beerItems}
        </div>
    )
}

export default Beers