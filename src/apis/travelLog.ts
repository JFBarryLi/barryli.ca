import { client } from 'apis/client';

export async function getTravelLogByTripName(tripName: string) {
  const url = 'https://api.barryli.ca/travel_log/trips/' + tripName;
  // Not a secret; public api. 
  const headers = {'X-Api-Key': process.env.REACT_APP_TRAVELLOG_API_KEY as string};
  const response = await client.get(url, {headers});
  return response;
}
