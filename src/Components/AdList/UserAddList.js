import React, {useEffect, useState} from "react";
import './_userAddList.scss'
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {getUserAdsAction} from "../../redux/Actions/GetUserAdAction";
import {useHistory} from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import noImage from '../../Assets/images/no-image.png'
import ReactPaginate from 'react-paginate';
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import {adDeleteAction} from "../../redux/Actions/AdDeleteAction";
import {getAdDetailsAction} from "../../redux/Actions/getAdDetailsAction";

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

    const {loading, ads} = useSelector(state => state.getUserAdsReducers);
    const {deleted} = useSelector(state => state.adDeleteReducer);
    const {ad_details} = useSelector(state => state.getAdDetailsReducers);

    useEffect(() => {
        console.log(history)
        if (ads) {
            setUserAds(ads.response.data)
        }

        if (deleted) {
            dispatch(getUserAdsAction());
        }

    },  [ads, deleted])

    useEffect(() => {
        const endOffset = itemOffset + 5;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(userAds.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userAds.length / 5));
    }, [userAds, itemOffset])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % userAds.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    const infoClick = (ad) => {
        console.log(ad)
        dispatch(getAdDetailsAction(ad.id));
    }

    // useEffect(() => {
    //     if(ad_details) {
    //         history.push({
    //             pathname: `/myads/${ad_details.response.data.id}`,
    //             state: ad_details.response.data
    //         })
    //     }
    // }, [ad_details])

    const [deleteConfirmModal, setDeleteConfirmModal] = useState(false)
    const [deleteAdId, setDeleteAdId] = useState();

    const onDeleteAd = ad => {
        setDeleteConfirmModal(true);
        setDeleteAdId(ad.id)
    }

    const onDeleteConfirm = state => {
        if(state) {
            dispatch(adDeleteAction(deleteAdId));
        }
        setDeleteConfirmModal(false);
    }

    return (
        <>
            <div className='userads container'>
                {userAds.length ? <Table striped bordered>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Type</th>
                        <th>Rent</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        currentItems.map((item, i) => {
                            return (
                                <tr>
                                    <td><img src={item.image_urls.length ? item.image_urls[0].image_url : noImage}
                                             alt="home_img"
                                             style={{height: '80px', width: '100px'}}/></td>
                                    <td className=""><span>{item.type}</span></td>
                                    <td><span>{item.rent}</span></td>
                                    <td>
                                        <button
                                            className={'button-default-style'}
                                            onClick={() => infoClick(item)}
                                        >
                                            <div className={'d-flex align-items-center'}>
                                                <FiEdit/>
                                                <span className={'ml-2'}>Edit</span>
                                            </div>

                                        </button>
                                    </td>
                                    <td>
                                        <button className={'button-default-style'}
                                                onClick={() => onDeleteAd(item)}
                                        >
                                            <div className={'d-flex align-items-center'}>
                                                <RiDeleteBin6Fill/>
                                                <span className={'ml-2'}>Delete</span>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                    </tbody>


                </Table> : <h3>No items</h3>}
            </div>
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

            {deleteConfirmModal && <ConfirmModal show={deleteConfirmModal}
                                                 onChangeState={onDeleteConfirm}
                                                 text={'Do you want to delete this advertise?'}
            />}
        </>

    )
}

export default UserAddList;