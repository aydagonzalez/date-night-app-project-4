import * as eventsAPI from '../../utilities/events-api'
import DeleteEventForm from "../Forms/ConcertsForms/DeleteEventForm"
import UpdateEventForm from "../Forms/ConcertsForms/UpdateEventForm"
import { useState, useEffect } from "react";
import "./SavedEventsPage.css"
import React from 'react';
import SavedConcertCardsMui from './SavedConcertCardsMui';
import SavedYelpCardsMui from './SavedYelpCardsMui';

export default function SavedEvents({ getEvents, events, setEvents, savedYelpData }) {
    const [error, setError] = useState('');
        const [edit, setEdit] = useState(false);

    const yelpData = savedYelpData.map((y, idx) =>
        <div className="yelp-Event-item" key={idx * 7} >
            <h3>
                {y.name} <br />
                {y.imageUrl} <br />
                {y.isClosed} <br />
                {y.openHours} <br />
                {y.displayAddress} <br />
                {y.displayCity} <br />
                {y.displayCountry} <br />
                {y.displayPhone} <br />
                {y.transaction} <br />
                {y.transactions2} <br />
                {y.price} <br />
                {y.reviewCount} <br />
                {y.rating} <br />
                {y.menuUrl} <br />
                {y.status}
            </h3>
            <div className="Update-DeleteNoteForms">
                <DeleteEventForm id={y._id} key={idx + 11} getEvents={getEvents} />
                <UpdateEventForm id={y._id} key={idx + 12} getEvents={getEvents} setEvents={setEvents} YelpRest={y} />
            </div>
        </div>
    )


    return (
        
        <div>
    {yelpData}

            <h1>Saved Page</h1>
     
            {events.map((e, idx) =>
            <SavedConcertCardsMui e={e} idx={idx} getEvents={getEvents} events={events} />
            )}


            {savedYelpData.map((y, idx) =>
            <SavedYelpCardsMui y={y} idx={idx} getEvents={getEvents} events={events} />
            )}
        </div>
    )
}