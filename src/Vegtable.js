import { useState } from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from 'react-router-dom';


export function Vegtable({ name, image, weight, price, deleteBtn, id, editBtn}) {
  const [like, setLike] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const history=useHistory();
  return (

    <div>
      <Card className="vegtable-container">

      <div className="dot-icon">
          <IconButton onClick={() => setIsOpen(!isOpen)} aria-label="delete" style={{ marginLeft: "290px" }}>
            <MoreVertIcon style={{ color: "lightgray" }} />
          </IconButton>

          {isOpen && (
            <div className="dropdown-list">
              <div className="list-items">{editBtn} Edit</div>
              <hr style={{ opacity: "0.3", margin: "5px" }} />
              <div className="list-items">{deleteBtn} Delete </div>
              
            </div>
          )}

        </div>

        <img src={image} alt="veg-image" className='vegtable-img' />
        <CardContent>
        <div className="vegtable-name-info">
           <div><h3 className="veg-name">{name}</h3></div>
           <div className="veg-infobtn">
           <IconButton
              color="primary"
              onClick={() => history.push(`/vegtable/${id}`)}
              aria-label="info-details">
              <InfoIcon />
            </IconButton>
            </div>
        </div>
         <div className="veg-weight">
           <p >{weight} -</p>
           <p className="veg-price">{price}</p>
          </div>
        </CardContent>
        <CardActions>
        <div className='veg-btn-price'>
         <IconButton
            className="veg-likebtn"
            onClick={() => setLike(like + 1)}
            aria-label="like-btn">
            <Badge badgeContent={like} color="primary">
              <FavoriteOutlinedIcon style={{ color: "lightgray" }} />
            </Badge>
          </IconButton>
        </div>
        </CardActions>
      </Card>
    </div>
  );
}
