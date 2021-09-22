import style from './navbar.module.css';

const NavbarComponant = () => {
    return (
        <div className={`${style.main} d-flex flex-row-reverse`}>
            <div className={`${style.links} mt-3`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services & Package</a>
                <a href="#">Gallery</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
};

export default NavbarComponant;