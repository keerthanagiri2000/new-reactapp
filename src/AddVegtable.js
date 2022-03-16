import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {API} from "./global";

export function AddVegtable({ vegList, setVegList }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [weight, setWeight] = useState("")
  const [price, setPrice] = useState("")
  const history = useHistory();

  return (
    <div className="vegtable-form-container">
      <TextField id="standard-basic" label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
      <TextField id="standard-basic" label="Image" variant="standard" onChange={(event) => setImage(event.target.value)} />
      <TextField id="standard-basic" label="Weight" variant="standard" onChange={(event) => setWeight(event.target.value)} />
      <TextField id="standard-basic" label="Price" variant="standard" onChange={(event) => setPrice(event.target.value)} />


      <Button onClick={() => {
        const newVegtable = {
          name: name,
          image: image,
          weight: weight,
          price: price
        };

        fetch(`${API}/vegtables/`, {
          method: "POST",
          body: JSON.stringify(newVegtable),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(()=> history.push("/vegtables"));
        //setVegList([...vegList, newVegtable]);
        
      }}
        variant="contained">Add Vegtable</Button>
    </div>

  );
}
