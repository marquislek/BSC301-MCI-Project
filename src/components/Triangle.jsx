import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import triangleIcon from "@iconify/icons-mdi/triangle";

function Triangle(props) {
  const Color = props.Color;

  return (
    <Icon
      icon={triangleIcon}
      style={{ color: Color, fontSize: 50, padding: 4 }}
    />
  );
}

export default Triangle;
