import { useState } from "react"


const Form = (props)=>{
    // const [Lname, setLName] = useState('');
    // const [url, seturl] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const links = {Lname, url}
    //     console.log(links)
    // }
    return(
        <form onSubmit={props.handleSubmit}>
                <label htmlFor="linkName">Link Name:</label>
                <br />
                <input 
                    type="text" 
                    // value={data}
                    onChange={props.handleChange}
                />
                <br/>
                <label htmlFor="url">URL</label>
                <br />
                <input 
                    type="text" 
                    id="url" 
                    // value={url}
                    onChange={props.handleChange}
                    />
                <br />
                <input 
                    type="submit" 
                    value="Submit">
                </input>
            </form>
       
    )   
}

export default Form