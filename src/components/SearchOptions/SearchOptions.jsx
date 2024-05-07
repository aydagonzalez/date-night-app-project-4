import { useState, useEffect } from "react";
import * as eventsAPI from '../../utilities/events-api';
import YelpEventCard from '../../components/YelpEventCard/YelpEventCard'
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { useNavigate } from "react-router-dom"

export default function SearchOptions() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // const [yelpDataValue, setYelpDataValue] = useState({ search: '', location: '' });

    function handleOptionalYelpSearch(cat) {
        navigate('/yelp', { state: { category: cat } })
        setError('');
    }

    return (
        <>

            <div className="yelp-search-options">

                <p onClick={() => handleOptionalYelpSearch('Social Activies')} className="whitespace-pre ">Social Activities</p>
                <p onClick={() => handleOptionalYelpSearch('Hobbies and Passions')} className="whitespace-pre ">Hobbies and Passions</p>
                <p onClick={() => handleOptionalYelpSearch('Sports and Fitness')} className="whitespace-pre ">Sports and Fitness</p>
                <p onClick={() => handleOptionalYelpSearch('Health and Wellbeing')} className="whitespace-pre ">Health and Wellbeing</p>
                {/* <p onClick={() => handleOptionalYelpSearch('Technology')} class="whitespace-pre ">Technology</p> */}
                <p onClick={() => handleOptionalYelpSearch('Art and Culture')} className="whitespace-pre ">Art and Culture</p>

            </div>

        </>
    )
}