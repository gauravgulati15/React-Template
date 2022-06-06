import React, {useState, useRef, useEffect} from "react";
import "../css/SearchForm.css";


const SearchForm = ({ updateValue }) => {

    const searchTerm = useRef("");
    // const [searchTerm, setSearchTerm] = useState("");

    const changeSearchTerm = (e) => {
        // setSearchTerm(e.target.value);
        updateValue(e.target.value);
    };

    useEffect(() => {
        searchTerm.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Searching...");
        // updateValue(e.target.value);
        // searchTerm.current.value = "";
    };

    return (
        <section className="section search">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="form-control">
                <label htmlFor="name">search your favourite cocktail</label>
                <input
                    type="text"
                    id="name"
                    ref={searchTerm}
                    onChange={changeSearchTerm}
                />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;