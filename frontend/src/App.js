// import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import AdminHomeScreen from './Screens/AdminHomeScreen/AdminHomeScreen';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/HomeScreen" element={<HomeScreen />} />
          <Route path="/admin" element={<AdminHomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
