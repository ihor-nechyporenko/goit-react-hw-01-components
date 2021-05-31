import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => (
    <ul className={styles.friend__list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <li className={styles.item} key={id.toString()}>
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendList;