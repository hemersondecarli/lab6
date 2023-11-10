import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookItem(props){

    return(             //styling from https://react-bootstrap.netlify.app/docs/components/cards/
        <div>
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* <div>
 <h3>{props.myBook.title}</h3>
 <img src={props.myBook.thumbnailUrl}></img>
 <p>{props.myBook.authors[0]}</p>
</div> */}

    </div>
    );
}
export default BookItem;