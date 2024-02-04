import * as readline from 'readline';
import axios from 'axios';
import { Config } from './config';
const configJSON = require('./config.json');
const config: Config = configJSON as Config;
const APIKEY = config.apiKey;
const APIURL = config.apiURL;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a date in YYYY-MM-DD format for the games you want to see ', (answer) => {
    axios.get(`${APIURL}/${answer}?key=${APIKEY}`)
        .then((response) => {
            // console.log(response.data);
            const games = response.data;
            games.forEach(function (game: any) {
                console.log(game.AwayTeam + ' vs ' + game.HomeTeam + ' at ' + game.HomeTeam);
            });
        });
    rl.close();
});