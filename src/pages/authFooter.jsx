import React from 'react'
import steam from '../asset/steam.svg'
import line from '../asset/line.svg'
import whatsapp from '../asset/whatsapp.svg'
import waveIcon from '../asset/waveIcon.svg'
import metamask from '../asset/metamask.svg'
import telegram from '../asset/telegram.svg'
import google from '../asset/google.svg'


const AuthFooter = () => {

    const images = [google, telegram, metamask, waveIcon, whatsapp, line, steam];
    return (
        <div className='section-padding'>
            <div class="flex items-center mb-6">
                <div class="flex-grow border-t border-borderStrokeClr w-full ml-6"></div>
                <span class="px-4 text-sm text-nowrap text-iconClr">Log in directly with</span>
                <div class="flex-grow border-t border-borderStrokeClr w-full mr-6"></div>
            </div>
            <div className='grid grid-cols-7 gap-2'>
                {images.map((image, index) => (
                    <img
                        key={index} // Use a unique key for each image
                        src={image}
                        alt={`Icon ${index + 1}`} // Provide a meaningful alt attribute
                        className='p-3 border rounded-lg border-borderStrokeClr'
                    />
                ))}
            </div>
        </div>
    )
}

export default AuthFooter
