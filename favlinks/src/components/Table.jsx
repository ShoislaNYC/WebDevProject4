import Form from "./Form"

function TableHeader(){
    //Renders the head of our table
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}
function TableBody(){
    //Renders Data for our table
    return(
       <tbody>
        
       </tbody>
    )
}

function Table(){
    return(
        <table>
           <TableHeader />
           <TableBody />
        </table>
    )
}

export default Table