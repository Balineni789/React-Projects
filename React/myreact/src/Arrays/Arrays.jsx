
const Sampleary = ["BHS",34,{userName:"Balineni"}];

const players = [
  {
    name : "Harsha",
    sport : "Cricket",
    place : "Ongole",
    game : "Gta",
    age : 24,
    id : "harsha_harsh789"
  }
]

const Array = ()=>{
  return(
    <div>

      <h2>{Sampleary[0]}</h2>
      
      <h2>{Sampleary.map((i)=>{
        return(
          <div>
            <h2>{i.userName}</h2>
          </div>
        )
      })}</h2>
 
      {players.map((item)=>{
        return(
          <div>
            <h2>My Name Is {item.name}</h2>
            <h2>My Favourite Sport is {item.sport}</h2>
            <h2>I am Living in {item.place}</h2>
            <h2>I Play {item.game} EveryDay</h2>
            <h2>I am '{item.age}' old</h2>
            <h2>My Insta Id - {item.id}</h2>
          </div>
        )
      })}
    </div>
  )
}


export default Array;