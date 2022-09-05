import React from 'react'

import NiharikaBhattacharjee2021Disp from './2021/NiharikaBhattacharjee'
import SathvikNallamalli2021Disp from './2021/SathvikNallamalli'


export default function AllArticleGallery(props) {
    return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-20 py-3'>
        <NiharikaBhattacharjee2021Disp />
        <SathvikNallamalli2021Disp />
    </div>
    )
}