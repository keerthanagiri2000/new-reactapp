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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  const [vegList, setVegList] = useState(VegtableList);
  const history = useHistory();
  const [mode, setMode]=useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <Paper style={{borderRadius: "0px", minHeight: "100vh"}} elevation={0} >
    <div className="App">
        <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/vegtable")}>vegtable</Button>
          <Button color="inherit" onClick={() => history.push("/vegtable/add")}>Add Vegtable</Button>
          <Button
          color="inherit"
          style={{marginLeft:"auto"}} 
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "dark" : "light"}Mode</Button>
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
    </Paper>
    </ThemeProvider>
  );
}


