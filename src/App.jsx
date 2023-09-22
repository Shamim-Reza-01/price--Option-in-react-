import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import Nav from "./components/NavBar/Nav";
import PriceOptions from "./components/PriceOPtions/PriceOptions";
// import Navber from "./components/NavBarDaisy/Navber";

function App() {
  return (
    <>
      {/* <Navber></Navber>  */}
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
