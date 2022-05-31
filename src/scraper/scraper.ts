console.log('SCRAPERS')

import fetch from 'node-fetch';

const response = await fetch('https://wotlkdb.com/?item=37613&xml');
const body = await response.text();

console.log(body);