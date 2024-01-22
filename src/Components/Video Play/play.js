import { useLocation } from "react-router-dom"
import YOUTUBEContext from "../Context/APIContext"
import { useContext, useEffect, useState } from "react"

function Play() {
    const {   videoID, videoDetail, getVideoDetail } = useContext(YOUTUBEContext)
    const { setVideoID } = useContext(YOUTUBEContext);
    const { pathname } = useLocation()
    const id = pathname.slice(1)
    const embedUrl = `https://www.youtube.com/embed/${id}`;

    useEffect(() => {
        if (id !== "") {
            getVideoDetail()
            setVideoID(id)
        }
    }, [id,videoID])

    console.log( videoDetail)

    useEffect(() => {
        // if (data?.videoDetail) {
        //     console.log(data?.videoDetail);
        // }
    }, []);


    return (
        <div id="play-main-div">
            <iframe src={embedUrl} frameborder="0"></iframe>
            <h4>{ }</h4>
        </div>
    )
}
export default Play