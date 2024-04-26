import { faCartShopping, faPen, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

export const Links = [
  {
    name: "users",
    path: "users",
    icon: faUsers,
    role: ["1995"],
  },
  {
    name: "add user",
    path: "user/add",
    icon: faPlus,
    role: "1995",
  },
  {
    name: "writer",
    path: "writer",
    icon: faPen,
    role: ["1992", "1995"],
  },
  {
    name: "categories",
    path: "categories",
    icon: faCartShopping,
    role: ["1992", "1995"],
  },
];
