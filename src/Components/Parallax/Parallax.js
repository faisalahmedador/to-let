import React from 'react';
import PropTypes from 'prop-types';
import './_parallax.scss'
 
const Parallax = ({children}) => {
    return (
        <div id='parallax'>
            {children}
        </div>
    );
}
 
Parallax.propTypes = {};
 
export default Parallax;