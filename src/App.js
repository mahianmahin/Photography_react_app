import style from './App.module.css';
import Body from './components/Body/Body';
import Hero from './components/Hero/Hero';
import NavbarComponant from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className={`container-fluid ${style.main_div}`}>
            <NavbarComponant />
            <div className={`d-flex justify-content-center align-items-center ${style.hero_section}`}>
                <Hero />
            </div>
            <Body />
        </div>
    )
};

export default App;