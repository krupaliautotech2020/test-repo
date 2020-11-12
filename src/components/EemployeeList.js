import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function EemployeeList(props) {
  
  let history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const GetData = () => {
      setLoading(true);
      fetch('https://app-name-employee-test.herokuapp.com/api/v10/employee/all')
        .then(res => res.json())
        .then(res => {
          setData(res.data);
          console.log(res.data)
          // setLoading(
          console.log(res.data)
        })
    };
    GetData();
  }, []);



  // useEffect(() =>{
  //     const GetData = async () => {
  //         const result = await axios('https://app-name-employee-test.herokuapp.com/api/v10/employee/all');
  //     setData(result.data);
  //     };
  //     GetData();
  // }, []);

  const deleteemployee = (id) => {
    window.location.reload(false);
    debugger;
    axios.delete(`https://app-name-employee-test.herokuapp.com/api/v10/employee/${id}/deleteEmployee`)
      .then((result) => {
        props.history.push('/EemployeeList')
      })
      .catch(e => {console.log(e)})
  };
  const editemployee = (id) => {
    props.history.push({
      pathname: '/edit/' + id
    });
  };
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
        <Card>
          <CardHeader>
          <i className="fa fa-align-justify"></i> Employee List  
          </CardHeader>
          <CardBody>
          <Table hover bordered striped responsive size="sm">  
              <thead>
                <tr>
                <th>Employee Name</th>
          <th>Last  Name</th>
          <th>Join-Date</th>
          <th>DOB</th>
          <th>Qualification</th>
          <th>Address</th>
          <th>Designation</th>
          <th>Photo</th>
          <th>Email</th>
          <th>Contact-Number</th>
          </tr>

      {/* <table class="table mt-3">
        <thead clas="thead-dark"> */}
          

        </thead>
        <tbody>

          {data.map(item => 
              <tr>
            <th>{item.employeeFirstName}</th>
            <th>{item.employeeLastName}</th>
            <th>{item.employeeJoinDate}</th>
            <th>{item.employeeDateOfBirthday}</th>
            <th>{item.employeeDegree}</th>
            <th>{item.employeeAddress}</th>
            <th>{item.role}</th>
            <th>{item.employeePhoto}</th>
            <th>{item.employeeEmail}</th>
            <th>{item.employeeNumber}</th>
        
          <td>
            <div class="btn-group">
              <button className="btn btn-warning" onClick={() => { editemployee(item.employeeId) }}>Edit</button>
              <button className="btn btn-warning" onClick={() => { deleteemployee(item.employeeId) }}>Delete</button>
            </div>
          </td>
          {/* {data.length == 0 && <tr>
            <td className="text-center" colSpan="4">
              <b>No data found to display.</b>
            </td>
          </tr>} */}
            </tr>)}
          </tbody>
          </Table>
          </CardBody>
          </Card>
          </Col>
          </Row>
          </div>
 
    
  );
}






//         <div className="animated fadeIn">  

//               <Row>  
//                 <Col>  
//                   <Card>  
//                     <CardHeader>  
//                       <i className="fa fa-align-justify"></i> Employee List  
//                       </CardHeader>  
//                     <CardBody>  
//                       <Table hover bordered striped responsive size="sm">  
//                         <thead>  
//                           <tr>  
//                             <th>Employee Name</th>  
//                             <th>Last  Name</th>  
//                             <th>Join-Date</th>
//                             <th>DOB</th>
//                             <th>Qualification</th>
//                             <th>Address</th>
//                             <th>Designation</th>
//                             <th>Photo</th>
//                             <th>Email</th>
//                             <th>Contact-Number</th>

//                             <th>Action</th>  
//                           </tr>  
//                         </thead>  
//                         <tbody>  
//                           {  
//                             {data.map(item =><tr>
//                             {/* // [data].map((item, idx) => {   */}
//                             {/* //   return <tr>   */}
//                                 <td>{item.employeeFirstName}</td>  
//                                 <td>{item.employeeLastName}</td>
//                                 <td>{item.employeeJoinDate}</td> 
//                                 <td>{item.employeeDateOfBirthday}</td> 
//                             <td>{item.employeeDegree}</td>
//                             <td>{item.employeeAddress}</td>
//                             <td>{item.role}</td>
//                             <td>{item.employeePhoto}</td>
//                             <td>{item.employeeEmail}</td>
//                             <td>{item.employeeNumber}</td>
//                             </tr>)}

//                                 <td>  
//                                   <div class="btn-group">  
//                                     <button className="btn btn-warning" onClick={() => { editemployee(item.Id) }}>Edit</button>  
//                                     <button className="btn btn-warning" onClick={() => { deleteemployee(item.Id) }}>Delete</button>  
//                                   </div>  
//                                 </td>  

//                               // </tr>  

//                             // })}  

//                         </tbody>  

//                       </Table>  

//                     </CardBody>  

//                   </Card>  

//                 </Col>  
//               </Row>  

//             </div>  
//     )
// }

export default EemployeeList;

