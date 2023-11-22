import Table from "./Table"
import Form from "./Form"
import React, { useState } from "react"

function LinkContainer(){ 

    const handleChange = (e) => {
        console.log(e.target.value)
    }
    
    const handleRemove = (index) => {
        console.log("Button Clicked")
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
      }
        
    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the Table!</p>
            <Table data={[{name:"Project Github",URL:"https://github.com/ShoislaNYC/WebDevProject4"}]} remove = {handleRemove}/>
            <h1>Add New</h1>
            <Form handleChange= {handleChange} handleSubmit = {handleSubmit} />
        </div>
    )
}
export default LinkContainer
