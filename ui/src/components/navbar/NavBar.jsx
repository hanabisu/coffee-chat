import React, {useContext} from "react";
import { Logout } from "../login/Logout"
import { UserContext } from "../../Context";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { theme } from '../../App';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor:theme.palette.primary.main
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'left',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    backgroundColor: 'white',
  },
}))

const NavBar = () => {
  let user = useContext(UserContext);
  console.log(user.currentUser)
  const classes = useStyles(theme);
    return (
      <AppBar className={classes.appBar}  position="static" color="inherit">
      <div>
        <Typography  className={classes.heading} component={Link} to="/" variant="h2" align="center">coffee chats</Typography>
      </div>
      <div className={classes.profile}>
        {/* <Avatar alt={user.result.name} src={user.result.imageUrl}>
          avatar
        </Avatar> */}
        <Typography className={classes.userName}>
          {user.currentUser.profile.name}
        </Typography>
      </div>
      <div className={classes.logout}>
        <Logout/>
      </div>

    </AppBar>
    )
}

export default NavBar;
