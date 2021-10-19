import React from "react";
import CardAds from "../../Components/CardAds/CardAds";
import { addDetails } from "../../Assets/data/data";

const UserAddList = () => {

    return (
        <div className='mt-5'>
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
        </div>

    )
}

export default UserAddList;