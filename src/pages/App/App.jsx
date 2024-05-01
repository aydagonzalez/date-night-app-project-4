import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ConcertPage from '../ConcertPage/ConcertPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import SavedEventsPage from '../SavedEventsPage/SavedEventsPage'
import * as eventsAPI from '../../utilities/events-api';
import YelpPage from '../YelpPage/YelpPage'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [events, setEvents] = useState([]);

  async function getEvents() {
      const allEventsIndex = await eventsAPI.indexEvents()
      console.log("ALL Events in App page:", allEventsIndex)
      setEvents(allEventsIndex)
  }
  useEffect(function () {
    getEvents()
}, []);
useEffect(function(){
  console.log("refreshing2")
}, [events])



  return (

    <main className="App">
      {user ? 
      <>
      <NavBar user={user} setUser={setUser} /> 
      <HomePage user={user} /> 
      <Routes>
        <Route path="/events/restaurants" element={<RestaurantPage getEvents={getEvents} />} />
        <Route path="/events/concerts" element={<ConcertPage getEvents={getEvents} />} />
        <Route path="/events/saved" element={<SavedEventsPage getEvents={getEvents} events={events} setEvents={setEvents} />} />
        <Route path="/events/yelp" element={<YelpPage getEvents={getEvents} events={events} setEvents={setEvents} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      </>     
      : <AuthPage setUser={setUser} />}
    </main>
  );
}



