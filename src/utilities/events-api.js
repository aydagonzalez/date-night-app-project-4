import sendRequest from "./send-request";
const BASE_URL = '/api/events';
const YELP_URL = '/api/yelp';

// -----------------TICKET MASTER API--------------------//

export async function createConcertEvent(concertData) {
  // console.log("creating")
  return sendRequest(BASE_URL, 'POST', concertData)
}

export async function indexEvents() {
  // console.log("getting Concerts data")
  return sendRequest(BASE_URL, 'GET')
}

export async function deleteEvent(id) {
  // console.log("deleting")
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function updateEvent({ id, statusUpdate }) {
  // console.log("id, edit:", id, statusUpdate)
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', statusUpdate)
}

// -----------------YELP API--------------------//


export async function fetchYelpData(yelpDataValue) {
  // console.log("getting Yelp")
  return sendRequest(YELP_URL, 'POST', yelpDataValue)
}

export async function createYelpEvent(yelpDataModel) {
  // console.log("creating yelpDataModel")
  return sendRequest(`${YELP_URL}/create`, 'POST', yelpDataModel)
}

export async function indexYelpEvents() {
  // console.log("getting Concerts data")
  return sendRequest(YELP_URL, 'GET')
}

export async function deleteYelpEvent(id) {
  // console.log("deleting")
  return sendRequest(`${YELP_URL}/${id}`, 'DELETE')
}

export async function updateYelpEvent({ id, statusUpdate }) {
  // console.log("id, edit:", id, statusUpdate)
  return sendRequest(`${YELP_URL}/${id}`, 'PUT', statusUpdate)
}
