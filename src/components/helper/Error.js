import React from "react";


const Error = ({error}) => {

    if(!error) return null;

    return <p style={{ color: '#f31', margin: '1rem 0', marginBottom: '30px' }}>{error}</p>


}

export default Error;