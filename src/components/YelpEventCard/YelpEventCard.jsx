import * as React from "react";
import { useState } from "react";
import * as eventsAPI from '../../utilities/events-api';
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from "@mui/material";
import { Favorite as FavoriteIcon, ExpandMore as ExpandMoreIcon, MoreVert as MoreVertIcon, Link as LinkIcon, Accessible as AccessibleIcon } from "@mui/icons-material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function YelpEventCard({ business, idx, getEvents }) {
    const [error, setError] = useState('');
    const [expanded, setExpanded] = React.useState(false);

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
        }),
    }));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    async function handleEventSave(evt) {
        evt.preventDefault();
        console.log("SEE ME? Handle Event Save Clicked")
        const yelpDataModel = {
            name: business.name,
            imageUrl: business.image_url,
            isClosed: business.is_closed || "",
            openHours: business.open24_hours || "",
            displayAddress: business.location.display_address1 || "",
            displayCity: business.location.city || "",
            displayCountry: business.location.country || "",
            displayPhone: business.display_phone || "",
            transactions: business.transactions[0] || "",
            transactions2: business.transactions[1] || "",
            price: business.price || "",
            reviewCount: business.review_count || "",
            rating: business.rating || "",
            menuUrl: business.attributes.menu_url || "",

        }
        console.log("yelpDataModel:", yelpDataModel)
        try {
            const yelpDataCreate = await eventsAPI.createYelpEvent(yelpDataModel)
            console.log("yelpDataCreate:", yelpDataCreate)
            getEvents()
        } catch (error) {
            console.log("error:", error)
            setError('Save yelp Restaurant Failed - Try Again Ayda');
        }
    }

    return (
        <main>
            <Card sx={{ maxWidth: 500 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}

                    title={business.name}
                />
                <CardMedia
                    component="img"
                    height="500"
                    image={business.image_url}
                    alt={business.name}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <div>{(business.location.display_address) ? (business.location.display_address) : " No data available"} </div>
                        {(business.display_phone) ? (business.display_phone) : " No data available"}

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon onClick={handleEventSave} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <a href={(business.attributes.menu_url) ? (business.attributes.menu_url) : " No data available"}  > <RestaurantMenuIcon /></a>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            <div style={{ textAlign: 'center' }}>
                                <Stack spacing={1} style={{ display: 'inline-block' }}>

                                    <Rating name="half-rating-read" defaultValue={business.rating} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <div>
                                Rating: {(business.rating) ? (business.rating) : " N/A"} </div>
                            <div>Reviews: {(business.review_count) ? (business.review_count) : " N/A"} </div>
                            <div> {(business.location.display_address) ? (business.location.display_address) : " N/A"} </div>
                            <div>Phone: {(business.display_phone) ? (business.display_phone) : " N/A"} </div>
                            <div>Open 24 hours: {(business.open24_hours) ? (business.open24_hours) : "N/A"} </div>
                            <div>Price: {(business.price) ? (business.price) : " N/A"} </div>
                            {/* <div>{(business.transactions) ? (business.transactions) : " N/A"}</div> */}
                            {/* <div>is_closed:{(business.is_closed) ? (business.is_closed) : "N/A"}</div> */}
                            {/* <div>attributes.menu_url:{(business.attributes.menu_url) ? (business.attributes.menu_url) : " N/A"} </div> */}

                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </main>
    )
}
