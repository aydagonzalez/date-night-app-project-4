module.exports = {
    search
}

async function search(req, res) {
    try {
        console.log("REQ-BODY:", req.body)
        const key = process.env.REACT_APP_YELPKEY
        const url = `https://api.yelp.com/v3/businesses/search?location=New%20York%20City&term=mexican&sort_by=best_match&limit=20`
        const restaurantDataRequest = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${key}`
            }
        });
        console.log("fetch(url, key):", url, key);
        if (!restaurantDataRequest.ok) {
            throw new Error('Bad request fetching Restaurant data, AG look at RestPg:');
        }
        const restaurantDataResponse = await restaurantDataRequest.json();
        console.log("restaurantDataResponse", restaurantDataResponse);
        res.status(200).json(restaurantDataResponse)

    } catch (error) {
        console.log("ERROR:", error)
        res.status(400).json(error);
    }

}