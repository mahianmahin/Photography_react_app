import btn from '../../img/btn.png';
import style from './navbar.module.css';

const NavbarComponant = () => {
    const toggleClickHandler = () => {
        document.getElementById("phone_navbar").style.left = "0%";
    };

    return (
        <div className={`${style.main} d-flex flex-row-reverse`}>
            <div className={`${style.links} mt-3 w-100`}>
                <div className={`${style.toggle_btn}`}>
                    <img src={btn} onClick={toggleClickHandler} />
                </div>

                <div className={`${style.nav_links}`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services & Package</a>
                    <a href="#">Gallery</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
};

export default NavbarComponant;