import { useState } from "react"
import { Link } from "react-router-dom"
const CaptainSignup = () => {

  const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
        fullname:{
            firstname: firstName,
            lastname: lastName
        },
        email: email,
        password: password
    })
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
}

  return (
    <div>
        <div className="py-5 px-5 flex flex-col justify-between h-screen">
        <div>
            <img className="w-16 mb-10" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo"/>
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
                 value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm" 
                type="etext" 
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
                />
                </div>

                <h3 className="text-base font-medium mb-2"> What's your email </h3>
                <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
                type="email" 
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />

                <h3 className="text-base font-medium mb-2">Enter password</h3>
                <input 
                required 
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />

                <button
                className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm"
                >Register</button>
                <p className="text-center">ALready have a account?<Link to='/captain-login' className="text-blue-600 block">Login here</Link> </p>
            </form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
    </div>
  )
}

export default CaptainSignup