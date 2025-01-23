

function Mangoes (){
    return(
       <h2>The Mangoes Are To Sweet</h2>
    )
}

const Apples = ()=>{
    return(
       <h2>The Apples Are To Be Good</h2>
    )
}

let a = "Pine-Apples";
let b = "And Apples";

function Fruits() {
    return ( 
        <div><h2>FRUITS</h2>
            <Mangoes/>
            <Apples/>
            <h2>I Like {a} {b}.</h2>
        </div>
    )
}

export default Fruits;