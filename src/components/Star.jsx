import React, { useState } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-el/star';




function Star(props){
    const Color = props.Color;

    
    return <Icon icon={starIcon} style={{ color: Color, fontSize: 45, padding: 3 }}/>
}

export default Star;