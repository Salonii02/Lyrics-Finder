import React from 'react'
import {Link } from "react-router-dom"
const Track= ({track})=>{
    console.log(track.artist_name);
    return (
        <div className="col-md-6">
            <div className ="card border border-dark mb-4">
                 <div className="card-body">
                 {/* <i className="fas fa-music card-title"></i> */}
                 <strong>
              <i  style={{fontSize: "25px",color:"palevioletred"}} className="fas fa-music" />
            </strong>
                   <h5 className="card-title">{track.artist_name}</h5>
                    <p className="card-text">
            <strong>
              <i  style={{fontSize: "15px",color:"palevioletred"}} className="fas fa-play" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i   style={{fontSize: "15px",color:"palevioletred"}}className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
          </p>
        <Link to={`lyrics/track/${track.track_id}`}className="card-link">
        <i>
            View Lyrics
        </i>
        </Link>
                </div>
            </div>
        </div>
    )
}

export default Track;