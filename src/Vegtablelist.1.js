import { Vegtable } from './Vegtable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";

export function Vegtablelist({vegList, setVegList}) {
  const history = useHistory();
  return (
    <div className="vegtable-list">
      {vegList.map(({ name, image, weight, price }, index) => (

      <Vegtable 
      key={index} 
      image={image} 
      name={name} 
      weight={weight} 
      price={price}

      deleteBtn={
        <DeleteIcon 
        onClick={() => {
          console.log(index);
          const copyVegtableList=[...vegList];
          copyVegtableList.splice(index, 1)
          setVegList(copyVegtableList);
        }}
        style={{ fontSize: "18px", paddingRight: "5px" }} />
       }

       editBtn={
        <EditIcon 
        onClick={() => history.push(`/vegtable/edit/${index}`)}
        style={{ fontSize: "18px", paddingRight: "5px" }} />
       }
       id={index}
       />
      
     
      ))}
    </div>
  );
}
