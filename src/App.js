import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import { Component } from 'react';
import Menu from './component/menuComponent'

class App extends Component {

  render(){
    return(
      <div className='app'>
        <Navbar dark color = "primary">
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu />
      </div>
    );
  }
}

export default App;
