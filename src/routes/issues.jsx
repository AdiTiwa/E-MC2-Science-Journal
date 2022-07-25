import NavBar from '../components/NavBar'
import IssueCover from '../components/Issue'
import { useParams } from 'react-router-dom'
import Gallery2021 from './issues/2021'
import SiteFooter from '../components/SiteFooter'

const issueYears = { 2021: <Gallery2021 /> }

export default function Issues() {
    const { year } = useParams()

    if (!year) {
        return (
            <div>
                <NavBar active="issues" />
                <div class="bg-maroon-200 py-10">
                    <h1 class="text-5xl font-serif text-white text-center">Issues</h1>            
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 px-10 md:px-15 lg:px-20">
                    <IssueCover image="logo512.png" year="2021" />
                    <IssueCover image="logo512.png" year="2020" />
                    <IssueCover image="logo512.png" year="2019" />
                    <IssueCover image="logo512.png" year="2018" />
                    <IssueCover image="logo512.png" year="2017" />
                    <IssueCover image="logo512.png" year="2016" />
                    <IssueCover image="logo512.png" year="2015" />
                    <IssueCover image="logo512.png" year="2014" />
                </div>
                <SiteFooter />
            </div>
        )
    } else {
        return (issueYears[year])
    }
}