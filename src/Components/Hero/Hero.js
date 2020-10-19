import React  from 'react'
import styled from 'styled-components'

const Hero = ({img, title, searchElements,children,max}) =>{
    return(
        <>
            <section id='hero' img={img} >
                <div id='hero_components'>
                    {children}
                </div>
            </section>
        </>
    )
}





export default Hero;