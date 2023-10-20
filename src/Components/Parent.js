import React, { Component } from 'react';
import Enfant from './Enfant';


class Parent extends Component {

    constructor(props){
        super(props);
        this.state = {
        PnombreEnfant: 0,
        PnombreParent: 0,
        resultatP: 0,
        EnombreEnfant: 0,
        EnombreParent: 0,
        resultatE: 0
    };
}
    

    handleAddOne = () => {
        this.setState((state) => ({
            PnombreParent: Number(state.PnombreParent) + 1,
            EnombreParent: Number(state.EnombreParent) + 1,
            resultatE: Number(state.EnombreParent) + Number(state.EnombreEnfant),
            resultatP : Number(state.PnombreEnfant) + Number(state.PnombreParent)          
        }));
    }
    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleAddTwo = () => {
        this.setState((state) => ({
            PnombreEnfant: Number(state.PnombreEnfant) + 2,
            EnombreEnfant: Number(state.EnombreEnfant) + 2,
            resultatE: Number(state.EnombreParent) + Number(state.EnombreEnfant),
            resultatP : Number(state.PnombreEnfant) + Number(state.PnombreParent)
        }));
    }

    render() {
        return (
            <div>
                <form>
                    <button onClick={this.handleAddOne}>+1 Parent</button>
                    <label>Parent somme Parent : </label>
                    <input type="number" name="PnombreParent" onChange={this.handleForm} value={this.state.PnombreParent}/>

                    <label>Parent somme Enfant : </label>
                    <input type="number" name="PnombreEnfant" onChange={this.handleForm} value={this.state.PnombreEnfant } />
                    
                    <label>Parent somme Total : </label>
                    <input type="number" name="resultat" value={this.state.resultatP}/>
                </form>
                <Enfant handleAddTwo={this.handleAddTwo} label1="Enfant somme Parent :" value={this.state.EnombreParent}
                    label2="Enfant somme Enfant :" value2={this.state.EnombreEnfant}
                    label3="Enfant somme Total :" value3={this.state.resultatE}></Enfant>
            </div>
        );
    }
}

export default Parent;