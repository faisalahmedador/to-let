import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const AdInfoPage = () => {

    let parameter = useParams()
    let { state } = useLocation()

    console.log('info ', parameter, 'state', state.ad  );

    return (
        <div>
            AdInfoPage
        </div>
    );
};

export default AdInfoPage;