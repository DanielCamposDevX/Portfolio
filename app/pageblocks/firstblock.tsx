import PageHeader from '@/app/components/Header';
import BgVideo from '@/app/components/bgVideo'
import Resume from '../components/resume';
import Image from 'next/image';
import Perfil from '@/app/assets/Perfil.jpeg'
import Icons from '@/app/components/icons'

export default function Firstblock() {
    return (
        <div className="w-full h-screen max-h-screen relative z-0 flex justify-center items-center">
            <BgVideo />
            <PageHeader />
            <div className='h-4/6 w-5/6 mt-20 flex z-10 border border-white border-solid bg-black bg-opacity-70 relative'>
                <div className='w-2/4 h-full'>
                    <Resume />
                </div>
                <div className='w-2/4 h-full flex justify-center items-center'>
                    <Image src={Perfil} alt='Perfil' className='h-5/6 w-auto cusShadow rounded-md' />
                </div>
                <Icons />
            </div>
        </div>
    );
}