import React, {useState} from "react";
import {
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown,
    Form,
    Button,
} from "react-bootstrap";
import {useHistory} from "react-router";
import {API} from '../../util/api';
import './SearchBox.scss'
import {BiChevronDown, BiChevronUp, BiCurrentLocation} from "react-icons/all";
import {Link} from "react-router-dom";

const SearchBox = () => {

    const [searchObj, setSearchobj] = useState({})
    const [showMoreOption, toggleShowMoreOption] = useState(false)
    const history = useHistory();


    const onSubmit = async (v) => {
        v.preventDefault()
        console.log('onsubmit search', v.target);
        console.log('search object', searchObj);

        const {data} = await API.post('/search', {searchObj});

        console.log('data from submit add', data);

        // history.push('/searchresult');
    }

    return (
        <Form onSubmit={onSubmit}>
            <Container fluid>


                <Form.Row className={'align-items-end'}>
                    <Col lg={10} xs={10} style={{margin: '5px 0'}}>
                        <p className={'label-style'}>Location</p>
                        <Form.Control size='lg' className={'search-input'}
                                      onChange={(e) => setSearchobj({...searchObj, area: e.target.value})}/>
                    </Col>
                    <Col lg={2} xs={2} style={{margin: '5px 0'}}>
                        <Link to={'/searchresult'} className={'btn btn-primary button-default-style'}>
                            Find
                        </Link>
                    </Col>
                </Form.Row>
                {
                    showMoreOption && <Form.Row>

                        {/*<Col lg={4} xs={12} style={{margin: '5px 0'}}>*/}
                        {/*    <p className='label-style> Select*/}
                        {/*        City </p>*/}
                        {/*    <Form.Control as="select" size="lg" placeholder='Select City'*/}
                        {/*                  onChange={e => setSearchobj({...searchObj, city: e.target.value})}>*/}
                        {/*        /!* <option> Select City </option> *!/*/}
                        {/*        <option> Dhaka</option>*/}
                        {/*        <option> Chittagong</option>*/}
                        {/*        <option> Rajshahi</option>*/}
                        {/*        <option> Khulna</option>*/}
                        {/*        <option> Sylet</option>*/}
                        {/*        <option> Barishal</option>*/}
                        {/*    </Form.Control>*/}
                        {/*</Col>*/}

                        <Col lg={3} xs={3} style={{margin: '5px 0'}}>
                            <p className={'label-style'}>
                                Type </p>
                            <Form.Control as="select" size="lg" placeholder='Select Type'
                                          onChange={e => setSearchobj({...searchObj, type: e.target.value})}>
                                {/* <option> Type </option> */}
                                <option>Duplex</option>
                                <option>Family house</option>
                                <option>Apartment</option>
                                <option>Office Space</option>
                                <option>Bachelor</option>
                                <option>Sublet</option>
                                <option>Sell Property</option>
                            </Form.Control>
                        </Col>

                    <Col lg={3} xs={3} style={{margin: '5px 0'}}>
                    <p className={'label-style'}>
                    Bed </p>
                    <Form.Control as="select" size="lg" placeholder='Select Bed'
                    onChange={e => setSearchobj({...searchObj, bed: e.target.value})}>
                {/* <option> Select Bed </option> */}
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    </Form.Control>
                    </Col>

                    <Col lg={3} xs={3} style={{margin: '5px 0'}}>
                    <p className={'label-style'}> Min
                    Price </p>
                    <Form.Control as="select" size="lg" placeholder='Minimum Price'
                    onChange={e => setSearchobj({...searchObj, min: e.target.value})}>
                {/* <option>Min Price</option> */}
                    <option>1000</option>
                    <option>5000</option>
                    <option>10000</option>
                    <option>20000</option>
                    <option>30000</option>
                    <option>40000</option>
                    <option>50000</option>
                    </Form.Control>
                    </Col>

                    <Col lg={3} xs={3} style={{margin: '5px 0'}}>
                    <p className={'label-style'}> Max
                    Price </p>
                    <Form.Control as="select" size="lg" placeholder='Maximum Price'
                    onChange={e => setSearchobj({...searchObj, max: e.target.value})}>
                {/* <option>Max Price</option> */}
                    <option>5000</option>
                    <option>10000</option>
                    <option>20000</option>
                    <option>30000</option>
                    <option>40000</option>
                    <option>50000</option>
                    </Form.Control>
                    </Col>

                {/*<Col lg={3} xs={12} style={{margin: '5px 0'}}>*/}
                {/*    <p className='label-style> Select*/}
                {/*        Bath </p>*/}
                {/*    <Form.Control as="select" size="lg" placeholder='Select Bath'*/}
                {/*                  onChange={e => setSearchobj({...searchObj, bath: e.target.value})}>*/}
                {/*        /!* <option> Select Bath </option> *!/*/}
                {/*        <option>1</option>*/}
                {/*        <option>2</option>*/}
                {/*        <option>3</option>*/}
                {/*        <option>4</option>*/}
                {/*        <option>5</option>*/}
                {/*        <option>6</option>*/}
                {/*        <option>7</option>*/}
                {/*    </Form.Control>*/}
                {/*</Col>*/}

                    </Form.Row>
                }

                <Form.Row className={'d-flex justify-content-start'}>
                    {showMoreOption ?
                        <div className={'d-flex align-items-center'} onClick={() => toggleShowMoreOption(!showMoreOption)}>
                            <span className={'option-visible'}>Less options </span>
                            < BiChevronUp className={'chevron-button'}/>
                        </div> :
                        <div className={'d-flex align-items-center'} onClick={() => toggleShowMoreOption(!showMoreOption)}>
                            <span className={'option-visible'}>More options </span>
                            < BiChevronDown className={'chevron-button'}/>
                        </div>
                    }

                </Form.Row>
            </Container>
        </Form>
    );
};

export default SearchBox;
