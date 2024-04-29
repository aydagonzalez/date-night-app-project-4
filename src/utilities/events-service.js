// const token = process.env.TickectMasterConsumerKey
const token = "XsWG97LtQb51oboT24fytzT0HnumG7Zi"
const TickectMasterConsumerKey = process.env.TickectMasterConsumerKey
const url= 'https://www.eventbriteapi.com/v3/users/me/?token=';
const url2 = "https://www.eventbriteapi.com/v3/organizations/" 
const urlTicketMAster= "https://app.ticketmaster.com/discovery/v2/"
const organization_id = "something"


// Search for music events in the Los Angeles area
// const musiceventsURL= "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey="

export function getToken() {
  // getItem returns null if there's no string
  const token = "XsWG97LtQb51oboT24fytzT0HnumG7Zi"
  return token;
}


export function getURLTM() {
  // getItem returns null if there's no string
  const url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey="
  return url;
}

export function getYELPKey() {
  const  YELPClientID= "MkAip9yaxAO25FMg3Sbgrg"
 const YELPAPIKey= "Fh6ztCODn8167aLI6XomcFMbCxNU3nAXGtveF0pGMOqehpz5X-UnNehqjC0JJQoMhb2ocv54j5FtVT5ziL0qL6c2Or_EjcS5NPHAlFwQyEEgHB4lzV7DtAR2VYQuZnYx"
 return (YELPAPIKey, YELPClientID);
 } 


 export function getFSKey() {
 const FSAPIKey= "fsq3kuCwTIhJi2U63tQNGn26xRrZRHk/YFzNMz1UDHEMc5g="
 const FSURL="https://api.foursquare.com/v2/venues/search"

 return (FSAPIKey,FSURL)
 }