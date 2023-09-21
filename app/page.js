import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='mx-auto my-[20vh] text-center'>
    <Image className='mx-auto rounded-full w-64 h-64 mt-10' src='/imgs/jonatas.jpg' alt='Jónatas' sizes='100vw' width={0} height={0}/>
    <div className='mt-3 font-semibold text-3xl'>Bem vindos ao meu repositório!</div>
    </div>
  )
}
