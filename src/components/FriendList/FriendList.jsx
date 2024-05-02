import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return <FriendListItem key={id} id={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </ul>
  </>
);

export default FriendList;
