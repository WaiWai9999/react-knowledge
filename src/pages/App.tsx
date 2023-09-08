import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StyledComponentsExample from './StyledComponents';
import MuiDataGrid from './MuiDataGrid';
import Slider from './MainSlider';
import '../App.css';
import styled from "styled-components";

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

const Nav = styled.nav`
  width: auto;
  height:70px;
  padding: 5px;
  font-size:20px;
  font-weight:500;
  background-color: aliceblue;
`

const App = () => {
  return (
    <Router>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/StyledComponents">StyledComponentsExample</Link>
          </li>
          <li>
            <Link to="/MainSlider">Slider</Link>
          </li>
          <li>
            <Link to="/MuiDataGrid">MuiDataGrid</Link>
          </li>
        </ul>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StyledComponents" element={<StyledComponentsExample />} />
        <Route path="/MainSlider" element={<Slider />} />
        <Route path="/MuiDataGrid" element={<MuiDataGrid />} /> 
      </Routes>
    </Router>
  );
};

export default App;