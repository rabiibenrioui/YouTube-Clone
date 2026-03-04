import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://yt-api.p.rapidapi.com/trending',
  params: {
    geo: 'US',
    type: 'now'
  },
  headers: {
    'x-rapidapi-key': 'b6bb12dc84mshd0b16eeac649dfcp1b8a60jsn9e86e48eb03a',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}