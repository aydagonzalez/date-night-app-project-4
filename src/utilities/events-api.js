// This is the base path of the Express route we'll define
import sendRequest from "./send-request";
// const LOGIN_URL = '/api/users/login';
const BASE_URL = '/api/events';

export async function createConcertEvent(concertData) {
  console.log("creating")
  return sendRequest(BASE_URL, 'POST', concertData)
}

export async function indexEvents() {
  console.log("getting")
  return sendRequest(BASE_URL, 'GET')
}

export async function deleteEvent(id) {
  console.log("deleting")
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
