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

    function handleOptionalYelpSearch(cat) {
        setYelpDataValue({ search: cat, location: "New york city" });
        fetchAPIYelpData()
        setError('');
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        fetchAPIYelpData()
    }

    async function fetchAPIYelpData() {
        const yelpDataNewValue = {
            location: yelpDataValue.location.replace(/\s/g, "%20"),
            search: yelpDataValue.search.replace(/\s/g, "%20")
        }

        console.log("yelpDataNewValue", yelpDataNewValue)
        try {
            const yelpDataReq = await eventsAPI.fetchYelpData(yelpDataNewValue)
            try { if (!yelpDataReq.ok) throw new Error('Error fetching data'); }
            catch (error) { console.log(error) }
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
                <div></div>
                <div className="search-btn-form-container">

                    <form className="search-forms" onSubmit={handleSubmit}>
                        {/* <label > Search: </label> */}
                        <SearchIcon />
                        <input name='search' placeholder="Search a place or type of food" className="search-input-form" value={yelpDataValue.search} type="text" onChange={handleChange} />
                        <input name='location' placeholder="City" className=" city-input-yelp" value={yelpDataValue.location} type="text" onChange={handleChange} />
                        <button className="search-form-btn yelp-page-search-btn">Search</button>
                    </form>
                </div>
                <div className="yelpPage-search-options">
                    {/* <form className="search-forms" onSubmit={handleSubmit}> */}
                    <p onClick={() => handleOptionalYelpSearch('Travel and Outdoor')} class="whitespace-pre ">Travel and Outdoor</p>
                    <p onClick={() => handleOptionalYelpSearch('Social Activies')} class="whitespace-pre ">Social Activities</p>
                    <p onClick={() => handleOptionalYelpSearch('Hobbies and Passions')} class="whitespace-pre ">Hobbies and Passions</p>
                    <p onClick={() => handleOptionalYelpSearch('Sports and Fitness')} class="whitespace-pre ">Sports and Fitness</p>
                    <p onClick={() => handleOptionalYelpSearch('Health and Wellbeing')} class="whitespace-pre ">Health and Wellbeing</p>
                    {/* <p onClick={() => handleOptionalYelpSearch('Technology')} class="whitespace-pre ">Technology</p> */}
                    <p onClick={() => handleOptionalYelpSearch('Art and Culture')} class="whitespace-pre ">Art and Culture</p>
                    {/* </form> */}
                </div>


                <div className="EventCardContainer">
                    {(yelpData) ? (yelpData.businesses.map((b, idx) =>
                        <YelpEventCard business={b} idx={idx} key={idx + 6} getEvents={getEvents} />
                    ))
                        : "Search anything in a city near you!"}

                </div>
                <p className="error-message">&nbsp;{error}</p>
            </main>
        </>

    )
}