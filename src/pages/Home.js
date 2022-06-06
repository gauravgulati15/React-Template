import React, {useState, useEffect} from "react";
import SearchForm from "../components/SearchForm";
import Tiles from "../components/Tiles";
const axios = require('axios').default;

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
    const [value, setValue] = useState("");
    const [tiles, setTiles] = useState([]);

    const makeTilesArray = (data) => {
        let tilesArray = [];
        for (let i = 0; i < data.length; i++) {
            const item = {
                id: data[i].idDrink,
                title: data[i].strDrink,
                body: data[i].strInstructions,
                image: data[i].strDrinkThumb
            }
            tilesArray.push(item);
        }
        setTiles(tilesArray);
    }

    const updateValue = (e) => {
        setValue(e);
    }

    useEffect(() => {
        axios.get(`${url}${value}`)
            .then((res) =>{
                makeTilesArray(res.data.drinks);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [value]);

    return (
        <div>
            <SearchForm updateValue={updateValue} />
            <Tiles tiles={tiles} />
        </div>
    );
};

export default Home;