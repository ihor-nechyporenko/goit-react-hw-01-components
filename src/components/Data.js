import PropTypes from 'prop-types';

const DataItem = ({ label, percentage }) => (
    <div>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
    </div>    
);

DataItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default DataItem;