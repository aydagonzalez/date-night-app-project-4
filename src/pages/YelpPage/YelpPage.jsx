import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import RestaurantEventCard from '../../components/RestaurantEventCard/RestaurantEventCard'
import sendRequest from "../../utilities/send-request"

export default function YelpPage() {
    const [restaurantData, setRestaurantData] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchRestaurantData()
    }

    async function fetchRestaurantData() {
        // const key = eventsService.getYelpApiKeyCredentials();
        // const clientId = eventsService.getYelpApiClientIdCredentials(); 
        const query = { query : 'mexican' }
        const BASE_URL = '/api/yelp'
        const response = await sendRequest(BASE_URL, 'POST', query)



        // const url = 'https://api.yelp.com/v3/businesses/search?location=New%20York%20City&sort_by=best_match&limit=20'
        // const url = `https://api.yelp.com/v3/businesses/search?query=${query}`
        // console.log("key:", key, "url:", url);
        // try {
        //     const restaurantDataRequest = await fetch(url, {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Authorization': `Bearer ${key}`
        //         }
        //     });
        //     console.log("fetch(url, key):", url, key);
        //     if (!restaurantDataRequest.ok) {
        //         throw new Error('Bad request fetching Restaurant data, AG look at RestPg:');
        //     }
        //     const restaurantDataResponse = await restaurantDataRequest.json();
        //     console.log("restaurantDataResponse", restaurantDataResponse);
        //     setRestaurantData(restaurantDataResponse)
        // } catch (error) {
        //     console.error(error);
        //     throw error;
        // }
    }

    return (

        <main className="restaurant-page-main">

            <h1>YElp PAGE</h1>
            <form className="ConcertPageBtn" onSubmit={handleSubmit}>
                <button>RELOAD API</button>
            </form>
            <h1> {restaurantData ? (JSON.strigify(restaurantData) )
    
            
            : "No data available Ayda, need to press btn"} </h1>

            <p className="error-message">&nbsp;{error}</p>
        </main>


    )
}