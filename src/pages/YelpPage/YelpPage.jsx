import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import YelpEventCard from '../../components/YelpEventCard/YelpEventCard'
import SearchIcon from '@mui/icons-material/Search';



export default function YelpPage({ getEvents }) {
    const [yelpData, setYelpData] = useState('');
    const [error, setError] = useState('');
    const [yelpDataValue, setYelpDataValue] = useState({ search: '', location: '' });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setYelpDataValue({ ...yelpDataValue, [name]: value });
        setError('');
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchRestaurantData()
    }

    async function fetchRestaurantData() {
        const yelpDataNewValue = {
            location: yelpDataValue.location.replace(/\s/g, "%20"),
            search: yelpDataValue.search.replace(/\s/g, "%20")
        }
        console.log("yelpDataNewValue", yelpDataNewValue)
        try {
            const yelpDataReq = await eventsAPI.fetchYelpData(yelpDataNewValue)
            try {if (!yelpDataReq.ok) throw new Error('Ayda, Failed to fetch data from Yelp API Controller');}
            catch (error) {console.log(error)}
            // const yelpDataRes = await yelpDataReq.json()
            console.log("yelpDataReq", yelpDataReq)
            setYelpData(yelpDataReq)
            setYelpDataValue({ search: '', location: '' })
            setError('')
        } catch (err) {
            console.log(err)
        }
    }
    // console.log("yelpData:", yelpData)
    return (
        <>

        <main className="event-page-main">
            <h1>Yelp PAGE</h1>
            <div className="search-btn-form-container">

            <form className="search-forms" onSubmit={handleSubmit}>
                {/* <label > Search: </label> */}
                <input name='search' placeholder="Search a place or type of food" className="search-input-form"  value={yelpDataValue.search} type="text" onChange={handleChange} />
                <input name='location' placeholder="City"  className=" city-input-yelp"  value={yelpDataValue.location} type="text" onChange={handleChange} />
                <button className="search-form-btn yelp-page-search-btn">Search</button>
            </form>
            </div>

            <div className="EventCardContainer"> 
            {(yelpData) ? (yelpData.businesses.map((b,idx) => 
            <YelpEventCard business={b} idx={idx} key={idx+6} getEvents={getEvents} />
            ))
            : "Please write types of cuisine and city location to get started:"}
        

            {/* <h1> {yelpData ? (JSON.stringify(yelpData))

                : "No data available Ayda, need to press btn"} </h1> */}
</div>
            <p className="error-message">&nbsp;{error}</p>
        </main>
        </>

    )
}