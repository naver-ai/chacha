import Image from 'next/image'

export const Mockup = () => {
    return <div className="relative block w-[280px] h-[550px] shadow-xl shadow-slate-200 bg-[#f8f8f8] border-white mt-5 border-[12px] rounded-[2rem] overflow-hidden">
        <Image className='w-full animate-screen-scroll' src={require('../../public/images/chacha-screen.jpg')} width={800} height={1171} alt="chacha-screen"/>       
    </div>
}