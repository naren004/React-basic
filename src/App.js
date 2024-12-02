import "./App.css"


function changename(){
  const names=["earn","grow","go"];
  const ind = Math.floor(Math.random()*3);
  // console.log(ind);
  return names[ind]
  // return ind
}

function App(){
  const name="HELLO USER";
  return(
    <div>
    <p>{name}</p>
    <p> "earn","grow","go" will change </p>
    <h1>lets {changename()}</h1>
    </div>
  );
}
export default App;