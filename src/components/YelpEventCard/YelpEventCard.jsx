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
        // console.log("SEE ME? Handle Event Save Clicked")
        const yelpDataModel = {
            name: business.name,
            imageUrl: business.image_url,
            isClosed: business.is_closed || "",
            openHours: business.open24_hours || "",
            displayAddress: business.location.display_address[0] || "",
            displayCity: business.location.city || "",
            displayCountry: business.location.country || "",
            displayPhone: business.display_phone || "",
            transactions: business.transactions[0] || "",
            transactions2: business.transactions[1] || "",
            price: business.price || "",
            reviewCount: business.review_count || "",
            rating: business.rating || "",
            menuUrl: business.attributes.menu_url || (business.url) || "N/A",

        }
        // console.log("yelpDataModel:", yelpDataModel)
        try {
            const yelpDataCreate = await eventsAPI.createYelpEvent(yelpDataModel)
            // console.log("yelpDataCreate:", yelpDataCreate)
            getEvents()
        } catch (error) {
            // console.log("error:", error)
            setError('Search Failed - Try Again');
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
                <CardMedia className="CardMediaContent"
                    component="img"
                    height="500"
                    image={business.image_url}
                    alt={business.name}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {(business.location.display_address) ? (business.location.display_address.join(', ')) : " No data available"} <br />
                        {(business.display_phone) ? (business.display_phone) : "Phone: N/A"}

                    </Typography>
                </CardContent>
                <CardActions disableSpacing onClick={handleEventSave}  >
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon className="favorite-icon" />
                    </IconButton>
                    <IconButton aria-label="share">
                        <a href={(business.attributes.menu_url) ? (business.attributes.menu_url) : (business.url)}  > <RestaurantMenuIcon className="menu-icon" /></a>
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
                            <span>
                           
                                    <Stack spacing={1} style={{ display: 'inline-block' }}>

                                        <Rating name="half-rating-read" defaultValue={business.rating} precision={0.5} readOnly />
                                    </Stack> <br />

                                Rating: {(business.rating) ? (business.rating) : " N/A"} Reviews: {(business.review_count) ? (business.review_count) : " N/A"}  <br />
                               {(business.location.display_address) ? (business.location.display_address.join(', ')) : " N/A"}  <br />
                              Phone: {(business.display_phone) ? (business.display_phone) : " N/A"}  <br />
                              Open 24 hours: {(business.open24_hours) ? (business.open24_hours) : "N/A"}  <br />
                              Price: {(business.price) ? (business.price) : " N/A"}  <br />
                              {(business.transactions) ? (business.transactions[0]) : ""} {(business.transactions) ? (business.transactions[1]) : ""} <br />
                                {/* <div>is_closed:{(business.is_closed) ? (business.is_closed) : "N/A"}</div> */}
                                {/* <div>attributes.menu_url:{(business.attributes.menu_url) ? (business.url) : " N/A"} </div> */}
                                {/* <div>attributes.menu_url:{(business.attributes.menu_url) ? (business.attributes.menu_url) : (business.url)} </div> */}
                            </span>
                        </Typography>
                    </CardContent>

                </Collapse>
            </Card>

        </main>
    )
}
