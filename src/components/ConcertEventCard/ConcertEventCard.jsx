import { Link } from "react-router-dom"
import { useState } from "react";
import './ConcertEventCard.css'
import * as eventsAPI from '../../utilities/events-api';

export default function ConcertEventCard({ event, idx, getEvents }) {
    const [error, setError] = useState('');

    const imgRatio3_2 =  event.images.find(img => img.ratio === '3_2')
    const imgUrl = imgRatio3_2.url
    
    async function handleEventSave(evt) {
        evt.preventDefault();
        // console.log("SEE ME?")
        const concertData = {
            name: event.name,
            imageUrl: ((imgUrl) ? imgUrl : (event.images[0].url)) ,
            websiteUrl: (event.url) ? event.url : "" ,
            venue: event._embedded.venues[0].name,
            venueLocation: `${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.name}`,
            eventDate: `${event.dates.start.localDate} ${event.dates.start.localTime}`,
            timezone: event.dates.timezone,
            accessibility: (event.accessibility) ? event.accessibility.ticketLimit : ""
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
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        {/* {event.images.find((img) => (img.ratio = '16_9'))} */}

                            {/* <img src={event.images[0].url} alt={event.name} /> */}
                            <img src={(imgUrl) ? imgUrl : (event.images[0].url) } alt={event.name} />
                            <span class="card-title"> {event.name} </span>
                        </div>
                        <div class="card-content">

                            <p>
                                {(event._embedded.venues) ? event._embedded.venues[0].name : " No accessibility data availabl4"}
                                CITY: {(event._embedded.venues) ? `${(event._embedded.venues[0].city.name)}, ${(event._embedded.venues[0].state.name)}` : " No data availabl4"}


                                <div>SAles: {new Date(event.sales.public.startDateTime).toLocaleDateString()}</div>
                                <div>WebsiteUR l: {event.url}</div>

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