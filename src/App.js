import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        // console.log(data.map(country=>country.name))
      })
  }, [])

  const handleaddCountry = (country) => {
    const newCart=[...cart,country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleaddCountry={handleaddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
