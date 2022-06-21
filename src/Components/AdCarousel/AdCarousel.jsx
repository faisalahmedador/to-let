import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import CardAds from "../../Components/CardAds/CardAds";
import { addDetails } from "../../Assets/data/data";
import { GrNext, GrPrevious} from 'react-icons/gr'
const AdCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        // <Carousel /* activeIndex={index} onSelect={handleSelect} */
        // nextIcon={<GrNext size='2.5em' color='#715EF1' style={{backgroundColor: '#715EF1', padding: '4px 4px'}}/>}
        // prevIcon={<GrPrevious size='2.5em' color='#715EF1' style={{backgroundColor: '#715EF1', padding: '4px 4px'}} />  }
        // >
        //
        // {addDetails.map((data) => {
        //     return (
        //     <Carousel.Item>
        //         <CardAds
        //             id={data.id}
        //             description={data.description}
        //             area={data.area}
        //             location={data.location}
        //             specification={data.specification}
        //             price={data.price}
        //             available={data.available}
        //             contact={data.contact}
        //             verified={data.verified}
        //             img={data.img}
        //         />
        //     </Carousel.Item>
        //     );
        //   })}
        //
        // </Carousel>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {addDetails.map((data) => {
                return (
                    <CardAds
                        id={data.id}
                        description={data.description}
                        area={data.area}
                        location={data.location}
                        specification={data.specification}
                        price={data.price}
                        available={data.available}
                        contact={data.contact}
                        verified={data.verified}
                        img={data.img}
                    />
                );
              })}
        </Carousel>
    );
};

export default AdCarousel;