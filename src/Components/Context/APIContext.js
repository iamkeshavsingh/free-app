import React, { createContext, useReducer, useEffect, useState } from 'react';

const YOUTUBEContext = createContext();

const initialState = {
    data: null,
    loading: false,
    error: null,
    channelDetail:null,
    videoDetail:[]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload, error: null };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
            case 'VIDEO':
                return { ...state, loading: false, data: action.payload, error: null };
            case 'FETCH_CHANNEL_DETAIL':
                return { ...state, loading: false, channelDetail: action.payload,error:null };
        default:
            return state;
    }
};

export const YOUTUBEProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
const[channelID,setChannelID]=useState("")
const[videoID,setVideoID]=useState("")

    useEffect(() => {
        fetchData();
    }, []);

    

    const fetchData = async () => {
        dispatch({ type: 'FETCH_START' });
        const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=us&section=Now';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a71cdd79bmsh3e967f178ea84b2p1a3560jsnf961af1551e7',
                'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: result });
        } catch (error) {
            console.error(error);
        }
    };

async function getVideoDetail(){
    console.log(videoID)
    dispatch({ type: 'FETCH_START' });
    const url = `https://youtube-v2.p.rapidapi.com/video/details?video_id=${videoID}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a71cdd79bmsh3e967f178ea84b2p1a3560jsnf961af1551e7',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    dispatch({ type: 'VIDEO', payload: result });

} catch (error) {
	console.error(error);
}
}
console.log(videoID)

const contextValue = {
...state,
videoID,
   setVideoID,
   getVideoDetail
};

    return (
        <YOUTUBEContext.Provider value={contextValue}>
            {children}
        </YOUTUBEContext.Provider>
    );
};

export default YOUTUBEContext;
