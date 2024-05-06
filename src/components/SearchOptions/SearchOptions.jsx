import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import YelpEventCard from '../../components/YelpEventCard/YelpEventCard'
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

export default function SearchOptions() {
    const [yelpData, setYelpData] = useState('');
    const [error, setError] = useState('');
    const [yelpDataValue, setYelpDataValue] = useState({ search: '', location: '' });

    function handleOptionalYelpSearch(cat) {
        setYelpDataValue({ search: cat, location: "New york city"});
        fetchAPIYelpData()
        setError('');
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


    return(
        <>
        {/* <h1>SearchOptions Component</h1> */}
        <div className="yelp-search-options">
  
                        <p onClick={() => handleOptionalYelpSearch('Travel and Outdoor')} class="whitespace-pre ">Travel and Outdoor</p>
                        <p onClick={() => handleOptionalYelpSearch('Social Activies')} class="whitespace-pre ">Social Activities</p>
                        <p onClick={() => handleOptionalYelpSearch('Hobbies and Passions')} class="whitespace-pre ">Hobbies and Passions</p>
                        <p onClick={() => handleOptionalYelpSearch('Sports and Fitness')} class="whitespace-pre ">Sports and Fitness</p>
                        <p onClick={() => handleOptionalYelpSearch('Health and Wellbeing')} class="whitespace-pre ">Health and Wellbeing</p>
                        <p onClick={() => handleOptionalYelpSearch('Technology')} class="whitespace-pre ">Technology</p>
                        <p onClick={() => handleOptionalYelpSearch('Art and Culture')} class="whitespace-pre ">Art and Culture</p>
                        <p onClick={() => handleOptionalYelpSearch('Concerts')} class="whitespace-pre ">Concerts</p>

                </div>
         
        </>
    )
}