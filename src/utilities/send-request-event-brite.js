// const token = process.env.TickectMasterConsumerKey
const token = "XsWG97LtQb51oboT24fytzT0HnumG7Zi"
// const TickectMasterConsumerKey = process.env.TickectMasterConsumerKey
// const url= 'https://www.eventbriteapi.com/v3/users/me/?token=';
// const url2 = "https://www.eventbriteapi.com/v3/organizations/" 
// const urlTicketMAster= "https://app.ticketmaster.com/discovery/v2/"
// const organization_id = "something"


// Search for music events in the Los Angeles area
// const musiceventsURL= "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey="

export function getToken() {
  // getItem returns null if there's no string
  const token = "XsWG97LtQb51oboT24fytzT0HnumG7Zi"
  return token;
}


export function getURLTM() {
  const url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey="
  return url;
}

export default async function sendRequest(url, method = 'GET', payload = null) {
  console.log("token:", token);

  try {
      const response = await fetch(`${url}${token}`);
      console.log("fetch(url, options):", url);
      if (!response.ok) {
          throw new Error('Bad request fetching');
      }
      const tikecktMasterData = await response.json();
      console.log("RES", tikecktMasterData);
      return tikecktMasterData; // Assuming you want to return the userData instead of rendering it
  } catch (error) {
      console.error('Request to Ticket Master failed:', error);
      throw error;
  }
}



// export default async function sendRequest(url, method = 'GET', payload = null) {
//     console.log("token:",token)
//     console.log("TickectMasterConsumerKey:",TickectMasterConsumerKey)
   
//     // const options = { method };
//     // if (payload) {
//     //   console.log("payload:",payload)
//     //   options.headers = { 'Content-Type': 'application/json' };
//     //   options.body = JSON.stringify(payload);
//     //   console.log("payload- options.body:",    options.body)
//     // }
//     const res = await fetch(`${url}${token}`)

//     console.log("fetch(url, options):", url)
//     .then(res => res.json())
//     console.log("RES", res)
//     .then(userData => {
//       res.render( { userData });
//     })
    
//     if (res.ok) return res.json();

//     throw new Error('Bad Request fetching');
// }


// This is the base path of the Express route we'll define
// export default async function sendRequestEventBrite( method = 'GET', payload = null) {
//   // Fetch accepts an options object as the 2nd argument
//   // used to include a data payload, set headers, etc. 
//   const options = { method };
//   if (payload) {
//     options.headers = { 'Content-Type': 'application/json' };
//     options.body = JSON.stringify(payload);
//   }
//   if (token) {
//     // Ensure the headers object exists
//     options.headers = options.headers || {};
//     // Add token to an Authorization header
//     // Prefacing with 'Bearer' is recommended in the HTTP specification
//     options.headers.Authorization = `Bearer ${token}`;
//   }
  
//   const res = await fetch(url, options);
//   // res.ok will be false if the status code set to 4xx in the controller action
//   if (res.ok) return res.json();
//   throw new Error('Bad Request');
// }
