import axios from 'axios';
import React,{useState,useContext,useEffect} from 'react'
import {TrackContext} from "../../TrackContext";

const Search =() => {
    const [,setTracks]=useContext(TrackContext)
    const [input,setInput]=useState("")
    const [tracktitle,setTracktitle]=useState("")
    useEffect(() => {
       axios.get(`https://powerful-plains-71152.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${tracktitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            let track_list = res.data.message.body.track_list;
            setTracks(track_list);
        })
        .catch(errr=>{
            console.log(errr)
        })
    }, [tracktitle,setTracks])
    const findTrack = e => {
        e.preventDefault();
        setTracktitle(input);
      };
    
      const onChange = e => {
        setInput(e.target.value);
      };
    return (
        <div className="card card-body mb-4 mt-4">
        <h1 className="display-4 text-center">
          <i style={{fontSize: "55px",color:"palevioletred"}} className="fas fa-music" /> Search For A Song
        </h1>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Song title..."
            name="userInput"
            value={input}
            onChange={onChange}
          />
        <button style={{color:"palevioletred"}} className="btn btn-dark btn-block mb-5 mt-5" type="submit">
          Get Track Lyrics
        </button>
        </div>
      </form>
        </div>
    )
}

export default Search
