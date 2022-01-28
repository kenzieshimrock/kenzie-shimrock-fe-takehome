import { Card, CardHeader, CardActions, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { routes } from "./../App/App";
function Shell({ heading, content, subheading, index, values }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  function nextClick(index, values) {
    navigate(routes[index + 1].path);
    console.log(index, values);
  }

  const properties = (theme) => ({
    container: {
      component: "div",
    },
    card: {
      component: "div",
      variant: "outlined",
    },
    cardHeader: {
      titleTypographyProps: {
        component: "h1",
      },
      subheaderTypographyProps: {
        component: "h2",
      },
    },
    button: {
      variant: "outlined",
      size: "medium",
    },
  });

  const styles = (theme) => ({
    card: {
      p: 1,
      height: "60%",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderColor: theme.palette.primary.main,
      [theme.breakpoints.up("sm")]: {
        width: "85%",
      },
      [theme.breakpoints.up("md")]: {
        p: 5,
        width: "80%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "60%",
      },
    },
    cardHeader: {
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: theme.palette.primary.main,
      },
      h2: {
        color: theme.palette.secondary.main,
        marginTop: ".5rem",
      },
    },
    backButton: {
      color: theme.palette.blackWhite.main,
      borderColor: theme.palette.blackWhite.main,
      marginRight: "1rem",
    },
    nextButton: {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    buttonsContainer: {
      marginTop: "1rem",
    },
  });

  return (
    <Card sx={styles(theme).card} {...properties(theme).card}>
      <CardHeader
        sx={styles(theme).cardHeader}
        {...properties(theme).cardHeader}
        title={heading}
        subheader={subheading}
      ></CardHeader>
      {content}
      <CardActions sx={styles(theme).buttonsContainer}>
        {location.pathname === "/intro" || location.pathname === "/" ? (
          ""
        ) : (
          <Button
            onClick={() => navigate(routes[index - 1].path)}
            {...properties(theme).button}
            sx={styles(theme).backButton}
          >
            Back
          </Button>
        )}

        {location.pathname === "/policies" ? (
          ""
        ) : (
          <Button
            onClick={() => nextClick(index, values)}
            {...properties(theme).button}
            sx={styles(theme).nextButton}
          >
            Next
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Shell;
