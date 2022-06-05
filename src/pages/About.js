import React from "react";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <section className="section about-section">
        <h1 className="section-title">about us</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dolorem
            quae odit soluta pariatur. Perferendis mollitia tempore laboriosam
            pariatur velit quam, iste ducimus debitis a dicta, sed ea reprehenderit
            rerum numquam ipsam. Modi reprehenderit saepe exercitationem accusamus
            consequuntur, dolorem ab!
        </p>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
    </section>
  );
};

export default About;
