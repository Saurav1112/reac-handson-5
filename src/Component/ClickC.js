 import React  from 'react';

import HighComponent from './HigherComponent';

const ClickC = (props) => {
    console.log(props);
    return (
        <>
        <div className='btn'>
<h1>{props.value}</h1> 
<button className='click' onClick={props.submit}>Click Counter!</button></div>
        </>
    )
}
export default HighComponent(ClickC)