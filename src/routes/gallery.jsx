import { Link } from "react-router-dom";
import ArticleDisplay from '../components/ArticleDisplay';
import NavBar from '../components/NavBar';

function Gallery() {
    return (
        <div>
            <div className="col-span-3 content-around">
                <NavBar />
                <div className='grid grid-cols-3 gap-1'>
                    <ArticleDisplay title="hi" image="logo512.png">Hi</ArticleDisplay>
                    <ArticleDisplay title="hi" image="logo512.png">Hi</ArticleDisplay>
                    <ArticleDisplay title="hi" image="logo512.png">Hi</ArticleDisplay>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
