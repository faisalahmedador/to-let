import React  from 'react';
import './_hero.scss';
const Hero = ({img, title, searchElements,children,max}) =>{
    return(
        <div className="hero-div">
            <section id='hero' img={img} >
                <div id='hero_components'>
                    {children}
                </div>
            </section>
        </div>
    )
}





export default Hero;