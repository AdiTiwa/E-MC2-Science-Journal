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
                <div class="bg-maroon-200 p-10">
                    <h1 class="text-5xl font-serif text-white text-center">E = MC<sup>2</sup>: A High School Mathematical Science Journal</h1>            
                </div>
                <ImageCarousel sources={[{src: "img/homepage/chicago.jpg", alt: "chicago", caption: "One"}, 
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "Two"}, 
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "Three"}]} />

                <div class="p-7">
                    <h1 class="text-5xl font-serif text-center">Mission statement/Purpose</h1>
                </div>

                <div class="p-7">
                    <h1 class="text-5xl font-serif text-center">Section linking to different pages (read articles, issues, supporters)</h1>
                </div>

                <div class="p-7">
                    <h1 class="text-5xl font-serif text-center">Supporting Organizations</h1>
                </div>



                <div class="px-10 py-2">
                    <h1 class="text-2xl font-serif text-left">"The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science. 
                    He to whom this emotion is a stranger, who can no longer pause to wonder and stand rapt in awe, is as good as dead: his eyes are closed."</h1>
                    <h1 class="text-3xl font-serif text-right">-Albert Einstein</h1>
                    <h3 class="left"></h3>
                </div>




                {/* <script>
                    var links = [{page:'issues', text: 'View all issues of E = MC<sub>2</sub>'}, {page:'gallery', text: 'View all articles'}, {page:'gallery', text: 'View all articles'}, {page:'gallery', text: 'View all articles'}, {page:'gallery', text: 'View all articles'}];
                </script> */}

                <SiteFooter></SiteFooter>
            </body>
        </div>
    );
}