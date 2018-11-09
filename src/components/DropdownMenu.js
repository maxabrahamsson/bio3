import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class DropdownMenu extends Component {
  static muiName = "IconMenu";

  render() {
    return (
      <Menu
        iconButtonElement={
          <Button>
            <MoreVertIcon />
          </Button>
        }
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        targetOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <MenuItem linkButton={true} href="/#/">
          Portfolio
        </MenuItem>
        <MenuItem linkButton={true} href="/#/pdf/">
          Resume
        </MenuItem>
        <MenuItem linkButton={true} href="http://github.com/ayildirim/bio2">
          Get to the Source
        </MenuItem>
      </Menu>
    );
  }
}

export default DropdownMenu;
