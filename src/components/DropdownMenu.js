import React, { Component } from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

class DropdownMenu extends Component {
  static muiName = "IconMenu";

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        targetOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <MenuItem primaryText="Portfolio" linkButton={true} href="/#/" />
        <MenuItem primaryText="Resume" linkButton={true} href="/#/pdf/" />
        <MenuItem
          primaryText="Get to the Source"
          linkButton={true}
          href="http://github.com/ayildirim/bio2"
        />
      </IconMenu>
    );
  }
}

export default DropdownMenu;
