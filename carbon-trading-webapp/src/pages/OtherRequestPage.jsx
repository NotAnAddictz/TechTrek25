import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import Navbar from '../components/navbar';

const data = [
    {requestdate: "1/11/2015", companyname: "UOB", carbonprice: "10 SGD/Tonnes", carbonquantity: "20 Tonnes", 
        requestingreason: "Need credits", requesttype: "Buy"},
    {requestdate: "4/9/2018", companyname: "OCBC", carbonprice: "20 SGD/Tonnes", carbonquantity: "40 Tonnes", 
        requestingreason: "Required", requesttype: "Sell"},
    {requestdate: "1/11/2025", companyname: "Singtel", carbonprice: "30 SGD/Tonnes", carbonquantity: "50 Tonnes", 
        requestingreason: "Automatic", requesttype: "Buy"},
    {requestdate: "1/5/2025", companyname: "NCS", carbonprice: "30 SGD/Tonnes", carbonquantity: "50 Tonnes", 
            requestingreason: "None", requesttype: "Sell"}
]

const OtherRequestPage = () => {
    const [overdueRequests, setOverdueRequests] = React.useState([])
    const [hasModal, setHasModal] = React.useState(false)

    useEffect(() => {
        const date = new Date()
        const lastWeek = new Date()
        lastWeek.setDate(date.getDate() - 7)
        const overdue = data.filter((val) => lastWeek > new Date(val.requestdate));
        setOverdueRequests(overdue);
    }, [])

    // console.log(overdueRequests.length)

    useEffect(() => {
        if (overdueRequests.length > 0) {
            setHasModal(true)
        }
    }, [overdueRequests])

    const closeModal = (e) => {
        setHasModal(false)
    }

  return (

    <div>
      <Navbar />
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
        {hasModal && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2>Overdue Requests</h2>
            <p>There are overdue requests!</p>
            {<button onClick={closeModal} style={styles.button}>Close</button>}
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    popup: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      maxWidth: "400px",
      width: "80%",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    }
  };

export default OtherRequestPage