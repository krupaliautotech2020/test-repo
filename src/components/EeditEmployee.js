import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import {    useParams} from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
import { useHistory } from "react-router-dom";
function EeditEmployee(props) { 
    let history = useHistory(); 
    let id = useParams()
    console.log("id from params",id)
        const [employee, setemployee]= useState({employeeFirstName: '',
                                                 employeeLastName: '',
                                                 employeeJoinDate: ' ',
                                                 employeeDateOfBirthday: ' ',
                                                 employeeDegree: ' ',
                                                 employeeAddress: ' ',
                                                 role: ' ',
                                                 employeeId: ' ',
                                                 employeePhoto: ' ',
                                                 employeeEmail: ' ',
                                                 employeeNumber: ' '
    });  
        // const Url = `https://app-name-employee-test.herokuapp.com/api/v10/employee/viewById/${id}`;
        // console.log(props.match.params.id);  
        useEffect(() => {  
        //   const GetData = async () => {  
        //       debugger
        //     const result = await axios.get(Url);  
        //     setemployee(result.data);
        //     console.log("get by id",result.data);   
        //   };  
        //   GetData();  
        debugger
        console.log("id received",id);
       const result= axios.get('https://app-name-employee-test.herokuapp.com/api/v10/employee/viewById/'+ id.Id).then(res => {
            console.log("get by id",res.data);   
            
            let newData = res.data.data;
            setemployee({employeeFirstName: newData.employeeFirstName,
            employeeLastName: newData.employeeLastName,
            employeeJoinDate: newData.employeeJoinDate,
            employeeDateOfBirthday: newData.employeeDateOfBirthday,
            employeeDegree: newData.employeeDegree,
            employeeAddress: newData.employeeAddress,
            role: newData.role,
            // employeeId: ' ',
            employeePhoto: newData.employeePhoto,
            employeeEmail: newData.employeeEmail,
            employeeNumber: newData.employeeNumber
}

           )
            console.log("data",newData.employeeAddress);
        }).catch(err => {
            console.log(err.response.data);
        })
        }, []); 




        const UpdateEmployee = (e) => {  
       e.preventDefault(); 
        let newId=id.Id;

        console.log("update id",newId);
          const data = {
            //   Id:props.match.params.id, 
            employeeFirstName: employee.employeeFirstName, 
            employeeLastName: employee.employeeLastName,
            employeeDateOfBirthday: employee.employeeDateOfBirthday ,
            employeeDegree: employee.employeeDegree,
            employeeAddress: employee.employeeAddress, 
            role: employee.role,
            employeePhoto: employee.employeePhoto,
            employeeEmail: employee.employeeEmail,
            employeeNumber: Number(employee.employeeNumber), 
            // employeeId: employee.employeeId, 
            employeeJoinDate: employee.employeeJoinDate,
                };  
          axios.put('https://app-name-employee-test.herokuapp.com/api/v10/employee/'+newId+'/updateEmployee',data)  
            // console.log("id...",newId)
            .then((res) => {  
               console.log(res.data)     
              props.history.push('/EemployeeList')  
            });  
            // console.log(props.match.params.id); 
        }; 
        
        
        const onChange = (e) => {  
          e.persist();  
          setemployee({...employee, [e.target.name]: e.target.value});  
        }  
        return (  
                <div className="app flex-row align-items-center">  
                <Container> 
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateEmployee}>  
                            <h1>Update Employee</h1>  
                            <label>First-Name</label>
                            <InputGroup className="mb-3">
                                        <Input type="text" name="employeeFirstName" id="employeeFirstName" placeholder="FName" value={employee?.employeeFirstName} onChange={onChange} />
                                    </InputGroup>

                                    <label>Last-Name</label>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="employeeLastName" id="employeeLastName" placeholder="LName" value={employee?.employeeLastName} onChange={onChange} />
                                    </InputGroup>

                                    <label>Join-Date</label>
                                    <InputGroup className="mb-3">
                                        <Input type="date" placeholder="Employee Join Date" name="employeeJoinDate" id="employeeJoinDate" value={employee?.employeeJoinDate} onChange={onChange} />
                                    </InputGroup>

                                    <label>Date-of-Birth</label>
                                    <InputGroup className="mb-4">
                                        <Input type="date" placeholder=" DOB" name="employeeDateOfBirthday" id="employeeDateOfBirthday" value={employee?.employeeDateOfBirthday} onChange={onChange} />
                                    </InputGroup>

                                    <label>Qalification</label>
                                    <InputGroup className="mb-4">
                                        <Input type="text" placeholder=" Degree" name="employeeDegree" id="employeeDegree" value={employee?.employeeDegree} onChange={onChange} />
                                    </InputGroup>

                                    <label>Address</label>
                                    <InputGroup className="mb-4">
                                        <Input type="text" placeholder="Address" name="employeeAddress" id="employeeAddress" value={employee?.employeeAddress} onChange={onChange} />
                                    </InputGroup>
                                    
                                    <label>Designation</label>
                                    <InputGroup className="mb-3">
                                    <select className="form-control" 
                                            name="Select Designtion" 
                                            onChange={onChange}
                                            id="role"
                                            value={employee?.role}>
                                            
                                        <option selected>Select Designation</option>
                                        <option value="1">Employee</option>
                                        <option value="2">Trainee</option>
                                        <option value="3">Intern</option>
                                    </select>
                                        {/* <Input type="text" placeholder="role" name="role" id="role" value={employee.role} onChange={onChange} /> */}
                                    </InputGroup>

                                    <label>Photo</label>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Employee Image" name="employeePhoto" id="employeePhoto" value={employee?.employeePhoto} onChange={onChange} />
                                    </InputGroup>

                                    <label>E-mail</label>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Employee Email" name="employeeEmail" id="eemployeeEmail" value={employee?.employeeEmail} onChange={onChange} />
                                    </InputGroup>

                                    <label>Contact-Number</label>
                                    <InputGroup className="mb-3">
                                        <Input type="Number" placeholder="Employee Contact No." name="employeeNumber" id="eemployeeNumber" value={Number(employee?.employeeNumber)} onChange={onChange} />
                                    </InputGroup>                               
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>
                                            </Col>
                                            </Row>
                                    </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default EeditEmployee;