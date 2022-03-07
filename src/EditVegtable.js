import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function EditVegtable({vegList, setVegList}){
    const { id } = useParams();
    const veg = vegList[id];
    console.log(veg);

    const [name, setName] = useState(veg.name);
    const [image, setImage] = useState(veg.image);
    const [weight, setWeight] = useState(veg.weight);
    const [price, setPrice] = useState(veg.price);
    const history = useHistory();
    return(
        <div className="vegtable-form-container">
           <TextField id="standard-basic" value={name}  label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
           <TextField id="standard-basic" value={image} label="Image" variant="standard" onChange={(event) => setImage(event.target.value)} />
           <TextField id="standard-basic" value={weight} label="Weight" variant="standard" onChange={(event) => setWeight(event.target.value)} />
           <TextField id="standard-basic" value={price} label="Price" variant="standard" onChange={(event) => setPrice(event.target.value)} />

           <Button
           onClick={() => {
               const updateVegtable = {
                   name: name,
                   image: image,
                   weight: weight,
                   price: price
               };

               const copyVegtableList = [...vegList];
               copyVegtableList[id] = updateVegtable;
               setVegList (copyVegtableList);
               history.push("/vegtable");
            }}
            variant="contained"
            color="success"
            >
            Save
            </Button>
        </div>
    );
}