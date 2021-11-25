import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-redux";

import { deleteBookmark, getBookmarks } from "../../../actions/bookmarks";

const Bookmark = ({ bookmark, setCurrentId }) => {
  const categories = useSelector((state) => state.categories);
  const category = categories?.find(
    (c) => c?.id === bookmark?.categoryId
  )?.name;
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = () => {
    dispatch(deleteBookmark(bookmark?.id));
    dispatch(getBookmarks());
  };

  return (
    <Card className={classes.card}>
      <iframe width="330" height="315" src={bookmark.url}></iframe>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {bookmark?.shortDescription}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {category}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => setCurrentId(bookmark?.id)}
        >
          <EditIcon fontSize="small" />
          EDIT
        </Button>
        <Button size="small" color="secondary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Bookmark;
