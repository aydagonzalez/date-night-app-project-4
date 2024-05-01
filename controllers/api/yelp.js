module.exports = {
    search
}

async function search(req, res) {
    try {
        console.log("REQ-BODY:", req.body)
        console.log("REQ-BODY-SEARCH:", req.body.search)
        console.log("REQ-BODY-LOCATION:", req.body.location)
        // New%20York%20City
        const key = process.env.REACT_APP_YELPKEY
        const url = `https://api.yelp.com/v3/businesses/search?location=${req.body.location}&term=${req.body.search}&sort_by=best_match&limit=20`
        const yelpApiDataRequest = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${key}`
            }
        });
        console.log("fetch(url, key):", url, key);
        if (!yelpApiDataRequest.ok) {
            throw new Error('Bad request fetching yelpApi data, AG look at RestPg:');
        }
        const yelpApiDataResponse = await yelpApiDataRequest.json();
        console.log("yelpApiDataResponse", yelpApiDataResponse);
        res.status(200).json(yelpApiDataResponse)
        // res.json(yelpApiDataResponse)
        // res.status(200).json({})

    } catch (error) {
        console.log("ERROR:", error)
        res.status(400).json(error);
    }

}