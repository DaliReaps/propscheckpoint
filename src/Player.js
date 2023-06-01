import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({name,nationality,age,team,jerseyNumber,imageURL}) => {
// const {name,age,nationality,team,jerseyNumber,imageURL}=play;
  return (
<Card style={{ width: '8rem' }}>
      <Card.Img style={{height:"200px"}} variant="top" src={imageURL} />
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{name}</ListGroup.Item>
        <ListGroup.Item>{nationality}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item> 
       <ListGroup.Item>{team}</ListGroup.Item> 
        <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        </ListGroup>
    </Card>
  )
}
// Set default props
Player.defaultProps={"name":"Mystery Player","nationality":"Unknown","team":"Unknown","jerseyNumber":0,"age":20,"imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAgYNYolVt8pjqILt0gTNyqexz1_18WNmwqk5onvuQA&s"};


export default Player