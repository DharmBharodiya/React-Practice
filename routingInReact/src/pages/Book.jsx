import { useOutletContext, useParams } from "react-router-dom";

function Book(){
    const { id } = useParams()
    const obj = useOutletContext()
    return(
        <>
            <h1>Book {id}</h1>
            <p>{obj["hello"]}</p>
            <p>{obj["dharm"]}</p>
        </>
    )
}

export default Book;