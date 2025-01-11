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
    </div>
  );
};

export default Balances;
