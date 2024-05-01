import * as eventsAPI from '../../utilities/events-api';
import DeleteEventForm from "../Forms/ConcertsForms/DeleteEventForm";
import UpdateEventForm from "../Forms/ConcertsForms/UpdateEventForm";
import { useState, useEffect } from "react";

export default function SavedEvents({ getEvents, events, setEvents, savedYelpData }) {
    const event = events.map((e, idx) =>
        <div className="concert-Event-item" key={idx * 5} >
            <h3>
                {e.name}
                {e.imageUrl}
                {e.venue}
                {e.venueLocation}
                {new Date(e.eventDate).toLocaleDateString()}&nbsp;
                {new Date(e.eventDate).toLocaleTimeString()} <br />
                {e.timezone} <br />
                {e.accessibility} <br />
                {e.status}
            </h3>

            <div className="Update-DeleteNoteForms">
                <DeleteEventForm id={e._id} key={idx + 11} getEvents={getEvents} />
                <UpdateEventForm id={e._id} key={idx + 12} getEvents={getEvents} setEvents={setEvents} event={e} />
            </div>
        </div> )

    const yelpData = savedYelpData.map((y, idx) =>
    <div className="yelp-Event-item" key={idx * 7} >
        <h3>
            {y.name}
            {y.imageUrl}
            {y.isClosed}
            {y.openHours}
            {y.displayAddress}
            {y.displayCity}
            {y.displayCountry}
            {y.displayPhone}
            {y.transaction}
            {y.transactions2}
            {y.price }
            {y.reviewCount}
            {y.rating}
            {y.menuUrl}
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
            <h1>Saved Page</h1>
            {event}
            {yelpData}

        </div>
    )
}