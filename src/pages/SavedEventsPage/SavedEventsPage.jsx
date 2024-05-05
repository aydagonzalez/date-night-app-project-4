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

    function handleChange(event, newAlignment) {
        if (newAlignment !== null) { 
            setAlignment(newAlignment);
        }
    }

    return (
        <>
            <h1>Saved Page</h1>
            <div>

            <ToggleButtonGroup
                    className="ToggleButtonGroup"
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform">
                    <ToggleButton value="yelp">Yelp Search</ToggleButton>
                    <ToggleButton value="concert">Concerts</ToggleButton>
                </ToggleButtonGroup>
            </div>


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