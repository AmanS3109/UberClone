import { useRef, useState } from "react"
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap"
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel"

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  useGSAP(function (){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        // opacity: 1,
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {  
      gsap.to(panelRef.current, {
        height: '0%',
        // opacity: 0
        padding: 0
    })
    gsap.to(panelCloseRef.current, {
      opacity: 0
    })
  }
  }, [panelOpen])

  useGSAP(function (){ 
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {  
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
      <div onClick={() => {
        setVehiclePanelOpen(false)
      }} className="h-screen w-screen">
        {/* image for temporary */}
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div ref= {vehiclePanelRef} className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white">
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className="text-gray-500 text-2xl flex items-center justify-center cursor-pointer opacity-0">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form className="relative" onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 bottom-4 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)} 
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" 
              type="text" 
              placeholder="Add a pick-up location" 
            />
            <input
              onClick={() => setPanelOpen(true)} 
              value={destination}
              onChange={(e) => setDestination(e.target.value)} 
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" 
              type="text" 
              placeholder="Enter your destination" 
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
            <LocationSearchPanel setPanelOpen={setPanelOpen}  setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
          <div className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="logo" />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
            </div>
            <h2 className="text-lg font-semibold">Rs.200</h2>
          </div>
          <div className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="logo" />
            <div className="w-1/2">
              <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className="font-medium text-sm">3 mins away</h5>
              <p className="font-normal text-xs text-gray-600">Affordable MotorCycle Ride</p>
            </div>
            <h2 className="text-lg font-semibold">Rs.65</h2>
          </div>
          <div className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="logo" />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
            </div>
            <h2 className="text-lg font-semibold">Rs.118.6</h2>
          </div>
      </div>
    </div>
  )
}

export default Home