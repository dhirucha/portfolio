import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
        <a href="#top">
                <h1 className='text-4xl font-semibold cursor-pointer mr-14 mb-2'>Dhiru.</h1>
            </a>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                dheerajubecha@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>©️ 2025 Dheeraj Chaubey. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/dhirucha">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/dheeraj-chaubey2312/">LinkedIn</a></li>
                <li><a target='_blank' href="https://x.com/iamdheeraj_on_x">X(Twitter)</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer