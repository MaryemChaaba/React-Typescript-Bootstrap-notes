import React from 'react'
import {NoteType} from "../App"
import Notes from './Notes'
type Props = {
    notes:NoteType[]
    handleDelete:(id:string)=>void
}

function NotesList({notes,handleDelete}: Props) {
  
    const renderNotes =():JSX.Element[]=>{
        return notes.map(item=>{
       return <Notes handleDelete={handleDelete}  key={item.id} note={item}/>
    })
    }
  return (<>
    <h2 className='mt-3'>Notes List</h2>
    
    {renderNotes()}
    </>
  )
}

export default NotesList