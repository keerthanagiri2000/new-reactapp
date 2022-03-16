import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {API} from "./global";

export function EditVegtable({veglist, setVeglist}){
    const { id } = useParams();
    //const veg = vegList[id];
    //console.log(veg);
    const [veg, setVeg]=useState (null);
    
    useEffect(()=> {
        fetch(`${API}/vegtables/${id}`, {
            method: "GET",
        })
        .then((data) => data.json())
        .then((vegg)=> setVeg(vegg))
        .catch((err) => console.log(err));
    }, []);

    return(
       <div>
           { veg ? <EditVegtableForm veg={veg} /> : <h2>Loading...</h2>}
       </div>
    );
}

function EditVegtableForm({veg}){

    const [name, setName] = useState(veg.name);
    const [image, setImage] = useState(veg.image);
    const [weight, setWeight] = useState(veg.weight);
    const [price, setPrice] = useState(veg.price);
    const history = useHistory();

    const editVeg=()=>{
        const updateVegtable={
            name: name,
            image: image,
            weight: weight,
            price: price
        };

        fetch(`${API}/vegtables/${veg.id}`, {
            method: "PUT",
            body: JSON.stringify(updateVegtable),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(()=> history.push("/vegtables"));
    }

    return(
        <div className="vegtable-form-container">
        <TextField id="standard-basic" value={name}  label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
        <TextField id="standard-basic" value={image} label="Image" variant="standard" onChange={(event) => setImage(event.target.value)} />
        <TextField id="standard-basic" value={weight} label="Weight" variant="standard" onChange={(event) => setWeight(event.target.value)} />
        <TextField id="standard-basic" value={price} label="Price" variant="standard" onChange={(event) => setPrice(event.target.value)} />

        <Button
        onClick={() =>editVeg()}
            //const copyVegtableList = [...vegList];
            //copyVegtableList[id] = updateVegtable;
            //setVegList (copyVegtableList);
        variant="contained"
        color="success"
        >
         Save
        </Button>
     </div>
    );
}
