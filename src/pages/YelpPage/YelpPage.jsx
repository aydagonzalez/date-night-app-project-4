import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import YelpEventCard from '../../components/YelpEventCard/YelpEventCard'



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
    //TOOK IT OFF SO THAT IT DOESNT AUTOMATICALLY RELOAD PAGE ONCE I START TO TYPE SOMETHING
    // useEffect(() => {
    //     fetchRestaurantData();
    // }, []);

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
        <main className="restaurant-page-main">
            <h1>Yelp PAGE</h1>

            {(yelpData) ? (yelpData.businesses.map((b,idx) => 
            <YelpEventCard business={b} idx={idx} getEvents={getEvents} />
            ))
            : "Please weite types of cuisine and city location to get started:"}
        

            <form className="ConcertPageBtn" onSubmit={handleSubmit}>
                <label >Search:</label>
                <input name='search' value={yelpDataValue.search} type="text" onChange={handleChange} />
                <label >location:</label>
                <input name='location' value={yelpDataValue.location} type="text" onChange={handleChange} />
                {/* //value will be use state insteads of astring */}
                <button>RELOAD API</button>
            </form>
            {/* <h1> {yelpData ? (JSON.stringify(yelpData))

                : "No data available Ayda, need to press btn"} </h1> */}

            <p className="error-message">&nbsp;{error}</p>
        </main>


    )
}