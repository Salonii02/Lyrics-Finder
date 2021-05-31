import React,{useContext} from 'react'
import {TrackContext} from "../../TrackContext"
import Track from "./Track"
import Spinner from  "../layout/Spinner"
const Tracks  = () =>{
    const [tracks]=useContext(TrackContext)
        if(tracks===undefined|| tracks.length===0)
        {
            return <Spinner/>
        }
        else{
            return (
            <div>
            <div className="row pt-5">
            {tracks.map(item => (
               <Track track={item.track} key={item.track.track_id}/>
            ))}
            </div>
            </div>

            )
        }
}

export default Tracks
