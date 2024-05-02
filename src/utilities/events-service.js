
//  -------NEW KEEP BELOW

export function getConcertTokenCredentials() {
  const token = process.env.REACT_APP_TICKETMASTERKEY
  return (token)
}

export function getConcertURLCredentials() {
  const url = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=pink&apikey="
  const uri = "https://app.ticketmaster.com/discovery/v2/events.json?"
  return (url)
}

export function getRestaurantsKeyCredentials() {
  const key= process.env.REACT_APP_FOURSQUAREKEY
  return (key)
  }

export function getRestaurantsURLCredentials() {
  const url="https://api.foursquare.com/v2/venues/search"
  return (url)
  }

export function getYelpApiKeyCredentials() {
  const key= process.env.REACT_APP_YELPKEY
  console.log("YELPKEY", key)
  return (key)
  }

  export function getYelpApiClientIdCredentials() {
    const clientId= process.env.REACT_APP_YELPCLIENTID
    console.log("clientId", clientId)
    return (clientId)
    }

export function getYelpUrlCredentials() {
  const url= ""
  return (url)
  }