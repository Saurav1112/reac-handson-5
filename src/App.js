import './App.css';
import ClickC from './Component/ClickC';
import HighComponent from './Component/HigherComponent';
import HoverC from './Component/HoverC';
import PureComp from './Component/PureComp';

function App() {
  return (
   <>
   <h1>Higher-Order Components</h1>
   <p>Higher-order components or HOC is the advanced method of reusing the component functionality logic.
   It simply takes the original component and returns the enhanced component.</p>
<HighComponent />
<ClickC /><br /> 
<HoverC /> <br /> <br />
<PureComp />
    </>
  );
}

export default App;
