import { Link } from "react-router-dom"
import { useState } from "react";
import './ConcertEventCard.css'
import * as eventsAPI from '../../utilities/events-api';

export default function ConcertEventCard({ event, idx, getEvents}) {
    const [error, setError] = useState('');

    // function handleClick() {

    // }
    async function handleEventSave(evt) {
        evt.preventDefault();
        console.log("SEE ME?")
        const concertData = {
            // user: req.body.user,
            name: event.name,
            imageUrl: event.images[0].url,
            venue: event._embedded.venues[0].name,
            venueLocation: `${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.name}`,
            eventDate: `${event.dates.start.localDate} ${event.dates.start.localTime}`,
            timezone: event.dates.timezone,
            accessibility:  event.accessibility.ticketLimit,
        }
        console.log(concertData)
        try {
            const concert = await eventsAPI.createConcertEvent(concertData)
            console.log("concert:", concert)
            getEvents()
        } catch (error) {
            console.log("error:", error)
            setError('Save Concert Failed - Try Again Ayda');
        }
    }


    return (
        <div className="ConcertEventCard">
            <div>


                {/* <div>Name: {event.name}</div>
            <div>Type: {event.type}</div>
            <div>ID: {event.id}</div>
            <div>URL: {event.url}</div>
            <img src={event.images[0].url} alt="" />
            <div>Dates-start: {event.dates.start.localDate}</div>
            <div>Dates-start: {event.dates.start.localTime}
                Dates-Timezone: {event.dates.timezone}
            </div>
            <div>Classification-Name: {(event.classifications) ? event.classifications[0].genre.name : "No genre available"}</div>
            <div>Classification-ID: {(event.classifications) ? event.classifications[0].genre.id : "No genre ID available"}</div>
            <div>SAles: {new Date(event.sales.public.startDateTime).toLocaleDateString()}</div>
            <div>SAles: {new Date(event.sales.public.startDateTime).toLocaleTimeString()}</div>
            <div>Price Ranges max: {(event.priceRanges) ? event.priceRanges[0].max : "No data available"}</div>
            <div>Price Ranges min: {(event.priceRanges) ? event.priceRanges[0].min : "No data available"}</div>
            <div>VENUE: {(event._embedded.venues) ? event._embedded.venues[0].name : " No accessibility data availabl4"}</div>
            <div>CITY: {(event._embedded.venues) ? event._embedded.venues[0].city.name : " No data availabl4"}</div>
            <div>STATE: {(event._embedded.venues) ? event._embedded.venues[0].state.name : " No data data availabl4"}</div>
            <div>Venue: {(event.accessibility) ? event.accessibility.ticketLimit : " No accessibility data availabl4"}</div>
            <div>CITY: {(event._embedded.venues) ? `${(event._embedded.venues[0].city.name)} ${(event._embedded.venues[0].state.name)}` : " No data availabl4"}</div> */}

            </div>

            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">

                            <img src={event.images[0].url} alt={event.name} />
                            <span class="card-title"> {event.name} </span>
                        </div>
                        <div class="card-content">

                            <p>
                                {(event._embedded.venues) ? event._embedded.venues[0].name : " No accessibility data availabl4"}
                                CITY: {(event._embedded.venues) ? `${(event._embedded.venues[0].city.name)}, ${(event._embedded.venues[0].state.name)}` : " No data availabl4"}


                                <div>SAles: {new Date(event.sales.public.startDateTime).toLocaleDateString()}</div>

                                <div>Dates-start: {event.dates.start.localDate}</div>
                                <div>Dates-start: {event.dates.start.localTime}
                                    Dates-Timezone: {event.dates.timezone}
                                </div>
                                <div>Sale Starts: {new Date(event.sales.public.startDateTime).toLocaleTimeString()}</div>
                                <div>Accesibility: {(event.accessibility) ? event.accessibility.ticketLimit : " No accessibility data availabl4"}</div>
                            </p>
                        </div>
                        <div class="card-action">

                            <button type="Submit" idx={idx} onClick={handleEventSave} >Save</button>


                            {/* <a href="#">Save</a>| */}
                            {/* {event.url} */}
                            {/* <a> WEB Link</a> */}
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )

}