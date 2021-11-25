import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid, Typography } from "@material-ui/core";

import { getBookmarks } from "../../actions/bookmarks";
import { getCategories } from "../../actions/categories";
import { session } from "../../actions/session";
import Bookmarks from "../Bookmarks/Bookmarks";
import Form from "../Form/Form";
import bookmark from "../../images/bookmark.gif";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getBookmarks());
    dispatch(getCategories());
    dispatch(session());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        {token ? (
          <>
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
          </>
        ) : (
          <Grid container justifyContent="center">
            <Typography align="center" color="textPrimary" variant="h3">
              📖 Welcome to Bookmark! 🔖
            </Typography>
            <img src={bookmark} alt="bookmark" />
          </Grid>
        )}
      </Container>
    </Grow>
  );
};

export default Home;
