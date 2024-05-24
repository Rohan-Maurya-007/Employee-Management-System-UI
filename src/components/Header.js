function Header() {
    return(
        <div className="flex w-full max-h-max bg-red-400 justify-between">
            <div>
                <img className="h-14 p-2 m-2 rounded-full" alt="logo" src="https://media.istockphoto.com/id/1084494738/vector/vector-illustration-icon-with-the-employee-management-system-concept.jpg?s=170667a&w=0&k=20&c=pAqxYoFqQYMMuiEg0WEDDX7yU6Jm4pWJ9k8KCorhv-A="></img>
            </div>
            <div  className="">
                <h1
                className="p-2 m-3 font-bold  bg-teal-200 text-slate-800-500 shadow-md border  border-blue-200"
                >Employee Management System </h1>
            </div>

            <div className="">
                {/* <button type="submit" className="bg-pink-400  rounded-md p-1 m-4">Log in </button> */}
            </div>
        </div>
    )
    
}

export default Header;