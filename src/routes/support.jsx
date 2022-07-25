import NavBar from '../components/NavBar';
import SiteFooter from '../components/SiteFooter';

export default function Support() {
    return (
        <div>
            <NavBar active="support"/>
            <div class="bg-maroon-200 py-10">
                <h1 class="text-5xl font-serif text-white text-center">Support E = MC<sup>2</sup></h1>
            </div>
            <SiteFooter className="inset-x-0 bottom-0"/>
        </div>
    );
}