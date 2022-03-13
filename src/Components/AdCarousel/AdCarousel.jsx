import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CardAds from "../../Components/CardAds/CardAds";
import { addDetails } from "../../Assets/data/data";
import { GrNext, GrPrevious} from 'react-icons/gr'
import './_adCarousel.scss';
const AdCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel /* activeIndex={index} onSelect={handleSelect} */  indicators={false} className='carousel-main'
        nextIcon={<GrNext size='2.5em' color='#715EF1' style={{backgroundColor: '#715EF1', padding: '4px 4px'}}/>} 
        prevIcon={<GrPrevious size='2.5em' color='#715EF1' style={{backgroundColor: '#715EF1', padding: '4px 4px'}} />  }
        >

        {addDetails.map((data) => {
            return (
            <Carousel.Item>
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
            </Carousel.Item>
            );
          })} 

        </Carousel>
    );
};

export default AdCarousel;