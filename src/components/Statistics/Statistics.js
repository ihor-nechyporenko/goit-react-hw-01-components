import DataItem from '../DataItem/DataItem';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import colorGenerator from './color-generator';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat__list}>
            {stats.map(({ id, label, percentage }) => (
                <li className={styles.item}
                    style={
                        { backgroundColor: colorGenerator() }
                    }
                    key={id}>
                    <DataItem
                        label={label}
                        percentage={percentage}
                    />
                </li>
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Statistics;