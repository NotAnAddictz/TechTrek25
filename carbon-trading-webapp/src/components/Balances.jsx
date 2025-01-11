
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
          <tr>
            <td>{cash}</td>
            <td>{credit}</td>
            <td>{cash}</td>
            <td>{credit}</td>
            <td>{cash}</td>
            <td>{credit}</td>
          </tr>
        </tbody>
      </table>
      <button style={{backgroundColor: "green", color: "white", borderRadius: "5px", margin: "100px"}}>
            Insert
        </button>
        <button style={{backgroundColor: "orange", color: "white", borderRadius: "5px"}}>
            Edit
        </button>
        <button style={{backgroundColor: "red", color: "white", borderRadius: "5px"}}>
            Delete
        </button>
    </div>
  );
};

export default Balances
