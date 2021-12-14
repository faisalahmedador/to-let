import React, { useEffect, useState } from "react";
import './_userAddList.scss'
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAdsAction } from "../../redux/Actions/GetUserAdAction";
import { useHistory } from 'react-router-dom'

const UserAddList = () => {

    const [userAds, setUserAds] = useState([]);
    const dispatch = useDispatch();
    let history = useHistory()

    useEffect(() => {
        dispatch(getUserAdsAction());
    }, []);

    const { loading, ads} = useSelector(state => state.getUserAdsReducers);

    useEffect(() => {
        if (ads) {
            console.log('ads ', ads.response.data.data );
            setUserAds( ads.response.data.data )
        }
    }, [ads])


    const infoClick = (ad) => {
        console.log('add', ad );

        history.push(`/myads/${ad.id}`)
        history.push({
            pathname: `/myads/${ad.id}`,
            state: {ad}
        })
    }

    return (
        <div className='userads container'>
            <Table size="lg" striped bordered hover >
                <thead>
                    <tr>
                        <th> Type </th>
                        <th> Division </th>
                        <th> Area </th>
                        <th> Address </th>
                        <th> Floor </th>
                        <th> Room </th>
                        <th> Attached Drawing Dining </th>
                        <th> Balcony </th>
                        <th> Toilet </th>
                        <th> Attached Toilet </th>
                        <th> Gas </th>
                        <th> Rent </th>
                        <th> Contact No. </th>
                        <th> Info page </th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                        userAds.map((x, i) => {
                            return(
                                <>
                                <td> {x.type}  </td>
                                <td> {x.division} </td>
                                <td> {x.area} </td>
                                <td> {x.address} </td>
                                <td> {x.floor} </td>
                                <td> {x.rooms} </td>
                                <td> {x.attached_drawing_dinning} </td>
                                <td> {x.balcony} </td>
                                <td> {x.toilet} </td>
                                <td> {x.attached_toilet} </td>
                                <td> {x.gas} </td>
                                <td> {x.rent} </td>
                                <td> {x.contact_no} </td>
                                <td> 
                                    <button style={{  border: 'none', boxShadow: '0  0 5px 0 rgba(0,0,0,.5)', backgroundColor: '#715EF1', color: 'white', fontWeight: '600' }} 
                                            onClick={() => infoClick(x)} 
                                    >   
                                        Infos. 
                                    </button> 
                                </td>
                                </>
                            )
                        })
                    }
                    <tr>
                    </tr>
                    
                </tbody>

            </Table>
        </div>

    )
}

export default UserAddList;