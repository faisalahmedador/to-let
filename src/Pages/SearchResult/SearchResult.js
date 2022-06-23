import React, {Component} from "react";
import {connect} from "react-redux";
import {
    setPropertyType,
    setSearchField,
    setLocation,
    setBath,
    setBed,
    setLowerLimit,
    setUpperLimit,
} from "../../redux/Actions/LandingPageActions";

import CardAds from "../../Components/CardAds/CardAds";
import {addDetails} from "../../Assets/data/data";
import {useSelector, useDispatch} from "react-redux";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";

// const mapStateToProps = (state) => {
//     console.log(state.Search);
//     return {
//         searchField: state.Search.searchField,
//         catagory: state.Search.catagory,
//         location: state.Search.location,
//         lower_limit: state.Search.lower_limit,
//         upper_limit: state.Search.upper_limit,
//         priceUpdate: state.Search.priceUpdate,
//         bed: state.Search.bed,
//         bath: state.Search.bath,
//     };
// };
//
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSetSearch: (event) => {
//             dispatch(setSearchField(event.target.value));
//         },
//         onSetCatagory: (text) => {
//             dispatch(setPropertyType(text));
//         },
//
//         onSetLocation: (text) => {
//             dispatch(setLocation(text));
//         },
//
//         onSetBed: (text) => {
//             dispatch(setBed(text));
//         },
//
//         onSetBath: (text) => {
//             dispatch(setBath(text));
//         },
//
//         onSetLowerLimit: (text) => {
//             dispatch(setLowerLimit(text));
//         },
//         onSetUpperLimit: (text) => {
//             // console.log(text)
//             dispatch(setUpperLimit(text));
//         },
//     };
// };

const SearchResult = ({ onSetSearch, onSetCatagory, onSetLocation, onSetLowerLimit,
                        onSetUpperLimit, onSetBed, onSetBath, searchField}) => {
    return (
        <>
            <div>
                <div style={{margin: '5%'}}>
                    <SearchFilter/>
                </div>
                <h4 className={'header'}>Search result</h4>
              <div className={'row mx-0'}>
                {addDetails.map((data) => {
                  return (
                      <div className="col-12 col-md-6 p-0">
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
                      </div>
                  );
                })}
              </div>

            </div>
        </>
    );

}

export default SearchResult;
