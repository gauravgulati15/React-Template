import React, {useState, useEffect} from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "../css/SingleItem.css"
const axios = require('axios').default;

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleItem = () => {
    const { id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`${url}${id}`)
            .then((res) => {
                const data = res.data.drinks[0];
                setItem({
                    id: data.idDrink,
                    title: data.strDrink,
                    body: data.strInstructions,
                    image: data.strDrinkThumb
                });
            })
            .catch((err) => {
                console.log(err);
                
            });
    }, [id]);
    // console.log(item===unde);
    if (item===null) {
        return <h2 className="section-title">no cocktail to display</h2>;
    }

    return (
        <section className="section single-item-section">
            <Link to="/" className="btn loc btn-primary">
                Back Home
            </Link>
            <h2 className="section-title">{item.title}</h2>
            <div className="drink">
                <img src={item.image} alt={item.title} />
                    <div className="drink-info">
                    <p>
                        <span className="drink-data">name :</span>
                        {item.title}
                    </p>
                    <p>
                        <span className="drink-data">Body :</span>
                        {item.body}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleItem;