import { Vegtable } from './Vegtable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useEffect, useState} from 'react';

export function Vegtablelist() {
  const history = useHistory();
  const [vegList, setVegList] = useState([]);

  const getVegtable=()=>{
    fetch(`${API}/vegtables`, {
      method: "GET",
    })
    .then((data) => data.json())
    .then((vegs) => setVegList(vegs));
  }

  useEffect(()=> getVegtable(), []);

  const deleteVegtable=(id)=>{
    fetch(`${API}/vegtables/${id}`, {
      method: "DELETE",
    }).then(()=>getVegtable());
  };

  return (
    <div className="vegtable-list">
      {vegList.map(({ name, image, weight, price, id}, index) => (

      <Vegtable 
      key={index} 
      image={image} 
      name={name} 
      weight={weight} 
      price={price}

      deleteBtn={
        <DeleteIcon 
        onClick={() => deleteVegtable(id)
         // console.log(index);
         // const copyVegtableList=[...vegList];
         // copyVegtableList.splice(index, 1)
         // setVegList(copyVegtableList);
        }
     
        style={{ fontSize: "18px", paddingRight: "5px" }} />
       }

       editBtn={
        <EditIcon 
        onClick={() => history.push(`/vegtables/edit/${id}`)}
        style={{ fontSize: "18px", paddingRight: "5px" }} />
       }
       id={id}
       />
      
     
      ))}
    </div>
  );
}
