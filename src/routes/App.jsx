import { DarkThemeToggle } from 'flowbite-react';
import NavBar from '../components/NavBar';
import ImageCarousel from '../components/ImageCarousel';
import SiteFooter from '../components/SiteFooter';

export default function HomePage() {
    return (
        <div>
            <body>
                <NavBar active="home" />
                <DarkThemeToggle></DarkThemeToggle>
                <div class="bg-maroon-100 py-10">
                    <h1 class="text-5xl font-serif text-white text-center">E = MC<sup>2</sup>: A High School Mathematical Science Journal</h1>            
                </div>
                <ImageCarousel sources={[{src: "img/homepage/chicago.jpg", alt: "chicago", caption: "One"}, 
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "Two"}, 
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "Three"}]} />
                
                <SiteFooter></SiteFooter>
            </body>
        </div>
    );
}