
const ShimmerList = ()=>{

    return(
        <>
         <div>
            <div>
                <button 
                className="bg-teal-700 rounded max-w-max max-h-fit text-white p-2 m-2"
                >Loading....</button>
            </div>
            <div className="w-full">
                <table className="w-full max-h-fit">
                    <thead>
                        <tr className="bg-red-400  max-h-fit shadow-md">
                            <th className="text-left px-2">ID</th>
                            <th className="text-left px-2">First Name</th>
                            <th className="text-left px-2">Last Name</th>
                            <th className="text-left px-2">Gender</th>
                            <th className="text-left px-2">Email</th>
                            <th className="text-right px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className=" max-h-fit shadow-md p-6 my-2 h-6 border border-gray-400">
        <td className=" bg-gray-200 text-left px-2 m-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-300 text-right px-2 border border-gray-400"></td>
        </tr>
        <tr className=" max-h-fit shadow-md p-6 my-2 h-6 border border-gray-400">
        <td className=" bg-gray-200 text-left px-2 m-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-300 text-right px-2 border border-gray-400"></td>
        </tr>
        <tr className=" max-h-fit shadow-md p-6 my-2 h-6 border border-gray-400">
        <td className=" bg-gray-200 text-left px-2 m-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-300 text-right px-2 border border-gray-400"></td>
        </tr>
        <tr className=" max-h-fit shadow-md p-6 my-2 h-6 border border-gray-400">
        <td className=" bg-gray-200 text-left px-2 m-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className=" bg-gray-300 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-200 text-left px-2 border border-gray-400"></td>
        <td className="bg-gray-300 text-right px-2 border border-gray-400"></td>
        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        
        </>
    )
}

export default ShimmerList
