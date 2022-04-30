import Header from "../header/Header"
import Post from "./Post/Post"

import "./Posts.css"

import { useState,useEffect } from 'react'
import axios from "axios";


function Posts() {

    const MUSIC_URL ="http://localhost:3001/music"

    const [musicFiles,setMusicFiles] = useState(null)
    const [err, setErr] = useState("loading...")

    useEffect(()=>{
        const getMusic = async () =>{
            try {
                const res = await axios.get(MUSIC_URL)
                console.log(res.data)
                setMusicFiles(res.data.files)
                setErr(null)
            }catch (err){
                setErr(err.message)
            }
        }
        getMusic()
    }, [])


    return (
        <div className="Posts">
            <Header/>
            <div className="posts_container">
                {err ? <div className="err">{err}</div> :
                    musicFiles.map((musicFile)=>{
                        console.log(MUSIC_URL)
                        return(<Post file={musicFile} url={MUSIC_URL}/>)
                    })}
            </div>
        </div>
    )
}

export default Posts