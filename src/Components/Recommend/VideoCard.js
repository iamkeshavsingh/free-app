import "./Video.css"
import YOUTUBEContext from "../Context/APIContext"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Videocard({obj,id}){

    useState(()=>{
        
    })

function handleViewsNumber(number){
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
      } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
      } else {
        return number.toString();
      }
    }
    
    return(
        <div className="video-card-div">
<Link to={`/${obj.video_id}`}><img className="video-img" src={obj.thumbnails[0].url} alt="" /></Link>
<h5 className="video-time">{obj.video_length}</h5>
<div className="video-ch-ttl-div">
<img className="channel-img" src="" alt="" />
<h3 className="video-title">{obj.title}</h3>
</div>
<h3 className="channel-name">{obj.author}</h3>
<div className="time-view-div">
<h3 className="video-views">{handleViewsNumber(obj.number_of_views)} views</h3>
<h3 className="video-time">{obj.published_time}</h3>
</div>
        </div>
    )
}
export default Videocard