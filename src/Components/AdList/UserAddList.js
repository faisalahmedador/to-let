import React, { useEffect, useState } from "react";
import './_userAddList.scss'
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAdsAction } from "../../redux/Actions/GetUserAdAction";

const UserAddList = () => {

    const [userAds, setUserAds] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAdsAction());
    }, []);

    const { loading, ads} = useSelector(state => state.getUserAdsReducers);

    useEffect(() => {
        if (ads) {
            console.log(ads);
        }
    }, [ads])


    return (
        <div className='userads container'>
            <Table size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}

export default UserAddList;