import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import circleIcon from '@iconify/icons-fa-solid/circle';



function Circle(props){
    const Color = props.Color;

    
    return <Icon icon={circleIcon} style={{ color: Color, fontSize: 50, padding: 3 }}/>
}

export default Circle;