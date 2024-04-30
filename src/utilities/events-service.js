
//  -------NEW KEEP BELOW

export function getConcertTokenCredentials() {
  const token = process.env.REACT_APP_TICKETMASTERKEY
  return (token)
}

export function getConcertURLCredentials() {
  const url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey="
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