import YOUTUBEContext from "../Context/APIContext"
import { useContext, useEffect, useState } from "react"
import Videocard from "./VideoCard"
import "./Video.css"

function Recommend() {
    const [allVideos, setAllVideos] = useState([])
    const [loading, setLoading] = useState(false)
    const state = useContext(YOUTUBEContext)
    console.log(state)
    useEffect(() => {
        if (state) {
            if (state.loading) {
                setLoading(true)
            }
            if (state.data) {
                setAllVideos(state.data.videos)
                setLoading(false)
            }
        }

    }, [state, state.data])
    console.log(allVideos)

    return (
        loading ?
            (<img src="" alt="" />)
            : (
                <div id="recommend-main-video">
                  {allVideos.length!==0?
                    allVideos.map((obj,idx)=>{
                        return <Videocard obj={obj} id={idx}/>
                    })
                :null}
                </div>)
    )
}
export default Recommend