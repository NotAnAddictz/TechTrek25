import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import Navbar from '../components/navbar';

// const data = [
//     {requestdate: "1/11/2026", companyname: "UOB", carbonprice: "10 SGD/Tonnes", carbonquantity: "20 Tonnes", 
//         requestingreason: "Need credits", requesttype: "Buy"},
//     {requestdate: "4/9/2026", companyname: "OCBC", carbonprice: "20 SGD/Tonnes", carbonquantity: "40 Tonnes", 
//         requestingreason: "Required", requesttype: "Sell"},
//     {requestdate: "1/11/2025", companyname: "Singtel", carbonprice: "30 SGD/Tonnes", carbonquantity: "50 Tonnes", 
//         requestingreason: "Automatic", requesttype: "Buy"},
//     {requestdate: "1/5/2025", companyname: "NCS", carbonprice: "30 SGD/Tonnes", carbonquantity: "50 Tonnes", 
//             requestingreason: "None", requesttype: "Sell"}
// ]




const data = [
  {
      "id": 1,
      "companyid": 2045,
      "requestorcompanyid": 2032,
      "carbonunitprice": 287.36,
      "carbonquantity": 356,
      "requestreason": "Request to purchase Carbon units",
      "requeststatus": "Approved",
      "requesttype": "Buy",
      "createddatetime": "2024-06-06T05:51:53+00:00",
      "updateddatetime": "2024-07-01T00:00:00+00:00",
      "companyaccount": {
          "companyname": "Farrell, Collins and Windler"
      }
  },
  {
      "id": 2,
      "companyid": 2032,
      "requestorcompanyid": 2045,
      "carbonunitprice": 379.88,
      "carbonquantity": 279,
      "requestreason": "Request to purchase Carbon units",
      "requeststatus": "Rejected",
      "requesttype": "Sell",
      "createddatetime": "2024-06-12T08:52:01+00:00",
      "updateddatetime": "2024-06-18T07:42:37+00:00",
      "companyaccount": {
          "companyname": "Rodriguez Inc"
      }
  },
  {
      "id": 4,
      "companyid": 2039,
      "requestorcompanyid": 2045,
      "carbonunitprice": 400,
      "carbonquantity": 703,
      "requestreason": "As discussed over the phone, request to purchase Carbon credits at $400.",
      "requeststatus": "Approved",
      "requesttype": "Buy",
      "createddatetime": "2024-07-31T02:52:17+00:00",
      "updateddatetime": "2024-08-01T01:23:23+00:00",
      "companyaccount": {
          "companyname": "Haag and Sons"
      }
  },
  {
      "id": 6,
      "companyid": 2043,
      "requestorcompanyid": 2041,
      "carbonunitprice": 293.79,
      "carbonquantity": 814,
      "requestreason": "Excess carbon in 2024.",
      "requeststatus": "Rejected",
      "requesttype": "Sell",
      "createddatetime": "2024-08-21T08:52:32+00:00",
      "updateddatetime": "2024-09-21T01:59:40+00:00",
      "companyaccount": {
          "companyname": "Abbott - Hane"
      }
  },
  {
      "id": 7,
      "companyid": 2037,
      "requestorcompanyid": 2044,
      "carbonunitprice": 124,
      "carbonquantity": 619,
      "requestreason": "Request to purchase Carbon units",
      "requeststatus": "Approved",
      "requesttype": "Sell",
      "createddatetime": "2024-08-24T11:52:40+00:00",
      "updateddatetime": "2024-09-04T12:30:31+00:00",
      "companyaccount": {
          "companyname": "Hansen - Daugherty"
      }
  },
  {
      "id": 10,
      "companyid": 2033,
      "requestorcompanyid": 2034,
      "carbonunitprice": 550,
      "carbonquantity": 1080,
      "requestreason": "Request to purchase Carbon units",
      "requeststatus": "Pending",
      "requesttype": "Sell",
      "createddatetime": "2024-12-19T08:53:04+00:00",
      "updateddatetime": "2024-12-19T00:00:00+00:00",
      "companyaccount": {
          "companyname": "Gleason LLC"
      }
  },
  {
      "id": 12,
      "companyid": 2000,
      "requestorcompanyid": 2025,
      "carbonunitprice": 500.25,
      "carbonquantity": 3.5,
      "requestreason": "Projected excess carbon credits for 2025",
      "requeststatus": "Pending",
      "requesttype": "Buy",
      "createddatetime": "2025-01-11T09:01:00+00:00",
      "updateddatetime": "2025-01-11T09:01:02+00:00",
      "companyaccount": {
          "companyname": "TTTTTTTTTTTTTechtrek is here"
      }
  },
  {
      "id": 3,
      "companyid": 2040,
      "requestorcompanyid": 2042,
      "carbonunitprice": 198,
      "carbonquantity": 284,
      "requestreason": "Request to purchase Carbon units",
      "requeststatus": "Approved",
      "requesttype": "Sell",
      "createddatetime": "2024-07-07T02:52:17+00:00",
      "updateddatetime": "2024-07-07T00:00:00+00:00",
      "companyaccount": {
          "companyname": "Hermiston, Hettinger and Streich"
      }
  },
  {
      "id": 5,
      "companyid": 2044,
      "requestorcompanyid": 2029,
      "carbonunitprice": 106,
      "carbonquantity": 478,
      "requestreason": "Request to purchase Carbon units",
        "requeststatus": "Rejected",
        "requesttype": "Buy",
        "createddatetime": "2024-08-17T05:52:25+00:00",
        "updateddatetime": "2024-08-18T09:12:39+00:00",
        "companyaccount": {
            "companyname": "Koelpin LLC"
        }
    },
    {
        "id": 18,
        "companyid": 2045,
        "requestorcompanyid": 2032,
        "carbonunitprice": 1000,
        "carbonquantity": 10,
        "requestreason": "Adding to delete",
        "requeststatus": "Pending",
        "requesttype": "Buy",
        "createddatetime": "2025-01-11T04:50:26.729079+00:00",
        "updateddatetime": "2025-01-11T04:50:26.729079+00:00",
        "companyaccount": {
            "companyname": "Farrell, Collins and Windler"
        }
    },
    {
        "id": 9,
        "companyid": 2037,
        "requestorcompanyid": 2027,
        "carbonunitprice": 183.48,
        "carbonquantity": 968,
        "requestreason": "Get more carbon creditssssss",
        "requeststatus": "Approved",
        "requesttype": "Buy",
        "createddatetime": "2024-09-18T05:52:56+00:00",
        "updateddatetime": "2024-09-18T00:00:00+00:00",
        "companyaccount": {
            "companyname": "Hansen - Daugherty"
        }
    },
    {
        "id": 8,
        "companyid": 2043,
        "requestorcompanyid": 2042,
        "carbonunitprice": 203.16,
        "carbonquantity": 502,
        "requestreason": "Request to purchase Carbon units",
        "requeststatus": "Approved",
        "requesttype": "Buy",
        "createddatetime": "2024-08-24T02:52:48+00:00",
        "updateddatetime": "2024-08-24T00:00:00+00:00",
        "companyaccount": {
            "companyname": "Abbott - Hane"
        }
    }
]


const OtherRequestPage = () => {
    const [overdueRequests, setOverdueRequests] = React.useState([])
    const [hasModal, setHasModal] = React.useState(false)
    const [checkedState, setCheckedState] = useState(new Array(data.length).fill(false))

    const handleOnChange = (position) => {
      const updatedCheckState = checkedState.map((val, key) => key == position ? !val : val)

      setCheckedState(updatedCheckState)
    }

    useEffect(() => {
        const date = new Date()
        const lastWeek = new Date()
        lastWeek.setDate(date.getDate() - 7)
        const overdue = data.filter((val) => lastWeek > new Date(val.createddatetime));
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
                            <td>{val.createddatetime}</td>
                            <td>{val.companyaccount.companyname}</td>
                            <td>{val.carbonunitprice}</td>
                            <td>{val.carbonquantity}</td>
                            <td>{val.requestreason}</td>
                            <td>{val.requesttype}</td>
                            <td><input type='checkbox' id={`custom-checkbox-${key}`} checked={checkedState[key]}
                            onChange={() => handleOnChange(key)}/></td>
                        </tr>
                    )
            })}
        </table>
        <button type="button" class="btn btn-success btn-lg m-5" onClick={() => console.log(checkedState)}>
            Accept
        </button>
        <button type="button" class="btn btn-danger btn-lg m-5" onClick={() => console.log(checkedState)}>
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