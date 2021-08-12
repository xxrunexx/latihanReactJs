// line 2 dan 3 adalah default App.js
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: "Laskar Pelangi", pengarang: "Creator 1", harga: 90000, stok: 3},
    { _id: 2, judul: "Ayat-Ayat Cinta", pengarang: "Creator 2", harga: 50000, stok: 9},
  ]);

  function storeData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil ditambahkan!");
  }
  
  function updateData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil diperbarui!");
  }

  function deleteData(book) {
    console.log(book);
    alert("Data berhasil dihapus!");
  }

  return(
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books}/>
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku 
            bookList= {books} store= {storeData} 
            update= {updateData} remove= {deleteData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Backup jangan dihapus karena default
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

