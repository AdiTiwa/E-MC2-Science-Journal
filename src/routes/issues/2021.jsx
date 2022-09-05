import { useParams } from 'react-router-dom'

import NavBar from '../../components/NavBar'

import TestingArticle2021 from "./2021/testing"
import NiharikaBhattacharjee2021 from './2021/bhattacharjee'
import SathvikNallamalli2021 from './2021/nallamali_s'

import NiharikaBhattacharjee2021Disp from '../../articlecards/2021/NiharikaBhattacharjee'
import SathvikNallamalli2021Disp from '../../articlecards/2021/SathvikNallamalli'

const issueArticles = {"testing": <TestingArticle2021 />, "niharika_bhattacharjee": <NiharikaBhattacharjee2021 />, "sathvik_nallamalli": <SathvikNallamalli2021 />  }

export default function Gallery2021() {
    const { articleId } = useParams()

    if (!articleId) {
        return (
            <div>
                <NavBar active="issues" />
                <div class="bg-white py-10">
                    <h1 class="text-5xl font-serif text-maroon-200 text-center">E = MC<sup>2</sup>: 2021 Edition</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-20 py-3">
                    <NiharikaBhattacharjee2021Disp />
                    <SathvikNallamalli2021Disp />
                </div>
            </div>
        )
    } else {
        return (<div>
            <NavBar active="issues" />
            {issueArticles[articleId]}
        </div>)
    }

}