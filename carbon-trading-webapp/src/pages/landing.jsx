import InsertButton from "../components/InsertButton";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

const user = "2045";

function Balances() {
  const [company, setCompany] = useState(["DBS"]);
  const [cash, setCash] = useState(["1000"]);
  const [credit, setCredit] = useState(["234"]);
  const [data, setData] = useState([
    {
      id: 7,
      companyid: 2037,
      requestorcompanyid: 2044,
      carbonunitprice: 124,
      carbonquantity: 619,
      requestreason: "Request to purchase Carbon units",
      requeststatus: "Approved",
      requesttype: "Sell",
      createddatetime: "2024-08-24T11:52:40+00:00",
      updateddatetime: "2024-09-04T12:30:31+00:00",
    },
    {
      id: 9,
      companyid: 2037,
      requestorcompanyid: 2027,
      carbonunitprice: 183.48,
      carbonquantity: 968,
      requestreason: "Get more carbon creditssssss",
      requeststatus: "Approved",
      requesttype: "Buy",
      createddatetime: "2024-09-18T05:52:56+00:00",
      updateddatetime: "2024-09-18T00:00:00+00:00",
    },
  ]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/outstanding/requestorCompany/" + { user })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handleCheckboxChange = (index) => {
    const rowData = data[index];
    console.log(rowData);
  };

  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Cash Balance</th>
              <th scope="col">Credit Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cash}</td>
              <td>{credit}</td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Request Date</th>
              <th scope="col">Company Name</th>
              <th scope="col">Carbon Price (SGD/Tonnes)</th>
              <th scope="col">Carbon Quantity</th>
              <th scope="col">Requesting Reason</th>
              <th scope="col">Request Type (Buy/Sell)</th>
              <th scope="col">Request Status </th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => (
              <tr key={key}>
                <td>{val.createddatetime}</td>
                <td>{val.companyid}</td>
                <td>{val.carbonunitprice}</td>
                <td>{val.carbonquantity}</td>
                <td>{val.requestreason}</td>
                <td>{val.requesttype}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(key)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <InsertButton />
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
}

export default Balances;
