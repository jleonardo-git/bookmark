import { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getBookmarks } from "./actions/bookmarks";
import { getCategories } from "./actions/categories";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Form from "./components/Form/Form";
import bookmark from "./images/bookmark.png";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
    dispatch(getCategories());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img
          className={classes.image}
          src={bookmark}
          alt="bookmark"
          height="60"
        />
        <Typography className={classes.heading} variant="h2" align="center">
          Bookmark
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Bookmarks setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
