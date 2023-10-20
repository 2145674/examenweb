import React, { Component } from 'react';


function Enfant (props) {

    return (
        <div>
            <form>
                <button onClick={props.handleAddTwo}>+2 Enfant</button>
                <label>{props.label1}</label>
                <input type="number" value={props.value} />

                <label>{props.label2}</label>
                <input type="number" value={props.value2} />

                <label>{props.label3}</label>
                <input type="number" name="resultat" value={props.value3} />
            </form>

        </div>
    );

}

export default Enfant;