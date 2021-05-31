import PropTypes from 'prop-types';
import styles from './DataItem.module.css';

const DataItem = ({ label, percentage }) => (
    <>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
    </>    
);

DataItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default DataItem;