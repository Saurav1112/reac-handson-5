import React, { useMemo, useState } from "react";

const PureComp = () => {
    const[count, setCount]=useState(0);
    const memoCount = useMemo(()=>count,[count])
 const handleclick=()=> {
    setCount(count+1);
 
};
return (
<div className="btn">
    <h1>Pure Component</h1>
    <p>In React, a "pure component" refers to a component that is optimized for performance by reducing unnecessary re-renders. Pure components only re-render when their props or state change, 
    and they do not have any side effects such as interacting with the browser's DOM or making network requests.</p>
    <br />
    <button className="purebtn" onClick={handleclick}>
    {memoCount}
    </button>
    
</div>
)
}

export default PureComp