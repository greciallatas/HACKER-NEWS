import React from 'react';
import '../App.css';

const SelectNews = () => {
    return (
        <>
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Select your news</option>
                <option value="angular">Angular</option>
                <option value="react">React</option>
                <option value="vuejs">Vuejs</option>
            </select>
        </>
    )
}

export default SelectNews;
