import './App.css';
import {useState} from "react";
import {VegtableList} from "./vegtableList";
import {Vegtablelist} from "./Vegtablelist.1";
import { AddVegtable } from './AddVegtable';
import { EditVegtable } from './EditVegtable';
import { Slideshow } from './Home';
import { VegtableDetails } from './VegtableDetails';
import {useHistory} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {  Switch, Route} from "react-router-dom";

export default function App() {
  const [vegList, setVegList] = useState(VegtableList);
  const history = useHistory();
  
  return (
    <div className="App">
        <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/vegtable")}>vegtable</Button>
          <Button color="inherit" onClick={() => history.push("/vegtable/add")}>Add Vegtable</Button>
        </Toolbar>
        </AppBar>

        <div className="route-container">
        <Switch>
          <Route exact path="/">
              <h1>Welcome to my Veggie Shop</h1>
              <Slideshow />
          </Route>
          <Route path="/vegtable/add">
               <AddVegtable vegList={vegList} setVegList={setVegList} />
          </Route>
          
          <Route path="/vegtable/edit/:id">
               <EditVegtable vegList={vegList} setVegList={setVegList} />
          </Route>
          <Route path="/vegtable/:id">
               <VegtableDetails vegList={vegList} />
          </Route>
          <Route path="/vegtable">
              <Vegtablelist vegList={vegList} setVegList={setVegList} />
          </Route>
          
        </Switch>
        </div>
    </div>
  );
}


