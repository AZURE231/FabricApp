import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Supplier",
        path: "/supplier",
        icon: <BsIcons.BsShop />,
        cName: "nav-text",
    },
    {
        title: "Search material",
        path: "/searchMaterial",
        icon: <AiIcons.AiOutlineFileSearch />,
        cName: "nav-text",
    },
    {
        title: "Order Report",
        path: "/orderReport",
        icon: <TbIcons.TbReportMoney />,
        cName: "nav-text",
    },
    {
        title: "Logout",
        path: "/",
        icon: <AiIcons.AiOutlineLogout />,
        cName: "nav-text",
    },
];
