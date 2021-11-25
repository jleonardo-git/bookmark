import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import {
  createBookmark,
  updateBookmark,
  getBookmarks,
} from "../../actions/bookmarks";
import { getCategories, createCategory } from "../../actions/categories";

const Form = ({ currentId, setCurrentId }) => {
  const bookmarkData = useSelector((state) =>
    state.bookmarks.find((b) => b?.id === currentId)
  );
  const categories = useSelector((state) => state.categories);
  const [bookmark, setBookmark] = useState({
    url: "",
    shortDescription: "",
    categoryId: "",
  });
  const [category, setCategory] = useState({
    name: "",
  });
  const [toggleCategory, setToggleCategory] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookmarkData) {
      setBookmark(bookmarkData);
    }
    if (categories) {
      dispatch(getCategories());
    }
  }, [bookmarkData, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateBookmark(currentId, bookmark));
    } else {
      dispatch(createBookmark(bookmark));
    }
    clear();
    dispatch(getBookmarks());
  };

  const handleSubmitCategory = (e) => {
    e.preventDefault();

    dispatch(createCategory(category));
    clearCategory();
    dispatch(getCategories());
  };

  const clear = () => {
    setCurrentId(null);
    setBookmark({
      url: "",
      shortDescription: "",
      categoryId: "",
    });
  };
  const clearCategory = () => {
    setCategory({ name: "" });
    setToggleCategory(false);
  };

  const handleChange = (e) => {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  };

  const handleChangeCategory = (e) => {
    setCategory({ [e.target.name]: e.target.value });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} Bookmark
        </Typography>
        <TextField
          name="url"
          variant="outlined"
          label="URL"
          fullWidth
          value={bookmark.url}
          onChange={handleChange}
        />
        <TextField
          name="shortDescription"
          variant="outlined"
          label="Short Description"
          fullWidth
          value={bookmark.shortDescription}
          onChange={handleChange}
        />
        <FormControl className={classes.select} fullWidth>
          <InputLabel id="categories" variant="outlined">
            Category
          </InputLabel>
          <Select
            name="categoryId"
            variant="outlined"
            labelId="categories"
            id="categories-select"
            value={bookmark.categoryId}
            label="Category"
            fullWidth
            onChange={handleChange}
          >
            {categories?.map((category) => {
              return (
                <MenuItem key={category?.id} value={category?.id}>
                  {category?.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div className={`${classes.root} ${classes.category}`}>
          <Button
            className={classes.buttonSubmit}
            onClick={() => setToggleCategory(!toggleCategory)}
          >
            Create new Category?
          </Button>
        </div>
        {toggleCategory && (
          <div
            className={`${classes.root} ${classes.category}`}
            onSubmit={handleSubmitCategory}
          >
            <TextField
              name="name"
              variant="outlined"
              label="Create New Category"
              value={category.name}
              autoComplete="off"
              onChange={handleChangeCategory}
            />
            <Button
              className={classes.buttonAdd}
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSubmitCategory}
            >
              <AddIcon fontSize="small" />
              Add
            </Button>
          </div>
        )}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          disabled={toggleCategory}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          disabled={toggleCategory}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
