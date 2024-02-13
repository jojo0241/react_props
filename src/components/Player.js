

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import players from './Players';



function Player() {
  return (
    <>

{
 players.map((value,key) => (
  <div key={key}>
    <center>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.url}/>
      <Card.Body>
        
        <Card.Text>
        <p>Nom : {value['nom ']}</p>&nbsp;
<p>Age : {value.age}</p>
<p>Nationnalité : {value['nationnality ']}</p>
<p> Numéro Maillot : {value.nummai}</p>
<p> Equipe : {value.team}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 


<hr />
      </center>

      
  </div>
))



          }
          
</>
   
    
  );
  const [players2] = players

}

export default Player;