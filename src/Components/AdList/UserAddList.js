import React, { useEffect, useState } from "react";
import './_userAddList.scss'
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAdsAction } from "../../redux/Actions/GetUserAdAction";
import { useHistory } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';

const UserAddList = () => {

    const [userAds, setUserAds] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const dispatch = useDispatch();
    let history = useHistory()

    useEffect(() => {
        dispatch(getUserAdsAction());
    }, []);

    const { loading, ads } = useSelector(state => state.getUserAdsReducers);

    useEffect(() => {
        if (ads) {
            console.log('ads ', ads.response.data.data);
            setUserAds(ads.response.data.data)
        }
        
    }, [ads])

    useEffect(() => {
        const endOffset = itemOffset + 3;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(userAds.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userAds.length / 3));
    }, [userAds, itemOffset])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 3) % userAds.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    const infoClick = (ad) => {
        console.log('add', ad);

        history.push(`/myads/${ad.id}`)
        history.push({
            pathname: `/myads/${ad.id}`,
            state: { ad }
        })
    }

    return (
        <div className='userads container'>
            {userAds.length ? <Table size="lg" hover >
                <thead>
                    <tr>
                        <th></th>
                        <th> Type </th>
                        <th> Address </th>
                        <th> Rent </th>
                        <th> Contact No. </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>


                    {
                        currentItems.map((x, i) => {
                            return (
                                <tr>
                                    <td><img src={x.images[0].image} alt="home_img" style={{ height: '80px', width: '100px' }} /></td>
                                    <td className=""> {x.type}  </td>
                                    <td> {x.address} </td>
                                    <td> {x.rent} </td>
                                    <td> {x.contact_no} </td>
                                    <td>
                                        <button style={{ border: 'none', boxShadow: '0  0 5px 0 rgba(0,0,0,.5)', backgroundColor: '#715EF1', color: 'white', fontWeight: '600' }}
                                            onClick={() => infoClick(x)}
                                        >
                                            < FiEdit />
                                        </button>
                                    </td>
                                    <td>
                                        <button style={{ border: 'none', boxShadow: '0  0 5px 0 rgba(0,0,0,.5)', backgroundColor: '#715EF1', color: 'white', fontWeight: '600' }}
                                            onClick={() => infoClick(x)}
                                        >
                                            < RiDeleteBin6Fill />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    



                </tbody>




            </Table> : <h3>No items</h3>}

            <div className="d-flex justify-content-center w-100">
                        <ReactPaginate
                            previousLabel="<"
                            nextLabel=">"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>

        </div>

    )
}

export default UserAddList;