import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
//AVATARS IMPORTS
import avatar1 from "../img/avatars/avatar-1.png";
import avatar2 from "../img/avatars/avatar-2.png";
import avatar3 from "../img/avatars/avatar-3.png";
import avatar4 from "../img/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoplay={true}
        interval={3000}
        useKeyboardArrows={true}
        
        >
            <>
                <img src={avatar1} alt="Barbaros Ozturk 1" />
                <div className="myCarousel">
                <h3>Barbaros Ozturk 1</h3>
                <p>Sunt mollit excepteur sunt fugiat nulla laborum aliqua deserunt reprehenderit consequat irure laboris duis eiusmod.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="Barbaros Ozturk 2" />
                <div className="myCarousel">
                <h3>Barbaros Ozturk 2</h3>
                <p>Sunt mollit excepteur sunt fugiat nulla laborum aliqua deserunt reprehenderit consequat irure laboris duis eiusmod.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="Barbaros Ozturk 3" />
                <div className="myCarousel">
                <h3>Barbaros Ozturk 3</h3>
                <p>Sunt mollit excepteur sunt fugiat nulla laborum aliqua deserunt reprehenderit consequat irure laboris duis eiusmod.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="Barbaros Ozturk 4" />
                <div className="myCarousel">
                <h3>Barbaros Ozturk 4</h3>
                <p>Sunt mollit excepteur sunt fugiat nulla laborum aliqua deserunt reprehenderit consequat irure laboris duis eiusmod.</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
