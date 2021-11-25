import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Bookmark from "./Bookmark/Bookmark";
import useStyles from "./styles";

const Bookmarks = ({ setCurrentId }) => {
  const user = useSelector((state) => state.session);
  const bookmarks = useSelector((state) => state.bookmarks)?.filter((b) => {
    if (user?.id !== 3) {
      return b?.creatorUserId === user?.id;
    }
    return user;
  });
  const classes = useStyles();

  return !bookmarks?.length ? (
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
          <Bookmark
            key={bookmark?.id}
            bookmark={bookmark}
            setCurrentId={setCurrentId}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Bookmarks;
