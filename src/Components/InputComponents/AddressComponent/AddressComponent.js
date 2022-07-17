import {React, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Form, Row, Col, Button} from "react-bootstrap";
import {getDistricts, getDivisions, getPostOffices, getThanas} from "../../../redux/Actions/GetAddressActions";
import {getDistrictReducer, getPostOfficeReducer, getThanaReducer} from "../../../redux/reducers/getAddressReducers";

const AddressComponent = ({nextQuestion, id, setQuesSave, quesSave}) => {
    const [divisionList, setDivisionList] = useState([]);
    const [districtList, setDistrictList] = useState([])
    const [thanaList, setThanaList] = useState([])
    const [postOfficeList, setPostOfficeList] = useState([])

    const [address, setAddress] = useState({
        division: '',
        district: '',
        thana: '',
        sub_office: '',
        address: ''
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDivisions())
    }, [])
    const {loading_divisions, divisions, error_divisions} = useSelector(state => state.getDivisionReducer)
    const {loading_districts, districts, error_districts} = useSelector(state => state.getDistrictReducer)
    const {loading_thanas, thanas, error_thanas} = useSelector(state => state.getThanaReducer)
    const {loading_post_offices, postOffices, error_post_offices} = useSelector(state => state.getPostOfficeReducer)
    useEffect(() => {
        if (divisions) {
            setDivisionList(divisions.response.data.data)
            setDistrictList([]);
            setThanaList([]);
            setPostOfficeList([]);
        }
        if (districts) {
            setDistrictList(districts.response.data.data);
            setThanaList([]);
            setPostOfficeList([])
        }
        if (thanas) {
            setThanaList(thanas.response.data.data);
            setPostOfficeList([]);
        }
        if (postOffices) {
            setPostOfficeList(postOffices.response.data.data)
        }
    }, [districts, divisions, postOffices, thanas])

    console.log(quesSave)

    function updateQuestion(answer) {
        if(answer?.address !== '') setQuesSave(answer)
    }

    const handleDivisionChange = (division) => {
        const newAddress = {...address, division: division, district: '', thana: '', sub_office: ''};
        setAddress(newAddress);
        updateQuestion(newAddress)
        dispatch(getDistricts(division));
    }

    const handleDistrictChange = (district) => {
        const newAddress = {...address, district: district, thana: '', sub_office: ''};
        setAddress(newAddress);
        updateQuestion(newAddress)
        dispatch(getThanas(district));
    }

    const handleThanaChange = (thana) => {
        const newAddress = {...address, thana: thana, sub_office: ''};
        setAddress(newAddress);
        updateQuestion(newAddress)
        dispatch(getPostOffices(thana))
    }

    const handlePostOfficeChange = (sub_office) => {
        const newAddress = {...address, sub_office: sub_office};
        setAddress(newAddress);
        updateQuestion(newAddress)
    }

    const handleAddressChange = (addressName) => {
        console.log(addressName)
        const newAddress = {...address, address: addressName};
        setAddress(newAddress);
        updateQuestion(newAddress)
    }


    return (
        <Form>
            <Form.Control
                as='select'
                key={id}
                id={`city`}
                style={{fontSize: '1.5rem', fontWeight: '600'}}
                title={'city'}
                className='mb-3'
                onChange={e => handleDivisionChange(e.target.value)}
            >
                <option disabled selected={!(quesSave?.division)} hidden>division</option>
                {
                    divisionList.map(val =>
                        <option selected={val.division === quesSave?.division}> {val.division} </option>)
                }

            </Form.Control>

            <Form.Control
                as='select'
                key={id}
                id={`zilla`}
                style={{fontSize: '1.5rem', fontWeight: '600'}}
                title={'zilla'}
                className='mb-3'
                onChange={e => handleDistrictChange(e.target.value)}
            >
                <option disabled selected={!(quesSave?.district)} hidden>district</option>
                {
                    districtList.length &&
                    districtList.map(val =>
                        <option selected={val.district === quesSave.district}> {val.district} </option>)
                }

            </Form.Control>


            <Form.Control
                as='select'
                key={id}
                id={`thana`}
                style={{fontSize: '1.5rem', fontWeight: '600'}}
                title={'thana'}
                className='mb-3'
                onChange={e => handleThanaChange(e.target.value)}
            >
                <option disabled selected={!(quesSave?.thana)} hidden>thana</option>
                {
                    thanaList.length &&
                    thanaList.map(val =>
                        <option selected={val.thana === quesSave.thana}> {val.thana} </option>)
                }

            </Form.Control>


            <Form.Control
                as='select'
                key={id}
                id={`postOffice`}
                style={{fontSize: '1.5rem', fontWeight: '600'}}
                title={'postOffice'}
                className='mb-3'
                onChange={e => handlePostOfficeChange(e.target.value)}
            >
                <option disabled selected={!(quesSave?.sub_office)} hidden>post office</option>
                {
                    postOfficeList.length &&
                    postOfficeList.map(val =>
                        <option selected={val.sub_office === quesSave.sub_office}> {val.sub_office} </option>)
                }

            </Form.Control>

            <Form.Control defaultValue={quesSave && quesSave.address ? quesSave.address : ''}
                          type='text' style={{fontSize: '1.5rem', fontWeight: '600'}} id={id}
                          placeholder={'address'}
                          onChange={(e) => handleAddressChange(e.target.value)}/>
        </Form>
    )
}

export default AddressComponent;

