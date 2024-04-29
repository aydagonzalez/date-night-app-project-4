
export default function ConcertEventCard({ event }){
    return (
        <div className="ConcertEventCard">
        <div>Name: {event.name}</div>
        <div>Type: {event.type}</div>
        <div>ID: {event.id}</div>
        <div>URL: {event.url}</div>
        {/* <img src={event.images[0].url} alt="" /> */}
        <div>IMG: </div>
        <div>Dates-start: {event.dates.start.localDate}</div>
        <div>Dates-start: {event.dates.start.localTime}
        Dates-Timezone: {event.dates.timezone}
        </div>
        <div>Classification-Name: { (event.classifications) ? event.classifications[0].genre.name : "No genre available"}</div>
        <div>Classification-ID: { (event.classifications) ? event.classifications[0].genre.id : "No genre ID available"}</div>
        <div>SAles: {new Date(event.sales.public.startDateTime).toLocaleDateString()}</div>
        <div>SAles: {new Date(event.sales.public.startDateTime).toLocaleTimeString()}</div>
        <div>Price Ranges max: {(event.priceRanges) ? event.priceRanges[0].max : "No data available"}</div>
        <div>Price Ranges min: { (event.priceRanges) ? event.priceRanges[0].min : "No data available"}</div>
        <div>Accesibility: { (event.accessibility) ? event.accessibility.ticketLimit : " No accessibility data availabl4"}</div>
    </div>
      )

}