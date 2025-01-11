

import { useState } from "react"

function InsertButton({ onClick }) {
//   const [requestDate, setRequestDate] = useState(null)
//   const [companyName, setCompanyName] = useState(null)
//   const [carbonPrice, setCarbonPrice] = useState(null)
//   const [carbonQuantity, setCarbonQuantity] = useState(null)
//   const [requestReason, setRequestReason] = useState(null)
//   const [requestType, setRequestType] = useState(null)


  const insertData = async () => {
    try {
        console.log("inserting")
    //   const response = await fetch("http://127.0.0.1:5000/user", {
    //     method: "POST", // or 'PUT', 'DELETE', etc.
    //     headers: {
    //       "Content-Type": "application/json"
    //       // Include other headers here if necessary
    //     }
        // body: JSON.stringify({
        //   key1: "value1",
        //   key2: "value2",
        // }),
    //   }

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok")
    //   }

    //   const data = await response.json()
    //   setResponseData(data)
    } catch (error) {
      console.error("Error inserting", error)
    }
  }

  return (
    <button type="button" className="btn btn-primary" onClick={insertData}>Insert</button>

  )
}

export default InsertButton
