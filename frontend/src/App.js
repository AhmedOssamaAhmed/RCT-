// import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import UserProductsScreen from './Screens/UserProductsScreen/UserProductsScreen';
import UserEventsScreen from './Screens/UserEventsScreen/UserEventsScreen';
import UserAnnouncementsScreen from './Screens/UserAnnouncementsScreen/UserAnnouncementsScreen';
import AdminHomeScreen from './Screens/AdminHomeScreen/AdminHomeScreen';
import AdminProductsScreen from './Screens/AdminProductsScreen/AdminProductsScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/products" element={<UserProductsScreen />} />
          <Route path="/events" element={<UserEventsScreen />} />
          <Route path="/announcements" element={<UserAnnouncementsScreen />} />
          <Route path="/admin" element={<AdminHomeScreen />} />
          <Route path="/admin/products" element={<AdminProductsScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
