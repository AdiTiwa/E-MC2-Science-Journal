import NavBar from '../components/NavBar';

export default function About() {
    return (
        <div>
             <NavBar active = "about"/>
             <div class="bg-maroon-200 py-10">
                <h1 class="text-5xl font-serif text-white text-center">About</h1>            
            </div>
        </div>
    );
}