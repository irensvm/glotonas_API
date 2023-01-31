import React, { useState } from "react";

export default function Form() {
    const FORM_INITIAL_STATE = {restaurantName: "", restaurantLocation: ""}
    const [form, setForm] = useState(FORM_INITIAL_STATE);

    function updateFormField(event) {
        const formField = event.target.id;
        setForm({...form, [formField]:event.target.value});
    }

    function createRestaurant(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={createRestaurant}>
            <h3>Añade un restaurante:</h3>
            <div className="formElementContainer">
                <label htmlFor="restaurantName">Nombre </label>
                <input type="text" required id="restaurantName" onChange={updateFormField} placeholder="Pasen y vegan"></input>
            </div>
            <div className="formElementContainer">
                <label htmlFor="restaurantLocation" placeholder="Barcelona">Ubicación </label>
                <input type="text" required id="restaurantLocation" onChange={updateFormField} placeholder="Barcelona"></input>
            </div>
            <button type="submit">Guardar</button>
        </form>
    )
}