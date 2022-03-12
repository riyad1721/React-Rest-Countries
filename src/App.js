
import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
    </div>
  );
}


// function Countries() {
//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Traveling around the world</h1>
//       <h3>Countries Available are : {countries.length}</h3>
//     </div>
//   );
// }
export default App;
