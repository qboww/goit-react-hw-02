import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <>
    <table className={css.transactionTable}>
      <thead className={css.transactionTableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionTableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transactionTableData}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default TransactionHistory;
