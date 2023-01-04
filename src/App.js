import "./styles.css"
import Navbar from "./ReactComponents/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./Pages/home";


function App() {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element= {<Home/>} />
      </Routes>
    </Router>
  );

}

export default App;
