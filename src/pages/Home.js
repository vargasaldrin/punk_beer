import React from 'react'
import Header from '../components/Header'
import Beers from '../components/Beers'
import Navigator from '../components/Navigator'

function Home(props) {


    return (
        <>
            <Header />
            <Navigator />
            <Beers />
        </>
    )
}

export default Home