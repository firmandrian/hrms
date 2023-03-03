import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiMemoryCard, BiPlus} from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import { ImCross } from "react-icons/im";

export default function Modalss() {
  //function modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
  //function untuk deduction
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  }
  const handleCloseForm = () => {
    setShowForm(false);
  }
  return (
    <>
    <div className='ps-2 mb-2'>
      <Button className='me-2' variant="success" onClick={handleShow}>Add
        </Button>

      <Button variant="danger">Delete
        </Button>
    </div>

      <Modal className= "modal-lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton className='text-light' style={{backgroundColor: '#248AAF',}}>
          <Modal.Title style={{fontSize: '18px'}} > <BiMemoryCard style={{marginTop: '-7px', fontSize: '18px'}}/> Add Incentive/Allowance</Modal.Title>
        </Modal.Header>

    <Modal.Body style={{ fontSize: '14px',color:'#767676',fontFamily:'Lato,"Helvetica Neue",Arial,sans-serif'}}>
      <Form.Group className="mb-3 row g-2" >
        <div className="col-4">
          <Form.Label htmlFor="disabledSelect">
             Allowance Type
             <span className='text-danger'> *</span>
             </Form.Label>
        </div> 

        <div className="col-8">
          <Form.Select style={{fontSize: '14px', color:'#767676'}} id="disabledSelect">
            <option>--All--</option>
            <option>MAIN</option>
            <option>MONTHLY</option>
            <option>DAILY</option>
          </Form.Select>
        </div>
        <div className="col-4">
          <Form.Label htmlFor="disabledSelect">
             Incentive/Allowance Name
              <span className='text-danger'> *</span>
          </Form.Label>
        </div>  

        <div className="col-8">
          <Form.Control style={{fontSize: '14px', color:'#767676'}} type="text" placeholder="Name" required/>
        </div>
        <div className="col-4">
          <Form.Label htmlFor="disabledSelect"> 
            Incentive Amount
              <span className='text-danger'> *</span>
          </Form.Label>
        </div>  
        <div className="col-8">
          <Form.Control style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
        </div>

        <div>Auto Deduction</div>
        <div className="d-flex justify-content-between mt-3">
        <div>Occurence
          <div className='mt-3'>1 time <span className='text-danger'> *</span></div>
          <div className='mt-3'>2 times <span className='text-danger'> *</span></div>
          <div className='mt-3'>3 times <span className='text-danger'> *</span></div>
          <div className='mt-3'>4 times <span className='text-danger'> *</span></div>
          <div className='mt-3'>5 times & up<span className='text-danger'> *</span></div>
        </div>


        <div className='text-center'>Tardiness
          <div className="col-10 mt-2 ms-3">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2 ms-3">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2 ms-3">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2 ms-3">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2 ms-3">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
        </div>


        <div className='text-center'>Absent
          <div className="col-10 mt-2">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          <div className="col-10 mt-2">
            <Form.Control size="sm" style={{fontSize: '14px', color:'#767676'}} type="number" placeholder="00.00" required />
          </div>
          </div>
        </div> 
      </Form.Group>


      <div className='mt-3'>
               <Button onClick={() => handleShowForm()} variant="success"><BiPlus style= {{marginTop:"-2"}} />Add</Button>{' '}
               {/* <Button onClick= {() => setIsOpenValue(true) }variant="success"><BiPlus style= {{marginTop:"-2"}} />Add</Button> */}
        </div>
        <div className='mt-4'>Deduction Title <span className='text-danger'>*</span></div>

        <div className="d-flex justify-content-end" style={{marginRight:'-50px'}} >
            <div className="col-5 mt-2">
              <div className="input-group">
               <Form style={{ width: '250px' }}>
                  {showForm && (
                    <Form.Control size="sm" type="text" placeholder="Name" required/>
                   )}

               </Form>
              {showForm == true ? <Button variant="danger" className='ms-2 btn-sm' onClick={() => handleCloseForm()}> {showForm && <ImCross />} </Button> : false}
        
    </div>
  </div>
</div>

        <div className='mt-3' style={{fontSize: '13px', color:'#767676,'}}><span className='text-danger'>*</span> Required field</div>
    </Modal.Body>

    <Modal.Footer style={{marginTop:"-13px"}}>
      <Button variant="success" onClick={handleClose}>
          Save
      </Button>
      <Button variant="danger" onClick={handleClose}>
          Cancel
      </Button>
    </Modal.Footer>
      </Modal>
    </>
  );
}