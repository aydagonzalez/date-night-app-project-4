import { useState, useEffect } from "react";
import * as eventsService from '../../utilities/events-service';
import RestaurantEventCard from '../../components/RestaurantEventCard/RestaurantEventCard'

export default function RestaurantPage() {
    const [restaurantData, setRestaurantData] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchRestaurantData()
    }

    async function fetchRestaurantData() {
        const key = eventsService.getRestaurantsKeyCredentials();
        const url = eventsService.getRestaurantsURLCredentials();
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
        <>
            <h1>Restaurant PAGE</h1>
        </>

    )
}