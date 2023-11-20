function Form(){
    return(
        <form action="">
                <label htmlFor="linkName">Link Name:</label>
                <br />
                <input type="text" id="linkName" name="linkName" value=""/>
                <br />
                <label htmlFor="url">URL</label>
                <br />
                <input type="text" id="url" name="url" value=""/>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
       
    )
}

export default Form