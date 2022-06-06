import React from "react";
import SingleTile from "./SingleTile";
import "../css/Tiles.css";

// const tiles = [
//     {
//         id: 1,
//         title: "cocktail 1",
//         body: "body 1",
//         image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         id: 2,
//         title: "cocktail 2",
//         body: "body 2",
//         image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         id: 3,
//         title: "cocktail 3",
//         body: "body 3",
//         image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     },  
//     {
//         id: 4,
//         title: "cocktail 4",
//         body: "body 4",
//         image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     },
//     {   
//         id: 5,
//         title: "cocktail 5",
//         body: "body 5",
//         image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         id: 6,
//         title: "cocktail 6",
//         body: "body 6",
//         image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     },
// ]

// display tiles
const Tiles = ({tiles}) => {
    return (
        <section className="section">
            <h2 className="section-title">Items</h2>
            <div className="cocktails-center">
                {tiles.map((item)=>{
                    return <SingleTile key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
};

export default Tiles;