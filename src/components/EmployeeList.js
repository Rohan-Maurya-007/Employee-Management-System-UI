import React from "react";
import { useState, useEffect } from "react";
import EmployeeService from "../service/EmployeeService";
import EmployeeListHelper from "./EmployeeListHelper"
import ShimmerList from "../utilities/ShimmerList";

const EmployeeList = ()=>{

    const [loading, setLoading] = useState(false)
    const[employees, setEmployees] = useState([]);

    useEffect(()=>{
        const fecthData = async ()=>{ 
            
            try {
                const value = await EmployeeService.fecthEmployee()
                setEmployees(value.data);
                setLoading(true)
            } catch (error) {
                
            }
            
    };

    fecthData();
        
    }, [setEmployees])

    const deleteEmployee= async (e,id)=>{
       
         EmployeeService.deleteEmployee(id).then(()=>{
            setEmployees((prevRes)=>{
                return prevRes.filter((employee)=> employee.id !== id)
             })
        }).catch((err)=>{
            console.log(err);
        })
        

        

    }

    return (loading && employees)? 
        <EmployeeListHelper employees={employees} deleteEmployee={deleteEmployee} /> : <ShimmerList/>;
}

export default EmployeeList;