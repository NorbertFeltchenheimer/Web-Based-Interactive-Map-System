import './Navigation.css'
import React from 'react';
import logo from "../../images/logo.svg"
import Button from '@mui/material/Button';
import {SvgIcon, TextField, Typography} from "@mui/material";
import Icon from '@mui/material/Icon';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import NMenu from "../NMenu/NMenu";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AccountMenu from "../AccountMenu/AccountMenu";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Search from "./Search/Search";
import {Link} from "react-router-dom";



class Navigation extends React.Component{
    logo ="./Logo1.png";



    render() {
        const {isFull,checkFull,openProviderMenu,openToolMenu} = this.props;
        return(
            <div id="navigation">
                <div id="leftBar">
                    <Button  id="Nbutton1">FindCity -></Button>
                    <Search getCoord={this.props.getCoord}/>
                    {/*<TextField id="outlined-basic" label="CityName" variant="outlined"  size="small"/>*/}
                </div>


                <div id="rightBar">
                    <IconButton >
                        <DeleteTwoToneIcon/>
                    </IconButton>
                    <FormControlLabel control={<Switch checked={isFull} onChange={checkFull} name="isFull"/>}   />
                    <div id="fullScreenSwitchIcon">
                        <OpenInFullIcon style={{fontSize:"x-large"}}/>
                    </div>
                    <div id="AccountMenu">
                        <AccountMenu/>
                    </div>
                    <div id="menu">
                        <NMenu openProviderMenu={openProviderMenu} openToolMenu={openToolMenu}/>
                    </div>
                    <Link to={"/auth"} id={"login"}>LOGIN</Link>



                </div>
            </div>
        )
    }

}

export  default  Navigation;
