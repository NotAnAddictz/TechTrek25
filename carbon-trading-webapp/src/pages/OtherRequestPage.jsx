import * as React from 'react'

const data = [
    {requestdate: "1/11/2015", companyname: "UOB", carbonprice: "10 SGD/Tonnes", carbonquantity: "20 Tonnes", 
        requestingreason: "Need credits", requesttype: "Buy"},
    {requestdate: "04/09/2018", companyname: "OCBC", carbonprice: "20 SGD/Tonnes", carbonquantity: "40 Tonnes", 
        requestingreason: "Required", requesttype: "Sell"},
    {requestdate: "1/11/2022", companyname: "Singtel", carbonprice: "30 SGD/Tonnes", carbonquantity: "50 Tonnes", 
        requestingreason: "Automatic", requesttype: "Buy"}
]

const OtherRequestPage = () => {
  return (
    <div>
        <h1>Outstanding Requests</h1>
        <table className="center">
            <tr>
                <th>Request Date</th>
                <th>Company Name</th>
                <th>Carbon Price</th>
                <th>Carbon Quantity</th>
                <th>Requesting Reason</th>
                <th>Request Type</th>
                <th>Select To Check</th>
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
                            <td><input type='checkbox'/></td>
                        </tr>
                    )
            })}
        </table>
        <button style={{backgroundColor: "green", color: "white", borderRadius: "5px", margin: "100px"}}>
            Accept
        </button>
        <button style={{backgroundColor: "red", color: "white", borderRadius: "5px"}}>
            Reject
        </button>
    </div>
  )
}

export default OtherRequestPage