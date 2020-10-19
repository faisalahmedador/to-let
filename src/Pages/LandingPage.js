import React, { Component} from 'react'

import UpperHeader from '../Components/UpperHeader/UpperHeader'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import SearchBox from '../Components/SearchBox/SearchBox'
import Catagory from '../Components/Catagory/Catagory'
import PopularSearch from '../Components/PopularSearch/PopularSearch'
import Footer from '../Components/Footer/Footer'
import langingPage from '../images/landingPage.jpg'


class LandingPage extends Component{
    render(){
        return(
            <>
                <UpperHeader />
                <Header />
                <Hero max='true' img={langingPage}>
                    <SearchBox />
                    <Catagory />
                </Hero>
                <PopularSearch />
                <Footer />
            </>
        )
    }
}

export default LandingPage