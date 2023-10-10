import Price from './Price';
import Image from './Image';
import Description from './Description';
import Name from './Name';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
var name=prompt('Your name');

function App() {

  return (
   <> 
   <div style={{ margin:50,  display:'flex' , justifyContent:'center',flexDirection:'column',alignItems:'center' }}>
   <Card style={{ width: '18rem' ,  }} >
     <Image/>

      <Card.Body style={{backgroundColor:'grey', display:'flex' , justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Card.Title > <Name></Name></Card.Title>
        <Card.Text>
        <Description></Description>
        <Price></Price>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <div style={{display:'flex' , justifyContent:'center',flexDirection:'column',alignContent:'center'}} >
    <h1>hello <span style={{color:'red'}}>{name || "there !!"}</span></h1>
    {!name && (
    <form>
           <p> Type your name here </p>
           <input type="text"  placeholder='Your name .....'/>
         </form> )}
      <br />
  
      </div>
   </div>
   </>
  );
}

export default App;
