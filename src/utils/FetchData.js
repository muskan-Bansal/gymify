import React from 'react'
export const exerciseOptions={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '350b6c503bmsha6c9628e1768681p1070fcjsn91db6af8f3dd',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '350b6c503bmsha6c9628e1768681p1070fcjsn91db6af8f3dd',
  },
};

export const FetchData = async (url,option) => {
   const response=await fetch(url,option);
   const data = await response.json();
   return data;
}

 