import TransactionItem from '../TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <div className={styles.transaction}>
        <table className={styles.transaction__history}>
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
    </div>
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