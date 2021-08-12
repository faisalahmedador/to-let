import React, { Component } from "react";
import './_default.scss'
import {Link} from 'react-router-dom'
import fourZeroFour from "../../Assets/images/404.png";

class Default extends Component {
  render() {
    return (
      <div className='default_main'>
        <div className='default_div'>
          <h2>404</h2>
          <h5>Not Found</h5>

          <p>The resouce requested could not be found in this server.</p>
          <Link to='/' className='btn button home'>
            Back to home
          </Link>
        </div>
        
      </div>
    );
  }
}

export default Default;
