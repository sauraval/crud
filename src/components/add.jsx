import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { uploadNewNoteAPI } from '../services/allAPI';
function Add({setAddNoteResponse}) {
  const [addNote,setAddNote]=useState({
    title:"",note:""
  })
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Add new Note
  const handleAdd=async()=>{
    console.log(addNote);
    const {title,note}=addNote
    if(!title || !note){
      alert("Uploading form is incomplete.Please fill the form completely!!!")
    }
    else{
      const result= await uploadNewNoteAPI(addNote)
      if(result.status>=200 && result.status<3000){
        // success
        handleClose()
        // reset uploadVideo
        setAddNote({
         title:"",note:""
        })
        // share result.data in to View component
        setAddNoteResponse(result.data)
      }
      else{
        alert(result.message)
      }
    }
  }

  return (
    <div>
      <h3 className='ms-5 '>Add new notes 
        <Button onClick={handleShow} variant="link"><i class="fa-solid fa-circle-plus fs-2 text-white "></i></Button>
        </h3>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <FloatingLabel
        controlId="floatingInput"
        label="Uploading video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel> */}
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Title" 
        onChange={e=>setAddNote({...addNote,title:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Notes"
      onChange={e=>setAddNote({...addNote,note:e.target.value})}
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '300px' }}
        />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="info" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add