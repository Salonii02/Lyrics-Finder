import React,{useState,useEffect} from 'react'
import axios from "axios"
import Spinner from '../layout/Spinner';
import {Link} from "react-router-dom";
const Lyrics=(props)=> {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

    useEffect(() => {
        axios
      .get(
        `https://powerful-plains-71152.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      ).then((response)=>{
        console.log(response)
        let lyrics=response.data.message.body.lyrics;
        setLyrics(lyrics)
        axios.get(`https://powerful-plains-71152.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
          props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
             setTrack(res.data.message.body.track)
        })
        .catch(error=>console.log(error))
      }
        )
       .catch(error => console.log(error))
    }, [props.match.params.id])
    if (track===undefined || lyrics===undefined||Object.keys(track).length===0||Object.keys(lyrics).length===0)
    {
      return <Spinner/>
    }
    else{
    return (
        
        <div>
         <Link to="/" className="btn btn-primary btn-sm mb-4">
          Go Back
        </Link>
            <div className="card">
             <h5 className="card-header">
             <h2>{track.track_name}</h2>
             <i> By</i>
             <span>{"  "}</span>
             <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
            <div className="card-text">
            <h3>{lyrics.lyrics_body}</h3>
            </div>
            </div>
            </div>
        </div>
    )
    }
}

export default Lyrics
