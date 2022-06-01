import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const ICON_SETTINGS = [
  { hrefName: "#header", iconName: <AiOutlineHome /> },
  { hrefName: "#about", iconName: <AiOutlineUser /> },
  { hrefName: "#experience", iconName: <BiBook /> },
  { hrefName: "#services", iconName: <RiServiceLine /> },
  { hrefName: "#contact", iconName: <BiMessageSquareDetail /> },
];

export default ICON_SETTINGS;
