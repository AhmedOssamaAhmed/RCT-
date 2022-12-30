// import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
