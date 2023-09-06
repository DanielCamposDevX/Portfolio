'use client'
import VideoBg from '@/app/assets/BgVideo.mp4'

export default function BgVideo(){
    return(
        <video src={VideoBg} autoPlay muted loop className="absolute top-0 left-0 w-full h-screen object-cover z-0"/>
    )
}