import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

let nama = "Titik Andini";
function Welcome(props){
   return <h1>selamat datang {props.nama}</h1> 
}
function App(){
    if (nama == "") {
        return <button>login</button>
    }else{
        return <Welcome nama={nama}/>
    }
}
root.render(<App/>);