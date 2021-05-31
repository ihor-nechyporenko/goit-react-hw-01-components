import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => (
    <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
);

TransactionItem.protoTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;