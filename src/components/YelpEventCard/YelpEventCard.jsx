import { Link } from "react-router-dom"
import { useState } from "react";
// import './ConcertEventCard.css'
import * as eventsAPI from '../../utilities/events-api';

export default function YelpEventCard({ business, idx, getEvents }) {
    const [error, setError] = useState('');


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
            displayCountry: business.location.country|| "",
            displayPhone: business.display_phone || "",
            transactions: business.transactions[0] || "",
            transactions2: business.transactions[1] || "",
            price: business.price || "",
            reviewCount: business.review_count || "",
            rating: business.rating|| "",
            menuUrl: business.attributes.menu_url || "",

        }
        console.log("yelpDataModel:",yelpDataModel)
        try {
            const yelpDataCreate = await eventsAPI.createYelpRestaurantEvent(yelpDataModel)
            console.log("yelpDataCreate:", yelpDataCreate)
            getEvents()
        } catch (error) {
            console.log("error:", error)
            setError('Save yelp Restaurant Failed - Try Again Ayda');
        }
    }

    return (
        <main>

            <h1>DAta</h1>
            <div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">

                            <img src={business.image_url} alt={business.name} />
                            <span class="card-title"> {business.name} </span>
                        </div>
                        <div class="card-content">

                            <p>
                                <div>is_closed:{(business.is_closed) ? (business.is_closed) : " No data available"}</div>

                                <div>open24_hours:{(business.open24_hours) ? (business.open24_hours) : " No data available"} </div>
                                <div>review_count:{(business.review_count) ? (business.review_count) : " No data available"} </div>
                                <div>rating:{(business.rating) ? (business.rating) : " No data available"} </div>
                                <div>transactions:{(business.transactions) ? (business.transactions) : " No data available"}</div>
                                <div>price:{(business.price) ? (business.price) : " No data available"} </div>
                                <div>location.display_address:{(business.location.display_address) ? (business.location.display_address) : " No data available"} </div>
                                <div>display_phone:{(business.display_phone) ? (business.display_phone) : " No data available"} </div>
                                <div>attributes.menu_url:{(business.attributes.menu_url) ? (business.attributes.menu_url) : " No data available"} </div>
                            </p>
                        </div>
                        <div class="card-action">

                            <button type="Submit" idx={idx} onClick={handleEventSave}  >Save</button>

                        </div>
                    </div>
                </div>
            </div>


            {/* ID: {business.id} <br /> */}
            {/* ID:{(business.id) ? (business.id) : " No data available"} <br /> */}
            {/* ALIAS:{(business.alias) ? (business.alias) : " No data available"} <br /> */}
            {/* name:{(business.name) ? (business.name) : " No data available"} <br /> */}
            {/* image_url:{(business.image_url) ? (business.image_url) : " No data available"} <br /> */}
            {/* is_closed:{(business.is_closed) ? (business.is_closed) : " No data available"} <br /> */}
            {/* open24_hours:{(business.open24_hours) ? (business.open24_hours) : " No data available"} <br /> */}
            {/* url:{(business.url) ? (business.url) : " No data available"} <br /> */}
            {/* review_count:{(business.review_count) ? (business.review_count) : " No data available"} <br /> */}
            {/* categories[0]:{(business.categories[0].alias) ? (business.categories[0].alias) : " No data available"} <br /> */}
            {/* rating:{(business.rating) ? (business.rating) : " No data available"} <br /> */}
            {/* transactions:{(business.transactions) ? (business.transactions) : " No data available"} <br /> */}
            {/* price:{(business.price) ? (business.price) : " No data available"} <br /> */}
            {/* location.display_address:{(business.location.display_address) ? (business.location.display_address) : " No data available"} <br /> */}
            {/* display_phone:{(business.display_phone) ? (business.display_phone) : " No data available"} <br /> */}
            {/* attributes.menu_url:{(business.attributes.menu_url) ? (business.attributes.menu_url) : " No data available"} <br /> */}

,
        </main>
    )
}
