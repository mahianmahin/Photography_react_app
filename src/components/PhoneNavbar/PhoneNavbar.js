import icon from '../../img/back.svg';
import style from './phoneNavbar.module.css';

const PhoneNavbar = () => {
    const toggleBackHandler = () => {
        document.getElementById("phone_navbar").style.left = "-80%";
    };

    return (
        <div className={`${style.main} d-flex flex-column align-items-center`} id="phone_navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service & Package</a>
            <a href="#">Gallery</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>

            <img src={icon} className={`${style.back_btn}`} onClick={toggleBackHandler} />
        </div>
    )
};

export default PhoneNavbar;