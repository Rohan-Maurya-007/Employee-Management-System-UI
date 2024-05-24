import {useNavigate } from "react-router-dom"

const FetchedList = ({employees, deleteEmployee})=>{
    const navigate = useNavigate()

    const UpdateEmployee= (e, id)=>{
      navigate(`/update/${id}`)   
    }

    return(
        <div>
            <div>
               <button 
               className="bg-teal-700 rounded max-w-max max-h-fit text-white p-2 m-2"
               onClick={()=>{
                navigate("/add")
               }}
            >Add new Employee</button>
</div>
<div className="w-full">
    <table className="w-full max-h-fit">
        <thead>
            <tr className="bg-red-300  max-h-fit shadow-md border border-black">
                <th className="text-left px-2">ID</th>
                <th className="text-left px-2">First Name</th>
                <th className="text-left px-2">Last Name</th>
                <th className="text-left px-2">Gender</th>
                <th className="text-left px-2">Email</th>
                <th className="text-right px-6">Actions</th>
            </tr>
        </thead>
        <tbody>
        
        {employees.map((employee)=>{
            
            return(
        
                <tr className="bg-yellow-200 max-h-fit shadow-md border border-yellow-600" key={employee.id}>
                <td className="text-left px-2">{employee.id}</td>
                <td className="text-left px-2">{employee.firstName}</td>
                <td className="text-left px-2">{employee.lastName}</td>
                <td className="text-left px-2">{employee.gender}</td>
                <td className="text-left px-2">{employee.email}</td>
                <td className="text-right px-2"><div>
                    <button
                   className=" max-w-fit bg-blue-200 rounded-md text-blue-900 px-2 border border-black"
                    onClick={(e,id)=>{UpdateEmployee(e, employee.id)}}
                    >Update</button>

                    <button
                    className=" max-w-fit bg-red-500 rounded-md text-white px-2 mx-2 my-1 border border-black"
                    onClick={(e, id)=>{deleteEmployee(e, employee.id)}}
                    >Delete</button>
                    </div></td>
                </tr>
            
            )
        })}
            
       
        </tbody>
    </table>
</div>

</div>
    )
}

export default FetchedList