import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
    <table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <TransactionItem
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
    .isRequired,
}



export default TransactionHistory;