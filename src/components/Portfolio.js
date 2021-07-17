import React from "react";
import vetlife from "../img/vetlife.jpg";
import romantika from "../img/romantika.jpg";
import haktan from "../img/haktan.jpg";
import sar from "../img/sar.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //Vetlife
    const openPopupboxVetlife = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={vetlife} alt="veterinary clinic project..." />
            <p>Velit sit incididunt id anim amet reprehenderit consequat cillum aute exercitation. 
                Commodo aliqua consequat commodo occaecat.
            </p>
            <b>Demo:</b><a className="hyper-link" onClick={() => window.open("http://vetlifearnavutkoy.com/")}>http://vetlifearnavutkoy.com/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Veterinary clinic project. "
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    //Romantika
    const openPopupboxRomantika = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={romantika} alt="wedding hall project..." />
            <p>Velit sit incididunt id anim amet reprehenderit consequat cillum aute exercitation. 
                Commodo aliqua consequat commodo occaecat.
            </p>
            <b>Demo:</b><a className="hyper-link" onClick={() => window.open("http://www.romantikagarden.com/")}>http://www.romantikagarden.com/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigRomantika = {
        titleBar: {
            enable: true,
            text: "Wedding hall project. "
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    //Haktan
    const openPopupboxHaktan = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={haktan} alt="florist project..." />
            <p>Velit sit incididunt id anim amet reprehenderit consequat cillum aute exercitation. 
                Commodo aliqua consequat commodo occaecat.
            </p>
            <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://haktancicek.com/")}>https://haktancicek.com/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigHaktan = {
        titleBar: {
            enable: true,
            text: "Florist project. "
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    //Sar
    const openPopupboxSar = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={sar} alt="production project..." />
            <p>Velit sit incididunt id anim amet reprehenderit consequat cillum aute exercitation. 
                Commodo aliqua consequat commodo occaecat. 
            </p>
            <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://sarproduksiyon.com/")}>https://sarproduksiyon.com/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigSar = {
        titleBar: {
            enable: true,
            text: "Production project. "
        },
        fadeIn: true,
        fadeInSpeed: 500

    }


    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxVetlife}>
                        <img className="portfolio-image" src={vetlife} alt="veterinary clinic project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxRomantika}>
                        <img className="portfolio-image" src={romantika} alt="wedding hall project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxHaktan}>
                        <img className="portfolio-image" src={haktan} alt="florist project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSar}>
                        <img className="portfolio-image" src={sar} alt="production project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigRomantika}/>
            <PopupboxContainer {...popupboxConfigHaktan}/>
            <PopupboxContainer {...popupboxConfigSar}/>
        </div>

    )
}

export default Portfolio
