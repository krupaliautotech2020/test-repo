import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function CcreateEmployee(props) {
    // <Formik initial values ={{employeeFirstName: "", employeeLastName:"", employeeAddress:"",employeeDateOfBirthday:"",employeeDegree:"",
    //                             employeeEmail:"", employeeJoinDate:" ",eemployeeNumber: "",employeeNumber:"", employeePhoto:""}}>
    
    const [employee, setEmployee] = useState({ employeeFirstName: '',
                                                 employeeAddress: '',
                                                 employeeNumber: ' ', 
                                                 employeeId: ' ',
                                                 employeeDateOfBirthday: ' ',
                                                    employeeLastName: ' ',
                                                    employeePhoto: ' ',
                                                    employeeEmail: ' ',
                                                    employeeDegree: ' ',
                                                    employeeJoinDate: ' ',
                                                    role:' ',
                                                    

                                                });
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "https://app-name-employee-test.herokuapp.com/api/v10/employee/createEmployee";
    const Insertemployee = (e) => {
        // let history = useHistory();
        e.preventDefault();
        // debugger
        // const config = {
        //     headers:{
        //         'Content-Type' : 'Application/json'
        //     },
        // }
        const data = { employeeFirstName: employee.employeeFirstName, 
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
        axios.post(apiUrl, data)
        // .then(response =>{
        //     console.log(response.data);
        // })
        // .catch(error =>{
        //     console.log(error);



        // });
         .then((result) => {
                props.history.push('/EemployeeList')
                console.log(result)
            });

    };

    const onChange = (e) => {
        e.persist();
        // debugger;
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }
    return (
        <div className="app flex-row align-items-center">

            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={Insertemployee}>
                                    <h1>Register</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="employeeFirstName" id="employeeFirstName" placeholder="FName" value={employee.employeeFirstName} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="employeeLastName" id="employeeLastName" placeholder="LName" value={employee.employeeLastName} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="date" placeholder="Employee Join Date" name="employeeJoinDate" id="employeeJoinDate" value={employee.employeeJoinDate} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <Input type="date" placeholder=" DOB" name="employeeDateOfBirthday" id="employeeDateOfBirthday" value={employee.employeeDateOfBirthday} onChange={onChange} />
                                        {/* <div>
                                        {employee.employeeDateOfBirthday}
                                        </div> */}
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <Input type="text" placeholder=" Degree" name="employeeDegree" id="employeeDegree" value={employee.employeeDegree} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <Input type="text" placeholder="Address" name="employeeAddress" id="employeeAddress" value={employee.employeeAddress} onChange={onChange} />
                                    </InputGroup>
                                    
                                    <InputGroup className="mb-3">
                                    <select className="form-control" 
                                            name="Select Designtion" 
                                            onChange={onChange}
                                            id="role"
                                            value={employee.role}>
                                            
                                        <option selected>Select Designation</option>
                                        <option value="1">Employee</option>
                                        <option value="2">Trainee</option>
                                        <option value="3">Intern</option>
                                    </select>
                                        {/* <Input type="text" placeholder="role" name="role" id="role" value={employee.role} onChange={onChange} /> */}
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Employee Image" name="employeePhoto" id="employeePhoto" value={employee.employeePhoto} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Employee Email" name="employeeEmail" id="eemployeeEmail" value={employee.employeeEmail} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="Number" placeholder="Employee Contact No." name="employeeNumber" id="eemployeeNumber" value={Number(employee.employeeNumber)} onChange={onChange} />
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
    // </Formik>
}

export default CcreateEmployee;