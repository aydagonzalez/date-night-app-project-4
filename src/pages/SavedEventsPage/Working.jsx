import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
// import EventCard from '../components/EventCard'; // Assume you create a new component

export default function GetMuiIcons({ e, getEvents, events, setEvents, savedYelpData }) {
    const [open, setOpen] = useState(false);
    const actions = [
        // { icon: <FileCopyIcon />, name: 'Copy' },
        // { icon: <FavoriteIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];


    return (
        
        <div>
            <h1>Saved Page</h1>
            
            <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Backdrop open={open} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={() => setOpen(false)}
                        />
                    ))}
                </SpeedDial>
            </Box>
            {/* {events.map((event, idx) => (
                <EventCard key={idx} event={event} getEvents={getEvents} setEvents={setEvents} />
            ))} */}
        </div>
    );
}



// ---------
// import * as React from 'react';
// import * as eventsAPI from '../../utilities/events-api';
// import DeleteEventForm from "../Forms/ConcertsForms/DeleteEventForm";
// import UpdateEventForm from "../Forms/ConcertsForms/UpdateEventForm";
// import { useState, useEffect } from "react";
// import SavedConcertEvent from '../../components/SavedEventsCard/SavedConcertEvent'
// import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
// // import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// // import SaveIcon from '@mui/icons-material/Save';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
// import "./SavedEventsPage"



// export default function SavedEvents({ getEvents, events, setEvents, savedYelpData }) {
//     const [open, setOpen] = useState(false);
//     const actions = [
//         // { icon: <FileCopyIcon />, name: 'Copy' },
//         { icon: <FavoriteIcon />, name: 'Save' },
//         { icon: <PrintIcon />, name: 'Print' },
//         { icon: <ShareIcon />, name: 'Share' },
//       ];


//     const event = events.map((e, idx) =>
//         <div className="concert-Event-item" key={idx * 5} >
//             <h3>
//                 {e.name}
//                 {e.imageUrl}
//                 {e.venue}
//                 {e.venueLocation}
//                 {new Date(e.eventDate).toLocaleDateString()}&nbsp;
//                 {new Date(e.eventDate).toLocaleTimeString()} <br />
//                 {e.timezone} <br />
//                 {e.accessibility} <br />
//                 {e.status}
//             </h3>

//             <div className="Update-DeleteNoteForms">
//                 <DeleteEventForm id={e._id} key={idx + 11} getEvents={getEvents} />
//                 <UpdateEventForm id={e._id} key={idx + 12} getEvents={getEvents} setEvents={setEvents} event={e} />
//             </div>
//         </div>)

//     const yelpData = savedYelpData.map((y, idx) =>
//         <div className="yelp-Event-item" key={idx * 7} >
//             <h3>
//                 {y.name}
//                 {y.imageUrl}
//                 {y.isClosed}
//                 {y.openHours}
//                 {y.displayAddress}
//                 {y.displayCity}
//                 {y.displayCountry}
//                 {y.displayPhone}
//                 {y.transaction}
//                 {y.transactions2}
//                 {y.price}
//                 {y.reviewCount}
//                 {y.rating}
//                 {y.menuUrl}
//                 {y.status}
//             </h3>
//             <div className="Update-DeleteNoteForms">
//                 <DeleteEventForm id={y._id} key={idx + 11} getEvents={getEvents} />
//                 <UpdateEventForm id={y._id} key={idx + 12} getEvents={getEvents} setEvents={setEvents} YelpRest={y} />
//             </div>
//         </div>
//     )



//       return (
//         <div>
//             <h1>Saved Page</h1>
//             <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
//                 <Backdrop open={open} />
//                 <SpeedDial
//                     ariaLabel="SpeedDial tooltip example"
//                     sx={{ position: 'absolute', bottom: 16, right: 16 }}
//                     icon={<SpeedDialIcon />}
//                     onClose={() => setOpen(false)}
//                     onOpen={() => setOpen(true)}
//                     open={open}
//                 >
//                     {actions.map((action) => (
//                         <SpeedDialAction
//                             key={action.name}
//                             icon={action.icon}
//                             tooltipTitle={action.name}
//                             tooltipOpen
//                             onClick={() => setOpen(false)}
//                         />
//                     ))}
//                 </SpeedDial>
//             </Box>
//             {events.map((event, idx) => (
//                 <SavedConcertEvent key={idx} event={event} getEvents={getEvents} setEvents={setEvents} />
//             ))}
//         </div>
//     );
//     }


    // 