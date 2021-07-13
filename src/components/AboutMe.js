import React from "react";
import Bc from "../pp.jpg"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Bc} alt="Bc..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis dignissim molestie.
                        Sed iaculis orci vel tortor maximus sodales.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec consectetur ex ut enim rutrum sollicitudin.
                        Mauris vehicula sem id metus tincidunt, sit amet pellentesque metus ultricies.
                        Proin tristique, odio vel sagittis elementum, leo risus imperdiet enim, finibus blandit arcu lectus vitae arcu.
                        Etiam fringilla a arcu sit amet tempus. Cras tempor massa et cursus rutrum.Nulla facilisi.
                        In auctor ante nec tellus sollicitudin, ac dignissim massa rutrum.
                        Integer scelerisque lacinia lectus. Morbi eu blandit erat, vel interdum libero.
                        Integer non tortor vitae dui dapibus volutpat nec lobortis magna.
                        Sed quis mauris auctor, rhoncus lectus eu, ornare justo. Etiam eu quam enim.
                        Praesent iaculis ac tortor varius condimentum. In porta tellus et turpis eleifend, at mattis nulla iaculis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
  