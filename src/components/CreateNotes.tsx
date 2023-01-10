import React, { useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { NoteType } from "../App";
import Notes from './Notes';
type Props = {
  notes:NoteType[]
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>
}

function CreateNotes({notes,setNotes}: Props) {
  const [error, setError] = useState<String>("")
  const noteTitle=useRef<HTMLInputElement | null>(null)
  const noteText=useRef<HTMLTextAreaElement | null>(null)
  const noteColor=useRef<HTMLInputElement | null>(null)
  const handleSubmit=(e:React.FormEvent<HTMLElement>):void=>{
    e.preventDefault();
    if(noteTitle.current?.value ==="" || noteText.current?.value ==="" || noteColor.current?.value === "" ){
      setError("All fields are mandatory")
      return

    } 
    else{
      setError("")
    const newNote:n={
      id:(new Date).toString(),
      title:( noteTitle.current as HTMLInputElement) .value,
      text: (noteText.current as HTMLTextAreaElement) .value,
      color:(noteColor.current as HTMLInputElement) .value,
     date:(new Date).toString()
    } 
    setNotes([...notes,newNote]);
    ( noteTitle.current as HTMLInputElement).value = "";
    (noteText.current as HTMLTextAreaElement).value = "";
    (noteColor.current as HTMLInputElement) .value= "";
    }
    
  }
  return (
    <div>
        <h2>Create Notes</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={(e)=>{e.preventDefault();handleSubmit(e)}}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control ref={noteTitle} type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text</Form.Label>
        <Form.Control ref={noteText}  as="textarea" rows={3} placeholder="Enter Text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label htmlFor='colorInput'>Note Color</Form.Label>
        <Form.Control ref={noteColor} type="color" id="colorInput" title='chose your color' defaultValue="#dfdfdf" placeholder="Enter Color" />
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateNotes