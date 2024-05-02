
//  -------NEW KEEP BELOW

export function getConcertTokenCredentials() {
  const token = process.env.REACT_APP_TICKETMASTERKEY
  return (token)
}

export function getRestaurantsKeyCredentials() {
  const key= process.env.REACT_APP_FOURSQUAREKEY
  return (key)
  }

export function getRestaurantsURLCredentials() {
  const url="https://api.foursquare.com/v2/venues/search"
  return (url)
  }
