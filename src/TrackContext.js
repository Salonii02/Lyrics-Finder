import React,{useState,createContext,useEffect} from 'react'

import axios from "axios";
require('dotenv').config()
export const TrackContext=createContext();

export const TrackProvider= (props)=> {
    const [Tracks,setTracks]=useState([]);
    useEffect(() => {
        axios
          .get(
            `https://powerful-plains-71152.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${
              process.env.REACT_APP_MM_KEY
            }`,{
                headers: { 
                    'Access-Control-Allow-Origin' : true
                  }
            }
          )
          .then(res => {
            console.log(res.data);
            setTracks(
            res.data.message.body.track_list);
          })
          .catch(err => console.log(err));
      }, []);
    return (
        <TrackContext.Provider value={[Tracks,setTracks]}>
         {props.children} 
        </TrackContext.Provider>
            
    )
}
