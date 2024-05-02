import * as eventsAPI from '../../utilities/events-api'
import { useState, useEffect } from "react";
import "./SavedEventsPage.css"
import React from 'react';
import { CardActionArea, Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UpdateIcon from '@mui/icons-material/Update'
import DeleteIcon from '@mui/icons-material/Delete';

export default function SavedConcertCardsMui({ e, idx, getEvents, events, }) {
    const [error, setError] = useState('');
    const [edit, setEdit] = useState(false);
    const [statusFormValues, setStatusFormValues] = useState('');
    const [open, setOpen] = useState(false);
    const actions = [
        { icon: <FavoriteIcon />, name: 'Save' },
        { icon: <UpdateIcon />, name: 'Update' },
        { icon: <DeleteIcon />, name: 'Delete' },]

    async function handleEventDelete(id) {
        try {
            const deleteEvent = await eventsAPI.deleteEvent(id)
            // console.log('Delete response:', deleteEvent);
            getEvents()
        } catch {
            setError('Delete Event Failed - Ayda Try Again');
        }
    }

    function handleUpdateClick() {
        setEdit(true);
    }

    function handleCancelEdit() {
        setEdit(false);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setStatusFormValues(prev => ({ ...prev, [name]: value }));
        setError('');
    }

    async function handleEventStatusUpdateSubmit(id) {
        // console.log("updating")
        try {
            console.log(statusFormValues)
            const statusUpdate = statusFormValues
            const updateEvent = await eventsAPI.updateEvent({ id, statusUpdate })
            // console.log("updateEvent", updateEvent)
            getEvents()
            setEdit(false);
        } catch (error) {
            // console.log(error)
            setError('Update Note Failed - Try Again');
        }
    }

    return (
        <main>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <Box sx={{ height: 280, transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <Backdrop open={open} />
                        <CardMedia
                            component="img"
                            height=""
                            image={e.imageUrl}
                            alt={e.name}
                        />
                        <SpeedDial
                            ariaLabel="SpeedDial tooltip example"
                            sx={{ position: 'absolute', bottom: 16, right: 16 }}
                            icon={<SpeedDialIcon />}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                        >
                            <SpeedDialAction key="delete" icon={actions[2].icon} tooltipTitle="delete"
                                tooltipOpen
                                onClick={a => {
                                    a.preventDefault();
                                    console.log(e._id)
                                    handleEventDelete(e._id);
                                }}
                            />
                            <SpeedDialAction key="update" icon={actions[1].icon} tooltipTitle="update"
                                tooltipOpen
                                onClick={a => {
                                    a.preventDefault();
                                    handleUpdateClick(e._id);
                                }}
                            />

                        </SpeedDial>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <div className="concert-Event-item" key={idx * 5} >
                                {e.name}
                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>
                                {e.venue} <br />
                                {e.venueLocation} <br />
                                {new Date(e.eventDate).toLocaleDateString()}&nbsp;
                                {new Date(e.eventDate).toLocaleTimeString()} <br />
                                {e.accessibility ? e.accessibility : null} <br />
                                {!edit ? e.status :
                                <div>
                                    <form onSubmit="{handleUpdateNote}" >
                                        <select name="status" value={statusFormValues} onChange={handleChange}>
                                            <option value="Not Yet Visited">Not Yet Visited</option>
                                            <option value="Visited- Loved It">Visited- Loved It</option>
                                            <option value="Visited- Never want to go again">Visited- Never want to go again</option>
                                        </select>
                                        <button className="btn" type="submit" onClick={a => {
                                            a.preventDefault(); 
                                            handleEventStatusUpdateSubmit(e._id); }} >Update</button>
                                    </form>
                                    <button
                                    style={{ visibility: edit ? 'visible' : 'hidden' }}
                                    onClick={handleCancelEdit} > Cancel</button>
                                    </div>
                                }

                            </h3>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={e.websiteUrl ? e.websiteUrl : null}>
                        <Button size="small" color="primary"> Buy
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </main>
    )
}