import { useState, useEffect } from "react";
import "./SavedEventsPage.css"
import React from 'react';
import SavedConcertCardsMui from './SavedConcertCardsMui';
import SavedYelpCardsMui from './SavedYelpCardsMui';

export default function SavedEvents({ getEvents, events, setEvents, savedYelpData }) {
    const [error, setError] = useState('');
    const [edit, setEdit] = useState(false);
    const savedEventCount = events.length + savedYelpData.length
    return (
        <div key={100}>
            <h1>Saved Page</h1>

            {savedEventCount}

            {events.map((e, idx) =>
                <SavedConcertCardsMui e={e} key={idx+5} idx={idx} getEvents={getEvents} events={events} />
            )}

            {savedYelpData.map((y, idx) =>
                <SavedYelpCardsMui y={y} key={idx+12} idx={idx} getEvents={getEvents} events={events} />
            )}
        </div>
    )
}