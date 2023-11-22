import Table from "./Table"
import Form from "./Form"
import React, { useState } from "react"

function LinkContainer(){ 

    const handleChange = (e) => {
        console.log(e.target.value)
    }
    
    const handleRemove = (index) => {
        /*
                TODO - Create logic for setting the state to filter array and remove favLink at index
            */
    
      }
    
    const handleSubmit = () => {
        /*
                TODO - Create logic to set state and add new favLink to favLinks array in state
            */
        // console.log(details);
      }
        
    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the Table!</p>
            <Table />
            <h1>Add New</h1>
            <Form handleChange= {handleChange} />
        </div>
    )
}
export default LinkContainer
