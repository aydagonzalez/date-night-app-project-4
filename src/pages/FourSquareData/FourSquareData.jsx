import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
// import EventTicketMasterCard from '../../components/EventTicketMasterCard/EventTicketMasterCard'

export default function FourSquareData() {
    const [error, setError] = useState(null);
    const [restaurants, setRestaurants] = useState([]);

            useEffect(() => {
                async function fetchRestaurantsFromFoursquare() {
                    const token = "fsq3kuCwTIhJi2U63tQNGn26xRrZRHk/YFzNMz1UDHEMc5g="
                    const lat = 40.785091; // Central Park latitude
                    const lon = -73.968285; // Central Park longitude
                    const version = '20230401'; // Use today's date in YYYYMMDD format
                    const url = `https://api.foursquare.com/v3/places/search?ll=${lat},${lon}&categories=13065&v=${version}`;
        
                    try {
                        const response = await fetch(url, {
                            headers: {
                                'Accept': 'application/json',
                                'Authorization': `${token}`
                            }
                        });
                        if (!response.ok) {
                            console.error('HTTP error', response.status, await response.text());
                            throw new Error(`Network response was not ok, status: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log("DATA", data);
                        setRestaurants(data);
                    } catch (error) {
                        console.error('There was a problem fetching the restaurant data:', error);
                        setError(error.message);
                    }
                }
                fetchRestaurantsFromFoursquare();
            }, []); // Empty dependency array means this effect runs once after the initial render
        

            return (
                <>
                    <h1>FourSquare API Data</h1>
                    {error ? (
                        <p>Error fetching data: {error}</p>
                    ) : (
                        <div>
                            {restaurants ? <pre>{JSON.stringify(restaurants, null, 2)}</pre> : <p>Loading data...</p>}
                        </div>
                    )}
                </>
            );
        }