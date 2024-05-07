import * as eventsAPI from '../../utilities/events-api'
import { useState, useEffect } from "react";
import "./SavedEventsPage.css"
import React from 'react';
import { CardActionArea, Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UpdateIcon from '@mui/icons-material/Update'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function SavedYelpCardsMui({ y, idx, getEvents, }) {
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
            const deleteEvent = await eventsAPI.deleteYelpEvent(id)
            // console.log('Delete response:', deleteEvent);
            getEvents()
        } catch {
            setError('Delete Failed - Try Again');
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
        console.log("statusFormValues", statusFormValues)
        setStatusFormValues({ ...statusFormValues, [name]: value });
        setError('');
    }

    async function handleEventStatusUpdateSubmit(id) {
        // console.log("updating")
        try {
            // console.log(statusFormValues)
            const statusUpdate = statusFormValues
            const updateEvent = await eventsAPI.updateYelpEvent({ id, statusUpdate })
            // console.log("updateEvent", updateEvent)
            getEvents()
            setEdit(false);
        } catch (error) {
            // console.log(error)
            setError('Update Failed - Try Again');
        }
    }

    return (
        <main>
            
            <Card sx={{ width: 345 }}>
                <CardActionArea>
                    <Box sx={{ height: 280, transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <Backdrop open={open} />
                        <CardMedia
                            component="img"
                            height=""
                            image={y.imageUrl}
                            alt={y.name}
                            style={{ height: "230px" }}
                        />
                        <SpeedDial
                            className='mui-speedial-btn'
                            // style={{ backgroundColor: "var(--cadet-grey)" }}
                            ariaLabel="SpeedDial tooltip example"
                            sx={{ position: 'absolute', bottom: 16, right: 16 }}
                            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                        >
                            <SpeedDialAction key="delete" icon={actions[2].icon} tooltipTitle="delete"
                                tooltipOpen
                                onClick={a => {
                                    a.preventDefault();
                                    // console.log(y._id)
                                    handleEventDelete(y._id);
                                }}
                            />
                            <SpeedDialAction key="update" icon={actions[1].icon} tooltipTitle="update"
                                tooltipOpen
                                onClick={a => {
                                    a.preventDefault();
                                    handleUpdateClick(y._id);
                                }}
                            />

                        </SpeedDial>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {y.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>
                                {/* {y.isClosed} <br />
                                {y.ospanenHours} <br /> */}
                                {y.displayAddress}, {y.displayCity}, {y.displayCountry} <br />
                                Phone: {y.displayPhone} <br />
                                {/* <div style={{ textAlign: 'center' }}> */}
                                <Stack spacing={1} style={{ display: 'inline-block' }}>

                                    <Rating name="half-rating-read" defaultValue={y.rating} precision={0.5} readOnly />
                                </Stack>
                                <br />
                                ({y.reviewCount} reviews) <br />
                                Price: {y.price} <br />
                                {y.transaction}
                                {y.transactions2} <br />

                                {!edit ? y.status :
                                    <span>
                                        <form  >
                                            <select name="status" value={statusFormValues.status} onChange={handleChange}>
                                                <option value="Not Yet Visited">Not Yet Visited</option>
                                                <option value="Visited- Loved It">Visited- Loved It</option>
                                                <option value="Visited- Never want to go again">Visited- Never want to go again</option>
                                            </select>
                                            <button className="btn update-form-btns" type="submit" onClick={a => {
                                                a.preventDefault();
                                                handleEventStatusUpdateSubmit(y._id);
                                            }} >Update</button>
                                        </form>
                                        <button className="btn update-form-btns"
                                            style={{ visibility: edit ? 'visible' : 'hidden' }}
                                            onClick={handleCancelEdit} > Cancel</button>
                                    </span>
                                }
                            </span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={y.menuUrl ? y.menuUrl : "www.yelp.com"}>
                        <Button size="small" color="primary"> more info
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </main>
    )
}