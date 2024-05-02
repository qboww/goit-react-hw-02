import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <>
    <li className={css.friendListItem} key={id}>
      <img src={avatar} alt={name} width={100} />
      <p className={css.friendName}>{name}</p>

      <p
        className={clsx(css.friendStatus, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  </>
);

export default FriendListItem;
