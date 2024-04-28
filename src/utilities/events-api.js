// This is the base path of the Express route we'll define
import sendRequest from "./send-request-event-brite";
import sendRequestEventBrite from "./send-request-event-brite";
const BASE_URL = '/api/event';
const musiceventsURL= "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey="

// const LOGIN_URL = '/api/users/login';

export async function searchEvent() {
  return sendRequest(musiceventsURL, ' GET')

}