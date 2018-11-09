import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import CommunicationCall from "material-ui/svg-icons/communication/call";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import { indigo500 } from "material-ui/styles/colors";
import CommunicationEmail from "material-ui/svg-icons/communication/email";

type Props = {
  profiles: Array<Object>
};
const iconDefinitions = {
  link: null,
  phone: <CommunicationCall color={indigo500} />,
  email: <CommunicationEmail color={indigo500} />
};

class Profiles extends Component<Props> {
  static muiName = "List";

  render() {
    return (
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
    );
  }
}

export default Profiles;
