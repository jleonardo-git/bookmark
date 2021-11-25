import { Container, Typography } from "@material-ui/core";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

const Verify = () => {
  return (
    <Container>
      <Typography align="center" variant="h3">
        <WarningRoundedIcon fontSize="large" color="secondary" />
        Verify your email first!
      </Typography>
    </Container>
  );
};

export default Verify;
