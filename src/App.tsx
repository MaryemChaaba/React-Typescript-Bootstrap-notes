import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Col } from 'react-bootstrap'
import NotesList from './components/NotesList'
import CreateNotes from './components/CreateNotes'

export type NoteType={

    id:string,
    title:string,
    text:string,
    color:string,
    date:string
}

function App() {
  const [notes, setNotes] = useState<NoteType[]>([{
    id:(new Date).toString(),
    title:"Meeting",
    text:"Meeeting with UI team",
    color:"#efefef",
    date:(new Date).toString()
  }])
  const handleDelete =(id:string)=>{
   const newList = notes.filter(item=>item.id!==id)
   setNotes(newList)
    
    
  }
  return (
    <>
      <Header></Header>
      <Container className='mt-3'>
        <Row>
          <Col>
          <NotesList handleDelete={handleDelete} notes={notes}></NotesList>
          </Col>
        </Row>
        <Row>
          <Col>
          <CreateNotes setNotes={setNotes} notes={notes}></CreateNotes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
