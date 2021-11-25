import { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { login } from "../../actions/auth";
import { session } from "../../actions/session";

const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    userNameOrEmailAddress: "",
    password: "",
    rememberClient: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData, navigate));
    dispatch(session());
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.check });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Login</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <TextField
                name="userNameOrEmailAddress"
                label="Username or Email address"
                variant="outlined"
                required
                type="email"
                fullWidth
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                required
                type="password"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid className={classes.checkbox} item xs={6} md={12}>
              <Checkbox
                name="rememberClient"
                label="Remember me?"
                onChange={handleCheck}
              />
              <Typography variant="body1">Remember me?</Typography>
            </Grid>
          </Grid>
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
