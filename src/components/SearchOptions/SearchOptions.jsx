import React from "react";
import { useNavigate } from "react-router-dom"

export default function SearchOptions() {
    const navigate = useNavigate();

    function handleOptionalYelpSearch(cat) {
        navigate('/yelp', { state: { category: cat } })
    }

    return (
        <>

            <div className="yelp-search-options">
                <p onClick={() => handleOptionalYelpSearch('Social Activies')} className="whitespace-pre ">Social Activities</p>
                <p onClick={() => handleOptionalYelpSearch('Restaurants')} className="whitespace-pre ">Restaurants</p>
                <p onClick={() => handleOptionalYelpSearch('Hobbies and Passions')} className="whitespace-pre ">Hobbies and Passions</p>
                <p onClick={() => handleOptionalYelpSearch('Sports and Fitness')} className="whitespace-pre ">Sports and Fitness</p>
                <p onClick={() => handleOptionalYelpSearch('Art and Culture')} className="whitespace-pre ">Art and Culture</p>
            </div>

        </>
    )
}