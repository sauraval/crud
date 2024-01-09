import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { updateNoteAPI } from '../services/allAPI';

function Edit({notes,getAllAddNotes}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editNote,setEditNote]=useState({
    title:notes.title,note:notes.note
  })
  const save=async(id)=>{
   await updateNoteAPI(id,editNote)
   getAllAddNotes()
   handleClose()
  }
  return (
    <div>
      <Button onClick={handleShow} variant='link'><i class="fa-solid fa-pen-to-square fs-4 text-white"></i></Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add new notes</Modal.Title>
    </Modal.Header>
    <Modal.Body>
  <FloatingLabel
    controlId="floatingInput"
    label="Enter Title"
    className="mb-3"
  >
    <Form.Control value={editNote.title} type="text" placeholder="Enter Title" onChange={e=>setEditNote({...editNote,title:e.target.value})}/>
  </FloatingLabel>

  <FloatingLabel controlId="floatingTextarea2" label="Notes"  >
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      onChange={e=>setEditNote({...editNote,note:e.target.value})}
      value={editNote.note}
      style={{ height: '300px' }}
    />
  </FloatingLabel>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button onClick={()=>save(notes.id)} variant="info" >
        Add
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default Edit