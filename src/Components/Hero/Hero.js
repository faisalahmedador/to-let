import React  from 'react';

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