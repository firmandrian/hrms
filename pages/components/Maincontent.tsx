import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { BsGrid3X3GapFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Modals from '../components/Modal'

export default function Tabel() {
  return (
    <>
    <Container fluid style={{backgroundColor: '#eaeaea'}}>
        <div className=" py-3" style={{background:'#eaeaea'}}></div>
        <div className="border border-primary bg-light">
        <div className='text-light' style={{background: '#248AAF'}}>
            <p className="p-3">
                <BsGrid3X3GapFill className='me-2'/>
                INCENTIVE AND OTHER ALLOWANCE
            </p>
        </div> 
        <Modals/> 

    <div className="row py-3" style={{ 
        fontSize: '14px',
        color:'#767676',
        fontFamily:'Lato,"Helvetica Neue",Arial,sans-serif'
        }}
    >

        <div className='col-md-4 ms-2'>
            <Form.Control style={{ fontSize: '14px',color:'#767676',fontFamily:'Lato,"Helvetica Neue",Arial,sans-serif'}} type="text" placeholder="Search..." />
        </div>

        <div className="col-md-2 text-end pt-1" id="show-entries">
            showing 10/10 entries
        </div>
    </div>

    <Table striped bordered style={{
         fontSize: '14px',
         color:'#767676',
         fontFamily:'Lato,"Helvetica Neue",Arial,sans-serif',
        marginLeft:"12px"
         }}
    >
      <thead>
        <tr>
            <th></th>
            <th>Type incentive</th>
            <th>Incentive Allowance Name</th>
            <th>Amount</th>
            <th>Deduction title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>   
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>   
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>    
        <tr>
            <td><input type="checkbox" /></td>
            <td>MONTHLY</td>
            <td>ISO Compilance Team Leader</td>
            <td>2000</td>
            <td>ISO Compilance Deductionr</td>
        </tr>
      </tbody>
    </Table>

    <div className="d-flex justify-content-between mt-3" style={{ fontSize: '14px',color:'#767676',fontFamily:'Lato,"Helvetica Neue",Arial,sans-serif'}}  aria-label="...">
        <div className='ms-4'>
            <span className='ms-2'>Show </span>
                <select name="" id="">
                    <option value="">10</option>
                    <option value="">20</option>
                </select>
      <span className='ms-2'>entries per page</span>
    </div>
    <div className='me-4'>
        <ul className="pagination pagination-sm">
            <li className="page-item px-1">
                <a className="page-link text-black rounded-5">First</a>
            </li>
            <li className="page-item">
                <a className="page-link text-black rounded-5" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item active px-1">
                <a className="page-link text-black rounded-5" href="#">1</a>
            </li>
            <li className="page-item" aria-current="page">
                <a className="page-link text-black rounded-5" href="#">2</a>
            </li>
            <li className="page-item px-1">
                <a className="page-link text-black rounded-5" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            <li className="page-item">
                <a className="page-link text-black rounded-5" href="#">Last</a>
            </li>
            </ul>
    </div>
</div>
</div>
    </Container>
   </>
  )
}