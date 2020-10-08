const API_KEY="Iwb8Ai5dTVP5bQT4YNRqG2wjC8m1"

//get all matches[upcoming matches]

export const getMatches=()=>{
    const url=` https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=> console.log("ERROR : ",error));
};


//Load match details

export const getMatchDetails=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url).then(response=>response.json()).catch(error=>console.log(error));
}