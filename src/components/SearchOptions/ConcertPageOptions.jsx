import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 


export default function ConcertPageOptions() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleOptionalConcertSearch(cat) {
        navigate('/events/ticketmaster', { state: { category: cat } })
        setError('');
    }


    return (
        <>
        <div className="yelp-search-options">

            <p onClick={() => handleOptionalConcertSearch('concerts')} className="whitespace-pre ">Concerts</p>
            <p onClick={() => handleOptionalConcertSearch('musicals')} className="whitespace-pre ">Musicals</p>
            <p onClick={() => handleOptionalConcertSearch('sports')} className="whitespace-pre ">Sports</p>
            <p onClick={() => handleOptionalConcertSearch('art%20and%20theater')} className="whitespace-pre ">Art and Theater</p>
            <p onClick={() => handleOptionalConcertSearch('family')} className="whitespace-pre ">Family</p>

        </div>
        </>
    )
}