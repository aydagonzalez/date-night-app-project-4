import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import ConcertPage from '../ConcertPage/ConcertPage';
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
  const [savedYelpData, setSavedYelpData] = useState([]);
  // console.log("USER",user)

  async function getEvents() {
    if (user) {
      const allEventsIndex = await eventsAPI.indexEvents()
      setEvents(allEventsIndex)
      const allYelpRestaurantsIndex = await eventsAPI.indexYelpEvents()
      setSavedYelpData(allYelpRestaurantsIndex)
    }
  }

  useEffect(function () {
    // console.log("USE EFFECT RUNNING")
    getEvents()
  }, [user]);

  useEffect(function () {
  }, [events])




  return (

    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} events={events} savedYelpData={savedYelpData} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/login" element={<AuthPage setUser={setUser} />} /> */}
            <Route path="/yelp" element={<YelpPage getEvents={getEvents} events={events} setEvents={setEvents} user={user} />} />
            <Route path="/events/ticketmaster" element={<ConcertPage getEvents={getEvents} user={user} />} />
            <Route path="/events/saved" element={<SavedEventsPage user={user} getEvents={getEvents} events={events} setEvents={setEvents} savedYelpData={savedYelpData} />} />
         
          </Routes>
          <Footer user={user} setUser={setUser} events={events} savedYelpData={savedYelpData} />
        </>
        :
        //  <AuthPage setUser={setUser} />
        <>
        
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/yelp" element={<YelpPage getEvents={getEvents} events={events} setEvents={setEvents} user={user} />} />
            <Route path="/events/ticketmaster" element={<ConcertPage getEvents={getEvents} user={user} />} />
          </Routes>
        </>
      }

    </main>
  );
}



