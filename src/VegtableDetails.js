import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useState, useEffect} from "react";
import {API} from "./global";

export function VegtableDetails(){
    const { id } = useParams();
    //console.log(id, vegList);
    //const veg = vegList[id];
    const [veg, setVeg]=useState({});
     
    useEffect(()=>{
        fetch(`${API}/vegtables/${id}`, {
            method: "GET",
        })
        .then((data) => data.json())
        .then((vegg)=> setVeg(vegg))
        .catch((err) => console.log(err));
    }, []);

    const history = useHistory();

    return(
     <div className="veg-list-container">
        <div className="vegtable-image-container">
            <img src={veg.image} className="vegtable-image"/>
        </div>
        <h2 className="vegtable-name">{veg.name}</h2>
        <div className="vegtable-about-product">
            <h4 className="vegtable-title">About the Product</h4>
            <p className="vegtable-paragraph">{veg.description}</p>
        </div>
        <hr className="horizontal-line"/>
        <div className="vegtable-benefits">
            <h4 className="vegtable-title">Benefits</h4>
            <p className="vegtable-paragraph">{veg.benefits}</p>
        </div>
        <hr className="horizontal-line"/>
        <div className="vegtable-storage-uses">
            <h4 className="vegtable-title">Storage and Uses</h4>
            <p className="vegtable-paragraph">{veg.storageUsage}</p>
        </div>
        <hr className="horizontal-line"/>
        <div className="vegtable-weight-policy">
            <h4 className="vegtable-title">Variable weight policy</h4>
            <img src="https://static.thenounproject.com/png/96048-200.png" alt="weight-icon" className="weight-image" />
            <p className="vegtable-paragraph">{veg.variableWeight}</p>
            
        </div>
        <Button variant="contained" onClick={()=> history.goBack()} startIcon={<ArrowBackIosNewIcon />}>
          Back
        </Button>

     </div>
    );
}