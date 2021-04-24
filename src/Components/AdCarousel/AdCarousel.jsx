import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CardAds from "../../Components/CardAds/CardAds";
import { addDetails } from "../../Assets/data/data";
import { GrNext } from 'react-icons/gr';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'

const AdCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel /* activeIndex={index} onSelect={handleSelect} */  
        nextIcon={<BsFillCaretRightFill style={{ color: '#715EF1', fontSize: '20px' }}/>} 
        prevIcon={< BsFillCaretLeftFill style={{ color: '#715EF1', fontSize: '20px' }} />  }
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