import React from "react";
import { MyListItem } from "./navigationitem";
import { ListAtom } from "../../atoms/list";

interface NavigationListProps {
  items: {
    path: string;
    icon: React.ReactElement;
    activeicon?: React.ReactElement;
    text: string;
  }[];
  activePath: string;
}

const MyList: React.FC<NavigationListProps> = ({ items, activePath }) => (
  <ListAtom sx={{ paddingTop: "0px" }}>
    {items.map((item,) => (
      <MyListItem
        key={item.text}
        path={item.path}
        icon={
          item.activeicon && activePath === item.path
            ? item.activeicon
            : item.icon
        }
        text={item.text}
        isActive={activePath === item.path}
      />
    ))}
  </ListAtom>
);

export default MyList;