import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = 'd6a42255d7c3795a2f2630193c48accf';

  try {
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);  
  } catch (error) {
    alert(error);
  }
}

getResults('pizza');