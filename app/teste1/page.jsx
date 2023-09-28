/* "USE CLIENT"*/
import React from "react"
import Image from "next/image"

const Teste1 = () => {

    return(
        <div className="my-7 mx-auto text-center font-semibold text-[20px]">
            <div>Olá</div>
            <Image className='mx-auto w-[60%] h-[50%] mt-10' src='/imgs/shrek.jpg' alt='Shrek' sizes='100vw' width={0} height={0}/>
            </div>
    )

}

export default Teste1