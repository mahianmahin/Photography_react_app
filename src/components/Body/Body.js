import logo from '../../img/second_img.png';
import style from './body.module.css';

const Body = () => {
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-sm-6 ${style.img_section} d-flex align-items-center`}>
                    <img src={logo} className="img-fluid" />
                </div>

                <div className={`col-sm-6 d-flex flex-column justify-content-center align-items-center ${style.second_section}`}>
                    <h1>About Us</h1>
                    <p className="my-5">
                        Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. 
                        It helps designers plan out where the content will sit</p>
                </div>
            </div>
        </div>
    )
};

export default Body;