import './styles/App.css';
import Navbar from './components/Navbar/Navbar'

// function App() {
//   return (
//     <div className="App">
//       <h1>Olá</h1>
//     </div>
//   );
// }


import React from "react"

class App extends React.Component {

  render() {
    return (
        <Navbar></Navbar>
    );
  }
}

export default App;
