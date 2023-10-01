import React from 'react'
import img from '../../assets/faq/question.png'
import HeroSec from './landing'
function Faq({ faqs }) {

    const renderedFaqs = faqs.map((faq, index) => {
        return (

             <div key={index} className='border-b py-8 md:py-24 px-4 flex space-x-8 lg:space-x-0' >
                <div className='w-full h-full' >
                    <img className='pt-4 w-30 h-24 transform hover:scale-105  transition-transform duration-200 ' src={img} alt="" />
                </div>
                <div className='space-y-6' >
                    <h1 className='text-xl' >{faq.header}</h1>
                    <p>{faq.content}</p>
                </div>

            </div>


        )
    })

    return (
        <div >
            <HeroSec ></HeroSec>
            <div className='mb-16' >
                <div className='mt-24 z-0 text-[#848484]  grid grid-cols-1 lg:grid-cols-2 max-w-[1200px]  mx-auto px-12 md:px-32  ' >
                    {renderedFaqs}
                </div>
                <div className='relative -mt-2 z-50 bg-[#0c0a0a] w-full  h-8' ></div>
            </div>
        </div>
    )
}

export default Faq;