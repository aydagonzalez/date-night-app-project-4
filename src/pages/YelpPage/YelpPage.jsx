import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import YelpEventCard from '../../components/YelpEventCard/YelpEventCard'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from "react-router-dom";

export default function YelpPage({ getEvents, user }) {
    const [yelpData, setYelpData] = useState('')
    const [error, setError] = useState('')
    const [yelpDataValue, setYelpDataValue] = useState({ search: '', location: '' })
    const location = useLocation()
    const { category } = location.state || {};

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
        try {
            const yelpDataReq = await eventsAPI.fetchYelpData(yelpDataNewValue)
            try { if (!yelpDataReq.ok) throw new Error('Error fetching data'); }
            catch (error) { console.log(error) }
            setYelpData(yelpDataReq)
            setYelpDataValue({ search: '', location: '' })
            setError('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <main className="event-page-main">
                <div></div>
                <div className="search-btn-form-container">
                    <form className="search-forms" onSubmit={handleSubmit}>
                        <SearchIcon />
                        <input name='search' placeholder="Search a place or type of food" className="search-input-form" value={yelpDataValue.search} type="text" onChange={handleChange} />
                        <input name='location' placeholder="City" className=" city-input-yelp" value={yelpDataValue.location} type="text" onChange={handleChange} />
                        <button className="search-form-btn yelp-page-search-btn">Search</button>
                    </form>
                </div>
                <div className="yelpPage-search-options">
                    <p onClick={() => handleOptionalYelpSearch('Restaurants')} className="whitespace-pre ">Restaurants</p>
                    <p onClick={() => handleOptionalYelpSearch('Social Activies')} className="whitespace-pre ">Social Activities</p>
                    <p onClick={() => handleOptionalYelpSearch('Hobbies and Passions')} className="whitespace-pre ">Hobbies and Passions</p>
                    <p onClick={() => handleOptionalYelpSearch('Sports and Fitness')} className="whitespace-pre ">Sports and Fitness</p>
                    <p onClick={() => handleOptionalYelpSearch('Art and Culture')} className="whitespace-pre ">Art and Culture</p>
                    <p onClick={() => handleOptionalYelpSearch('Travel and Outdoor')} className="whitespace-pre ">Travel and Outdoor</p>
                </div>
                <div className="EventCardContainer">
                    {(yelpData) ? (yelpData.businesses.map((b, idx) =>
                        <YelpEventCard business={b} idx={idx} key={idx + 6} getEvents={getEvents} user={user} />
                    ))
                        : "Search May be Unavailable :("}
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </main>
        </>

    )
}