import NavBar from '../components/NavBar';
import SiteFooter from '../components/SiteFooter';

import AllArticleGallery from '../articlecards/AllArticles';

function Gallery() {
    return (
        <div>
            <div className="col-span-3 content-around">
                <NavBar active="gallery" />
                <div class="bg-maroon-200 py-10">
                    <h1 class="text-5xl font-serif text-white text-center">Gallery</h1>            
                </div>
                <AllArticleGallery />
            </div>
            <SiteFooter />
        </div>
    );
}

export default Gallery;
