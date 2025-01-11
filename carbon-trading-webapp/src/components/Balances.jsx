import InsertButton from "./InsertButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
const data = [
  {
    requestdate: "1/11/2015",
    companyname: "UOB",
    carbonprice: "10 SGD/Tonnes",
    carbonquantity: "20 Tonnes",
    requestingreason: "Need credits",
    requesttype: "Buy",
  },
  {
    requestdate: "04/09/2018",
    companyname: "OCBC",
    carbonprice: "20 SGD/Tonnes",
    carbonquantity: "40 Tonnes",
    requestingreason: "Required",
    requesttype: "Sell",
  },
  {
    requestdate: "1/11/2022",
    companyname: "Singtel",
    carbonprice: "30 SGD/Tonnes",
    carbonquantity: "50 Tonnes",
    requestingreason: "Automatic",
    requesttype: "Buy",
  },
];

const Balances = ({ company, cash, credit }) => {
  return (
    <div>
      {" "}
      {company}
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
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.requestdate}</td>
                <td>{val.companyname}</td>
                <td>{val.carbonprice}</td>
                <td>{val.carbonquantity}</td>
                <td>{val.requestingreason}</td>
                <td>{val.requesttype}</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <InsertButton />
      <EditButton />
      <DeleteButton />
    </div>
  );
};

export default Balances;
