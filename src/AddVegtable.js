import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {API} from "./global";
import {useFormik} from "formik";
import * as yup from "yup";

export const addFormValidationSchema = yup.object({
  image: yup
  .string()
  .required("why not fill this image ")
  .min(4, "Need a longer poster"),

  name: yup
  .string()
  .required("why not fill this name "),
  
  weight: yup
  .string()
  .required("why not fill this weight")
  .min(2, "Need a longer"),

  price: yup
  .string()
  .required("why not fill this price")
  .min(2),

  description: yup
  .string()
  .required("Why not fill this description")
  .min(20),

  benefits: yup
  .string()
  .required("Why not fill this benefits")
  .min(20),

  storageUsage: yup
  .string()
  .required("Why not fill this storageUsage")
  .min(20),

  variableWeight: yup
  .string()
  .required("Why not fill this variableWeight")
  .min(20),
});


export function AddVegtable() {
  const history = useHistory();

  const formik=useFormik({
    initialValues: {
      name: "", 
      image: "", 
      weight: "",
      price: "",
      description: "",
      benefits: "",
      storageUsage: "",
      variableWeight: "",
      },

    validationSchema: addFormValidationSchema,
    onSubmit:(newVegtable) => {
      addvegtable(newVegtable);
      },
  });
  
  const addvegtable=(newVegtable)=>{
   
   fetch(`${API}/vegtables/`, {
      method: "POST",
      body: JSON.stringify(newVegtable),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=> history.push("/vegtables"));
  };

  return (
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
        variant="contained">
          Add Vegtable
      </Button>
    </form>
  );
}
