import { DateTime } from 'luxon';

const searchFlights = async(origin, destination) => {
  
  const when = DateTime.local().plus({days: 1}).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky', 
    flyFrom:origin,
    to:destination
  })
  const url = new URL(`?${query}`,' https://api.skypicker.com/flights' );
  
  const response =  await fetch(url);  
  const data = await response.json()
  const results = data.data.map((info)=>{
    const result = {
      origin: info.cityFrom,
      destination:info.cityTo, 
      dTime:DateTime.fromMillis(info.dTime * 1000).toFormat('hh:mm'), 
      aTime:DateTime.fromMillis(info.aTime * 1000).toFormat('hh:mm'), 
    }
    return result 
  })
  console.log(data);
  
  return results;
}
export default searchFlights;