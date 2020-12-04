import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import "./_addetailsinfo.scss";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";

const DescriptionContents = () => {
  return (
    <div className="description-content">
      <div className='description-content--basic'>
        <h2 className="title">Basic</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type</th>
              <th>Owner Name</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Floor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apartment</td>
              <td>Sharif Himu</td>
              <td>01670706699</td>
              <td>sagufta abasik, mirpur 12, pallabi</td>
              <td>3rd</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='description-content--details'>
        <h2 className="title">Details</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Size</th>
              <th>Bedroom</th>
              <th>Bathroom</th>
              <th>Balcony</th>
              <th>Servent washroom</th>
              <th>Attached bathrooms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1200 sq. ft</td>
              <td>3</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='description-content--utility'>
        <h2 className="title">Utilities</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Gas connection</th>
              <th>Garage</th>
              <th>Security Gourd</th>
              <th>Mosque inhouse</th>
              <th>Rooftop usage facility</th>
              <th>Elevator/Lift</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FcApproval /></td>
              <td><FcDisapprove /></td>
              <td><FcApproval /></td>
              <td><FcApproval /></td>
              <td><FcApproval /></td>
              <td><FcDisapprove /></td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='description-content--conditionspricing'>
        <h2 className="title">Conditions & Pricing</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Advance payment(month)</th>
              <th>Gate closed at night</th>
              <th>Gate opens at morning</th>
              <th>Price/Rent</th>
              <th>Service charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>12 PM</td>
              <td>5 AM</td>
              <td>10000</td>
              <td>1000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

DescriptionContents.propTypes = {};

export default DescriptionContents;
