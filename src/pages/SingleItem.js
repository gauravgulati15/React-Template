import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleItem = () => {
    const { id } = useParams();
    return (
        <section className="section single-item-section">
        <h1 className="section-title">Single Item - {id}</h1>
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

export default SingleItem;