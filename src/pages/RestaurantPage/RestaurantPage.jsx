import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import RestaurantEventCard from '../../components/RestaurantEventCard/RestaurantEventCard'

export default function RestaurantPage({  }) {
    const [restaurantData, setRestaurantData] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchRestaurantData()
    }

    async function fetchRestaurantData() {
        const key = eventsService.getRestaurantsKeyCredentials();
        // const lat = 40.785091; // Central Park latitude
        // const lon = -73.968285;
        // const version = '20230401'; 
        const query = 'mexican'
        // const url = eventsService.getRestaurantsURLCredentials();
        // const url = `https://api.foursquare.com/v3/places/search?ll=${lat},${lon}&categories=13065&v=${version}`
        const url = `https://api.foursquare.com/v3/places/search?query=${query}`
        console.log("key:", key, "url:", url);
        try {
            const restaurantDataRequest = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${key}`
                }
            });
            console.log("fetch(url, key):", url, key);
            if (!restaurantDataRequest.ok) {
                throw new Error('Bad request fetching Restaurant data, AG look at RestPg:');
            }
            const restaurantDataResponse = await restaurantDataRequest.json();
            console.log("restaurantDataResponse", restaurantDataResponse);
            setRestaurantData(restaurantDataResponse)
        } catch (error) {
            console.error('Request to Restaura Data failed, AG look at RestPg:', error);
            throw error;
        }
    }

    return (

        <main className="restaurant-page-main">

            <h1>Restaurant PAGE</h1>
            <form className="ConcertPageBtn" onSubmit={handleSubmit}>
                <button>RELOAD API</button>
            </form>
            <h1> {restaurantData ? (restaurantData.results.map((restaurant,idx) =>
                    <RestaurantEventCard key={idx} restaurant={restaurant} />)) 
    
            
            : "No data available Ayda, need to press btn"} </h1>

            <p className="error-message">&nbsp;{error}</p>
        </main>


    )
}