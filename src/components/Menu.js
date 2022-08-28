import '../styles/menu.scss';
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Actfeed } from "../images/actfeed.svg";
import profileicon from "../images/profile.jpg"
//import ProfileIcon from "./ProfileIcon";
//import image from "../images/profile.jpg";

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Actfeed className="icon" />
      <img className="profileicons" src={profileicon} alt="profile pic"></img>
    </div>
  );
}

export default Menu;