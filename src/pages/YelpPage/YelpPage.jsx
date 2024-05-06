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
        setYelpDataValue({ search: cat, location: "New york city"});
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
            try { if (!yelpDataReq.ok) throw new Error('Ayda, Failed to fetch data from Yelp API Controller'); }
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
                <h1>Yelp PAGE</h1>
                <div className="search-btn-form-container">

                    <form className="search-forms" onSubmit={handleSubmit}>
                        {/* <label > Search: </label> */}
                        <SearchIcon />
                        <input name='search' placeholder="Search a place or type of food" className="search-input-form" value={yelpDataValue.search} type="text" onChange={handleChange} />
                        <input name='location' placeholder="City" className=" city-input-yelp" value={yelpDataValue.location} type="text" onChange={handleChange} />
                        <button className="search-form-btn yelp-page-search-btn">Search</button>
                    </form>
                </div>
                <div className="yelp-search-options">
                    {/* <form className="search-forms" onSubmit={handleSubmit}> */}
                        <p onClick={() => handleOptionalYelpSearch('Travel and Outdoor')} class="whitespace-pre ">Travel and Outdoor</p>
                        <p onClick={() => handleOptionalYelpSearch('Social Activies')} class="whitespace-pre ">Social Activities</p>
                        <p onClick={() => handleOptionalYelpSearch('Hobbies and Passions')} class="whitespace-pre ">Hobbies and Passions</p>
                        <p onClick={() => handleOptionalYelpSearch('Sports and Fitness')} class="whitespace-pre ">Sports and Fitness</p>
                        <p onClick={() => handleOptionalYelpSearch('Health and Wellbeing')} class="whitespace-pre ">Health and Wellbeing</p>
                        <p onClick={() => handleOptionalYelpSearch('Technology')} class="whitespace-pre ">Technology</p>
                        <p onClick={() => handleOptionalYelpSearch('Art and Culture')} class="whitespace-pre ">Art and Culture</p>
                    {/* </form> */}
                </div>
                {/* <div class="mb-14 xl:mb-16"><h2 class="ds-font-title-3 flex flex-wrap items-baseline gap-x-1 gap-y-2 font-semibold md:gap-x-2 xl:text-[1.75rem] xl:leading-9 mb-6">Explore top categories</h2>
            <div class="flex flex-wrap justify-between gap-y-4">
<a href="https://www.meetup.com/lp/outdoors-and-travel/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/travel_and_outdoor.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/travel_and_outdoor.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/travel_and_outdoor.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Travel and
Outdoor</p></a><a href="https://www.meetup.com/lp/friendship-and-socializing/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/social_activities.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/social_activities.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/social_activities.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Social
Activities</p></a><a href="https://www.meetup.com/topics/hobbies-crafts/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/hobbies_and_passions.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/hobbies_and_passions.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/hobbies_and_passions.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Hobbies and
Passions</p></a><a href="https://www.meetup.com/topics/sports/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/sports_and_fitness.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/sports_and_fitness.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/sports_and_fitness.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Sports and
Fitness</p></a><a href="https://www.meetup.com/lp/health-and-wellness/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/health_and_wellness.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/health_and_wellness.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/health_and_wellness.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Health and
Wellbeing</p></a><a href="https://www.meetup.com/lp/tech-activities-and-groups/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/technology.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/technology.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/technology.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Technology</p></a><a href="https://www.meetup.com/topics/art-and-culture/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/art_and_culture.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/art_and_culture.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/art_and_culture.svg?w=48"><p class="whitespace-pre font-medium p16yjzd4">Art and
Culture</p></a><a href="https://www.meetup.com/topics/games/" class="min-h-[108px] rounded-lg bg-beach/[.08] px-5 pb-4 pt-5 text-center hover:bg-beach/[.12] hover:no-underline xl:p-4 a14k5vsl" data-event-label="Category tile variant2"><img role="presentation" alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="mx-auto my-1.5 h-[20px] w-[20px]" style="color:transparent" srcset="https://secure.meetupstatic.com/next/images/indexPage/categories/games.svg?w=32 1x, https://secure.meetupstatic.com/next/images/indexPage/categories/games.svg?w=48 2x" src="https://secure.meetupstatic.com/next/images/indexPage/categories/games.svg?w=48">
    <p class="whitespace-pre font-medium p16yjzd4">Games</p></a></div></div> */}

                <div className="EventCardContainer">
                    {(yelpData) ? (yelpData.businesses.map((b, idx) =>
                        <YelpEventCard business={b} idx={idx} key={idx + 6} getEvents={getEvents} />
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