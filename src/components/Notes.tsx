import React from 'react'
import { NoteType} from "../App";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Button, Card } from 'react-bootstrap';
type Props = {
    note:NoteType,
    handleDelete:(id:string)=>void
}

function Notes({note,handleDelete}: Props) {
  return (
    <Card style={{ width: '18rem' ,backgroundColor:note.color}}>    
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
      <Card.Text>
        {note.text}
      </Card.Text>
      <Button variant="danger" onClick={()=>handleDelete(note.id)}>Delete</Button>
    </Card.Body>
  </Card>
  )
}

export default Notes