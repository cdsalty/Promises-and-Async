/*

ASYNC is a promise but MUCH  EASIER... (added in es8, or 2017)

This file is the same as our promises.js but instead of using promises, we just async.

*/

const request = require('request');
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`


function getNowPlaying(){
    return new Promise((resolve, reject)=>{
        request.get(nowPlayingUrl,(err,response,body)=>{    //javascript will have to wait after this promise.
            const parsedBody = JSON.parse(body);
            resolve(parsedBody);
        })
    })
}

function getCast(movieId){
    return new Promise((resolve, reject)=>{
        
    })
}

function getCast(movieId){
    return new Promise((resolve, reject)=>{
        const castUrl = `${apiBaseUrl}/movie/${movieId}/credits?api_key=${apiKey}`  //how did we know the struture of how this is laid out?
        request.get(castUrl,(error,response,body)=>{
            const parsedBody = JSON.parse(body);
            resolve(parsedBody);
        })
    })
}

function getPerson(personId){
    return new Promise((resolve, reject)=>{
        const personUrl = `${apiBaseUrl}/person/${personId}?api_key=${apiKey}`;
        request.get(personUrl,(err, response, body)=>{
            const parsedData = JSON.parse(body);
            resolve(parsedData)
        });
    })
}

async function run(){   //async in front of function means a WAIT is coming.
    const movieData=await getNowPlaying(); //await says to W A I T before going to the next line.(Function will stop here until it's done.)
    // console.log(movieData);
    const castData = await getCast(movieData.results[0].id);
    // console.log(castData);
    const personData= await getPerson(castData.cast[0].id);
    console.log(personData);
}
run();