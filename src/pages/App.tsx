import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StyledComponentsExample from "./StyledComponents";
import MuiDataGrid from "./MuiDataGrid";
import MuiDataGridCsvExport from "./MuiDataGridCsvExport";
import MuiDataGridTextbox from "./MuiDataGridTextbox";
import EditableGrid from "./EditableGrid";
import Slider from "./MainSlider";
import MuiChart from "./MuiChart";
import Recharts from "./Recharts";
import "../App.css";
import styled from "styled-components";

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

const Nav = styled.nav`
  width: auto;
  height: 70px;
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  background-color: aliceblue;
`;

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
          <li>
            <Link to="/MuiDataGridCSVExport">MuiDataGridCsvExport</Link>
          </li>
          <li>
            <Link to="/MuiDataGridTextbox">MuiDataGridTextbox</Link>
          </li>
          <li>
            <Link to="/EditableGrid">EditableGrid</Link>
          </li>
          <li>
            <Link to="/MuiChart">MuiChart</Link>
          </li>
          <li>
            <Link to="/Recharts">Recharts</Link>
          </li>
        </ul>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StyledComponents" element={<StyledComponentsExample />} />
        <Route path="/MainSlider" element={<Slider />} />
        <Route path="/MuiDataGrid" element={<MuiDataGrid />} />
        <Route
          path="/MuiDataGridCsvExport"
          element={<MuiDataGridCsvExport />}
        />
        <Route path="/MuiDataGridTextbox" element={<MuiDataGridTextbox />} />
        <Route path="/EditableGrid" element={<EditableGrid />} />
        <Route path="/MuiChart" element={<MuiChart />} />
        <Route path="/Recharts" element={<Recharts />} />
      </Routes>
    </Router>
  );
};

export default App;
