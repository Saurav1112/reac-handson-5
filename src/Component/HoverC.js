import React  from 'react';
import HighComponent from './HigherComponent';

const HoverC = (props) => {
    console.log(props);
    return (
        <>
        <div className='btn'>
<h1>{props.value}</h1> 
<button className='btn1' onMouseOver={props.submit}>Hover Counter!</button></div>
        </>
    )
}
export default HighComponent(HoverC)