import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Bookmark from "./Bookmark/Bookmark";
import useStyles from "./styles";

const Bookmarks = ({ setCurrentId }) => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const classes = useStyles();

  return !bookmarks.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {bookmarks.map((bookmark) => (
        <Grid key={bookmark?.id} item xs={12} sm={6} md={6}>
          <Bookmark bookmark={bookmark} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Bookmarks;
