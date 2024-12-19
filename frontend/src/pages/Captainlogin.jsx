import { useState } from "react"
import { Link } from "react-router-dom"
    


const Captainlogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})


    const submitHandler = (e) => {
        e.preventDefault()
        setCaptainData({email: email, password:password})
        console.log(captainData)
        setEmail('')
        setPassword('')
    }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
        <div>
            <img className="w-20 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo"/>
            <form onSubmit={(e) => {
                submitHandler(e)
                }}>
                <h3 className="text-lg font-medium mb-2"> What's your email </h3>
                <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
                type="email" 
                placeholder="email@example.com" 
                />

                <h3 className="text-lg font-medium mb-2">Enter password</h3>
                <input 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
                type="password" 
                placeholder="password" 
                />

                <button
                className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                >Login</button>
                <p className="text-center">Join a fleet?<Link to='/captain-signup' className="text-blue-600 block">Register as a Captain</Link> </p>
            </form>
        </div>
        <div>
            <Link
            to='/login'
            className="bg-[#e99905] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >Sign in as User</Link>
        </div>
    </div>
  )
}

export default Captainlogin