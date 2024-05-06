import { useState, useEffect } from "react";

export default function ConcertPageOptions() {
    const [error, setError] = useState('');

    function handleOptionalConcertSearch(cat) {
        // const newParams = { keyword: cat}
        console.log(cat)
        // fetchOptionalConcertData(cat)
        // console.log(parameters.keyword, parameters.state)
        // setParameters({ keyword: '', state: ""})
        setError('');
    }


    return (
        <>
        <div className="yelp-search-options">
            {/* <form className="search-forms" onSubmit={handleSubmit}> */}
            <p onClick={() => handleOptionalConcertSearch('concerts')} className="whitespace-pre ">Concerts</p>
            <p onClick={() => handleOptionalConcertSearch('musicals')} className="whitespace-pre ">Musicals</p>
            <p onClick={() => handleOptionalConcertSearch('sports')} className="whitespace-pre ">Sports</p>
            <p onClick={() => handleOptionalConcertSearch('art%20and%20theater')} className="whitespace-pre ">Art and Theater</p>
            <p onClick={() => handleOptionalConcertSearch('family')} className="whitespace-pre ">Family</p>
            {/* <p onClick={() => handleOptionalConcertSear ch('Technology')} class="whitespace-pre ">Technology</p> */}
            {/* <p onClick={() => handleOptionalConcertSearch('Art and Culture')} class="whitespace-pre ">Art and Culture</p> */}
            {/* </form> */}


        </div>
        </>
    )
}