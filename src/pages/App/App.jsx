import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ConcertPage from '../ConcertPage/ConcertPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (

    <main className="App">
      {user ? 
      <>
      <NavBar user={user} setUser={setUser} /> 
      <HomePage user={user} /> 
      <Routes>
        <Route path="/events/restaurants" element={<RestaurantPage />} />
        <Route path="/events/concerts" element={<ConcertPage />} />
      </Routes>
      </>     
      : <AuthPage setUser={setUser} />}
    </main>
  );
}



