import React,{useState} from "react";
const HighComponent = (WrappedComponent)=> {
   function HocComponent() {
    const [Value,setValue]=useState(0);
    const handleSubmit=()=> {
        setValue(Value+1);

    }
    return (
        <div>
            <WrappedComponent value={Value} submit= {handleSubmit} />
        </div>
    )

   }
return HocComponent
}
export default HighComponent