import axios from 'axios';

async function getResults(query) {
  axios(`https://www.food2fork.com/api/search`)
}

getResults();