import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import bookmark from "../../images/bookmark.png";
import { session } from "../../actions/session";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token"))?.request?.accessToken
  );
  const navigate = useNavigate();
  const user = useSelector((state) => state.session);
  const name = `${user?.name} ${user?.surname}`;

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(session());
    navigate("/login");
  };

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token"))?.request?.accessToken);
  }, [token]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img
          className={classes.image}
          src={bookmark}
          alt="bookmark"
          height="60"
        />
        <Typography
          className={classes.heading}
          variant="h2"
          component={Link}
          to="/"
        >
          Bookmark
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {!token ? (
          user && (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.name}>
                {user?.name?.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          )
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
