import NavBar from '../components/NavBar';

export default function HomePage() {
    return (
        <div>
            <NavBar active="home" />
            <br></br>
            <h1 class="text-4xl text-center">E = MC<sup>2</sup>: A High School Mathematical Science Journal</h1>
            <br></br>
            <img class="w-4/5 mx-auto h-200" src="img/chicago.jpg" alt='Chicago Skyline'></img>
            <br></br>
            <br></br>
        </div>
    );
}