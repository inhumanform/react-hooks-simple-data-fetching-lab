// create your App component here
// First Import react, useState, and Use Effect

import React, { useState, useEffect} from "react";

// useState hook to create a piece of state named dogPic, initially set to null
  // setDogPic is a function that allows updating dogPic's value
function App() {
    const [dog, setDogPic] = useState("");
    
  
    // useEffect hook to perform side effects,fetching data from an API
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      // Parsing Json...
        .then((response) => response.json())
        .then((data) => {
          setDogPic(data.message);
        });
        // The empty dependency array means this effect runs once after the initial render only
    }, []);
   // Conditional rendering: if dogPic is null (meaning the fetch hasn't completed), show a loading message
    if (!dog) return <p>Loading...</p>;
  
    return <img src={dog} alt="A Random Dog" />;
  }
//   Export to add elsewhere
  export default App;