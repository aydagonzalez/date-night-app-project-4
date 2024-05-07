import { useState, useEffect } from "react";
import "./SavedEventsPage.css"
import React from 'react';
import SavedConcertCardsMui from './SavedConcertCardsMui';
import SavedYelpCardsMui from './SavedYelpCardsMui';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function SavedEvents({ getEvents, events, setEvents, savedYelpData }) {
    const [error, setError] = useState('');
    const [alignment, setAlignment] = useState('yelp');
    const [sortOrder, setSortOrder] = useState('true')

    function handleChange(event, newAlignment) {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    }

    function sortEventsByRating(events) {
        if (sortOrder === "true") {
        return events.slice().sort((a, b) => b.rating - a.rating);
        }
    }

    return (
        <>
            <div className="toggle">
                <ToggleButtonGroup
                    className="ToggleButtonGroup"
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform">
                    <ToggleButton value="yelp">Yelp Collections</ToggleButton>
                    <ToggleButton value="concert">Ticket Master Collections</ToggleButton>
                </ToggleButtonGroup>

                {/* <FormGroup>
    <FormControlLabel
        control={<Switch checked={sortOrder === 'desc'} onChange={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')} />}
        label="Sort Descending"
    /> */}
{/* </FormGroup> */}
            </div>
            <h1 className="saved-page-padding-top">Saved Collections</h1>

            {alignment === 'yelp' ?
                (<div key="101" className="saved-events-page">
                    <div className="saved-page-cards">
                        {savedYelpData.map((y, idx) =>
                            <SavedYelpCardsMui y={y} key={idx + 12} idx={idx} getEvents={getEvents} events={events} />
                        )}
                    </div>
                </div >)
                :
                (<div key="100" className="saved-events-page">
                    <div className="saved-page-cards">
                        {events.map((e, idx) =>
                            <SavedConcertCardsMui e={e} key={idx + 5} idx={idx} getEvents={getEvents} events={events} />
                        )}
                    </div>
                </div>)

            }
        </>
    )
}