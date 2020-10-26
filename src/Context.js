import React, { useState, useEffect } from 'react'
const ThemeContext = React.createContext();



function Provider(props) {
    const [beers, setBeers] = useState([]) //
    const [prevPage, setPrevPage] = useState(false)
    const [nextPage, setNextPage] = useState(false)
    const [url, setURL] = useState("https://api.punkapi.com/v2/beers?page=1")//

    useEffect(() => {
      async function beersUpdate() {
        const beerPromise = await fetch(url).then(res => res.json())
        const finalBeer = setBeers(beerPromise)
        return finalBeer
      }
      beersUpdate()
    }, [url])

    return (
        <ThemeContext.Provider value ={{
          beers, 
          setBeers, 
          nextPage,
          setNextPage,
          prevPage, 
          setPrevPage,
          url, 
          setURL
          }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, Provider }