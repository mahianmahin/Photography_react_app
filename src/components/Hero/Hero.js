import style from './hero.module.css';

const Hero = () => {
    return (
        <div className={`${style.main}`}>
            <h1 className="my-3">A picture is worth a thousand words</h1>
            <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. 
                Our pride is in offering the best shoots as we help you tell your story in photos.</p>
            <button>View Gallery</button>
        </div>
    )
};

export default Hero;