import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    position: "sticky",
    top: "20px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  category: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  select: {
    margin: theme.spacing(1),
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonAdd: {
    margin: 10,
    width: "25%",
  },
}));
