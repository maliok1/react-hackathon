import { DateTime } from 'luxon';

const searchFlights = async(origin, destination, direct) => {
  
  const when = DateTime.local().plus({days: 1}).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky', 
    flyFrom:'PRG',
    to:'DME'
  })
  const url = new URL(`?${query}`,' https://api.skypicker.com/flights' );
  console.log('url', url.href)
  return url.href;
}
export default searchFlights;