import { Link } from "react-router-dom"

const UserSignup = () => {
  return (
    <div>
        <div className="p-7 flex flex-col justify-between h-screen">
        <div>
            <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo"/>
            <form onSubmit={(e) => {
                submitHandler(e)
                }}>

                <h3 className="text-base font-medium mb-2"> What's your name </h3>
                <div className="flex gap-3 mb-6">
                <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm" 
                type="text" 
                placeholder="first name" 
                />
                <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm" 
                type="etext" 
                placeholder="last name" 
                />
                </div>

                <h3 className="text-base font-medium mb-2"> What's your email </h3>
                <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
                type="email" 
                placeholder="email@example.com" 
                />

                <h3 className="text-base font-medium mb-2">Enter password</h3>
                <input 
                required 
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
                type="password" 
                placeholder="password" 
                />

                <button
                className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm"
                >Login</button>
                <p className="text-center">ALready have a account?<Link to='/login' className="text-blue-600 block">Login here</Link> </p>
            </form>
        </div>
        <div>
            <Link
            to='/captain-login'
            className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >Sign in as Captain</Link>
        </div>
    </div>
    </div>
  )
}

export default UserSignup