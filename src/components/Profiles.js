import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Call from "@material-ui/icons/Call";
import indigo from "@material-ui/core/colors/indigo";

import Email from "@material-ui/icons/Email";

type Props = {
  profiles: Array<Object>
};

const iconDefinitions = {
  link: null,
  phone: <Call color={indigo500} />,
  email: <Email color={indigo500} />
};
const indigo500 = indigo["500"];

class Profiles extends Component<Props> {
  static muiName = "List";

  render() {
    return (
      <div>
        <List>
          {this.props.profiles.map((item, i) => {
            return item.text ? (
              <ListItem
                href={item.type === "phone" ? null : item.linkTo}
                insetChildren={true}
                primaryText={item.linkTo.split("/").pop()}
                secondaryText={item.text}
                leftIcon={iconDefinitions[item.type]}
              />
            ) : (
              <Divider inset={true} />
            );
          })}
        </List>
      </div>
    );
  }
}

export default Profiles;
