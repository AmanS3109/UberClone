import PropTypes from 'prop-types';

const LocationSearchPanel = (props) => {

    //sample array of locations

    const locations = [
        "C40, BARC colony, Anushakti Nagar, Mumbai, Maharashtra, India",
        "A94, Maharstra nagar, Mumbai, Maharashtra, India",
        "Chembur East, Mumbai, Maharashtra, India",
        "Kurla, Mumbai, Maharashtra, India",
    ]    
  return (
    <div>
        {/* {this is just a sample data} */}

        {
            locations.map((location, index) => {
                return (
                    <div key={index} onClick={()=>{
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className="flex gap-4 p-3 border-gray-50 active:border-black rounded-xl border-2 items-center my-2 justify-start">
                        <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className="font-medium">
                            {location}
                        </h4>
                    </div>
                )
                    
            })
        }
    </div>
)

}
LocationSearchPanel.propTypes = {
    setVehiclePanelOpen: PropTypes.func.isRequired,
    setPanelOpen: PropTypes.func.isRequired
}

export default LocationSearchPanel
