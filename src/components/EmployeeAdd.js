import React from 'react'
import { useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import { useNavigate} from "react-router-dom"

const EmployeeAdd = () => {

   const navigate = useNavigate();
 const [employee, setEmployee]= useState({
        id:"",
        firstName:"",
        lastName:"",
        gender:"",
        email:""
  })


  const getValue= (e)=>{
      const value = e.target.value
      setEmployee({...employee, [e.target.name]: value})
  }

  const saveEmployee=(e)=>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
    navigate('/')
  }

  const resteEmployee =(e)=>{
    e.preventDefault();
    const newValue = {
      id:"",
        firstName:"",
        lastName:"",
        gender:"",
        email:""

    }

    setEmployee(newValue)
  }

  return (
    <div className='flex-col  max-h-screen bg-fuchsia-200 '>
      <div className=" p-3 justify-center text-center flex-col flex-1  w-full max-h-fit ">
        <div className="inline-block  max-w-max max-h-max shadow-xl bg-teal-200 rounded-xl">
            <h2 className='p-2 m-2'>Add Employee Here</h2>
        </div>

        <div className=" p-1 m-2 text-center">
            <label className='inline-block bg-teal-400 min-w-max max-h-max  shadow-md rounded px-2'>First Name :</label>
            <input type="text"
            name='firstName'
            value={employee.firstName}
            onChange={(e)=>getValue(e)}
            placeholder="Enter First Name"
            className="block bg-teal-100 max-w-max h-8 rounded-md px-2 m-auto my-3 focus:bg-orange-200 "
            /> 

            <label className='inline-block bg-teal-400 min-w-max max-h-max  shadow-md rounded px-2'>Last Name :</label>
            <input type="text"
            name='lastName'
            value={employee.lastName}
            onChange={(e)=>getValue(e)}
            placeholder="Enter Last Name"
            className="block bg-teal-100 max-w-max h-8 rounded-md px-2 m-auto my-3  focus:bg-orange-200 "
            /> 

            <label className='inline-block bg-teal-400 min-w-max max-h-max  shadow-md rounded px-2'>Gender :</label>
            <input type="text"
            name='gender'
            value={employee.gender}
            onChange={(e)=>getValue(e)}
            placeholder="Enter your Gender "
            className="block bg-teal-100 max-w-max h-8 rounded-md px-2 m-auto my-3  focus:bg-orange-200 "
            /> 

            <label className='inline-block bg-teal-400 min-w-max max-h-max  shadow-md rounded px-2'>Email id :</label>
            <input type="email"
            name='email'
            value={employee.email}
            onChange={(e)=>getValue(e)}
            placeholder="Enter Email address"
            className="block bg-teal-100 max-w-max h-8 rounded-md px-2 m-auto my-3  focus:bg-orange-200"
            /> 
            

        </div>

        <div className=' h-20 inline-block space-x-12'>
            <button 
            className='bg-red-400 w-20 rounded-md shadow-xl p-2 m-4'

            onClick={resteEmployee}
            >Reset</button>
            <button
          
              onClick={saveEmployee}
          
            
            className='bg-green-500  w-20 rounded-md shadow-xl p-2 m-4'
            >Save</button>
        </div>
    </div>
    </div>
    
  )
}

export default EmployeeAdd