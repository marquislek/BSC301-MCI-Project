import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import plusIcon from '@iconify/icons-el/plus';


function Cross(props){
    const Color = props.Color;

    
    return <Icon icon={plusIcon} style={{ color: Color, fontSize: 45, padding: 3 }} />
}

export default Cross;