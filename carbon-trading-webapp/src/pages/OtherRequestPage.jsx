import React from 'react'

const data = [
    {requestdate: "1/11/2015", companyname: "DBS", carbonprice: "10 SGD/Tonnes", carbonquantity: "20 Tonnes", 
    requestingreason: "Need credits", requesttype: "Buy"}
]

const OtherRequestPage = () => {

  return (
    <div>Outstanding Requests
        <table className="center">
            <tr>
                <th>Request Date</th>
                <th>Company Name</th>
                <th>Carbon Price</th>
                <th>Carbon Quantity</th>
                <th>Requesting Reason</th>
                <th>Request Type</th>
            </tr>
            {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.requestdate}</td>
                            <td>{val.companyname}</td>
                            <td>{val.carbonprice}</td>
                            <td>{val.carbonquantity}</td>
                            <td>{val.requestingreason}</td>
                            <td>{val.requesttype}</td>
                        </tr>
                    )
            })}
        </table>

    </div>
  )
}

export default OtherRequestPage