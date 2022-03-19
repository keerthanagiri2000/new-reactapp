import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {API} from "./global";
import {useFormik} from "formik";
import {addFormValidationSchema} from "./AddVegtable";
import * as yup from "yup";

export function EditVegtable(){
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

    //const [name, setName] = useState(veg.name);
    //const [image, setImage] = useState(veg.image);
    //const [weight, setWeight] = useState(veg.weight);
    //const [price, setPrice] = useState(veg.price);
    const history = useHistory();

    const formik = useFormik({initialValues: {
       name: veg.name,
       image: veg.image,
       weight: veg.weight,
       price: veg.price,
       description: veg.description,
       benefits: veg.benefits,
       storageUsage: veg.storageUsage,
       variableWeight: veg.variableWeight,
    },
       validationSchema: addFormValidationSchema,
       onSubmit:(updateVegtable) => {
          editVeg(updateVegtable);
         },
       });

    const editVeg=(updateVegtable)=>{
        

        fetch(`${API}/vegtables/${veg.id}`, {
            method: "PUT",
            body: JSON.stringify(updateVegtable),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(()=> history.push("/vegtables"));
    };

    return(
    <form className="vegtable-form-container" onSubmit={formik.handleSubmit}>
     <TextField 
      id="name"
      name="name" 
      label="Name" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.name}
      onBlur={formik.handleBlur}
      error={formik.touched.name && formik.errors.name}
      helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
    />

    <TextField 
      id="image"
      name="image" 
      label="Image" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.image}
      onBlur={formik.handleBlur}
      error={formik.touched.image && formik.errors.image}
      helperText={formik.touched.image && formik.errors.image ? formik.errors.image : ""}
    />

    <TextField 
      id="weight"
      name="weight" 
      label="Weight" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.weight}
      onBlur={formik.handleBlur}
      error={formik.touched.weight && formik.errors.weight}
      helperText={formik.touched.weight && formik.errors.weight ? formik.errors.weight : ""}
    />

    <TextField 
      id="price"
      name="price" 
      label="Price" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.price}
      onBlur={formik.handleBlur}
      error={formik.touched.price && formik.errors.price}
      helperText={formik.touched.price && formik.errors.price ? formik.errors.price : ""}
    />

<TextField 
      id="description"
      name="description" 
      label="Description" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.description}
      onBlur={formik.handleBlur}
      error={formik.touched.description && formik.errors.description}
      helperText={formik.touched.description && formik.errors.description ? formik.errors.description : ""}
    />

   <TextField 
      id="benefits"
      name="benefits" 
      label="Benefits" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.benefits}
      onBlur={formik.handleBlur}
      error={formik.touched.benefits && formik.errors.benefits}
      helperText={formik.touched.benefits && formik.errors.benefits ? formik.errors.benefits : ""}
    />

<TextField 
      id="storageUsage"
      name="storageUsage" 
      label="StorageUsage" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.storageUsage}
      onBlur={formik.handleBlur}
      error={formik.touched.storageUsage && formik.errors.storageUsage}
      helperText={formik.touched.storageUsage && formik.errors.storageUsage ? formik.errors.storageUsage : ""}
    />

   <TextField 
      id="variableWeight"
      name="variableWeight" 
      label="VariableWeight" 
      variant="standard" 
      onChange={formik.handleChange}
      value={formik.values.variableWeight}
      onBlur={formik.handleBlur}
      error={formik.touched.variableWeight && formik.errors.variableWeight}
      helperText={formik.touched.variableWeight && formik.errors.variableWeight ? formik.errors.variableWeight : ""}
    />

        <Button
        type="submit"
        variant="contained"
        color="success"
        >
         Save
        </Button>
     </form>
    );
}
