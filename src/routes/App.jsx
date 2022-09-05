import NavBar from '../components/NavBar';
import ImageCarousel from '../components/ImageCarousel';
import SiteFooter from '../components/SiteFooter';
import { Card } from 'flowbite-react'

export default function HomePage() {
    return (
        <div>
            <body>
                <NavBar active="home" />
                <div class="bg-maroon-200 p-10">
                    <h1 class="text-5xl font-serif text-white text-center">E = MC<sup>2</sup>: A High School Mathematical Science Journal</h1>            
                </div>
                <ImageCarousel sources={[
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "One"}, 
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "Two"}, 
                    {src: "img/homepage/chicago.jpg", alt: "chicago", caption: "Three"}]}
                />

                <div class="p-7">
                    <h1 class="text-5xl font-serif text-center">Mission statement/Purpose</h1>
                </div>
                
                <Card>
                    <p class="text-3xl">Read the <strong>SEMI-FINALIST</strong> articles</p>
                    <p class="py-4 text-lg">funky text to tell the reader that we are cool</p>

                    <div class="grid grid-cols-2">
                        <div>
                            <a href="/issues/2021" class="bg-maroon-200 hover:bg-maroon-100 text-white p-5 rounded text-xl">Read the latest issue</a>
                        </div>
                        <div>
                            <a href="/gallery" class="bg-maroon-200 hover:bg-maroon-100 text-white p-5 rounded text-xl float-right">Open the Gallery</a>
                        </div>
                    </div>
                </Card>
                <div class="p-7 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <Card>
                        <p class="text-3xl">Read resources on research and Regeneron</p>
                        <p class="text-lg">More explanatory text</p>
                    </Card>
                    <Card>
                        <p class="text-3xl">Contact the journal</p>
                        <div>
                            <p>Socials area</p>
                        </div>
                    </Card>
                    <Card>
                        <p class="text-3xl">Support the journal</p>
                        <p class='text-xl'>Explanatory text</p>
                    </Card>
                </div>

                <div class="p-7">
                    <h1 class="text-5xl font-serif text-center">Supporting Organizations</h1>
                </div>


                <div class="px-10 py-2">
                    <h1 class="text-2xl font-serif text-left">"The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science. 
                    He to whom this emotion is a stranger, who can no longer pause to wonder and stand rapt in awe, is as good as dead: his eyes are closed."</h1>
                    <h1 class="text-3xl font-serif text-right">-Albert Einstein</h1>
                </div>




                {/* <script>
                    var links = [{page:'issues', text: 'View all issues of E = MC<sub>2</sub>'}, {page:'gallery', text: 'View all articles'}, {page:'gallery', text: 'View all articles'}, {page:'gallery', text: 'View all articles'}, {page:'gallery', text: 'View all articles'}];
                </script> */}

                <SiteFooter></SiteFooter>
            </body>
        </div>
    );
}