import  Axios  from "axios";


const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/Employee"

class EmployeeService{

     saveEmployee(employee){
        return Axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    fecthEmployee(){
        return Axios.get(EMPLOYEE_API_BASE_URL)
    }

    deleteEmployee(id){
        return Axios.delete(EMPLOYEE_API_BASE_URL+"/"+id)
    }

    getEmployeeById(id){
        return Axios.get(EMPLOYEE_API_BASE_URL+ "/"+id)
    }

    updateEmployee(employee){
        return Axios.patch(EMPLOYEE_API_BASE_URL + "/update", employee)
    }
}



export default new  EmployeeService()