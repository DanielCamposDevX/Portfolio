import AboutText from "../components/aboutText";
import Image from "next/image";
import aboutpic from "@/app/assets/aboutpic.png"



export default function SecondBlock() {


    return (
        <div className="bg-slate-900 w-full min-h-screen text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">Sobre Mim</h1>
            <AboutText />
            <Image src={aboutpic} alt='aboutpic' className="h-2/6"/>
        </div>
    )

}