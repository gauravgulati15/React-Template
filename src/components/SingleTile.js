import React from "react";
import {Link} from "react-router-dom";
import "../css/SingleTile.css";

const SingleTile = ({ id, title, body, image }) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={image} alt="img" />
            </div>
            <div className="cocktail-footer">
                <h3>{title}</h3>
                <h4>{body}</h4>
                <Link to={`/item/${id}`} className="btn btn-primary btn-details">
                    Details
                </Link>
            </div>
        </article>
    );
};

export default SingleTile;