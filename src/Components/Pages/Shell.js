import { Card, CardHeader, CardActions, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { routes } from "./../App/App";
import { useDispatch } from "react-redux";
import store from "../../store";
import axios from "axios";
import getPolicy from "../../Actions/Policies";

function Shell({ heading, content, subheading, index, action }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  /// handles dispatching actions when user clicks the next button
  /// as well as handles making POST request for policy data.
  function nextClick(index, action) {
    /// disable dispatch action on "next" button on intro page
    if (index !== 0) dispatch(action);

    /// Checks route index and makes POST request if user is
    /// on financial page (all information for post request)
    /// should be stored in store at this point.
    if (index === 3) {
      axios({
        method: "post",
        url: "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        data: store.getState(),
        headers: {
          Authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          let policies = response.data.availablePolicyTypes;

          console.log(policies);
          dispatch(getPolicy(policies));
        })
        .then(() => navigate(routes[index + 1].path));
    } else {
      navigate(routes[index + 1].path);
    }
  }

  /// properties
  const properties = {
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
  };

  /// styles
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
    <Card sx={styles(theme).card} {...properties.card}>
      <CardHeader
        sx={styles(theme).cardHeader}
        {...properties.cardHeader}
        title={heading}
        subheader={subheading}
      ></CardHeader>
      {content}
      <CardActions sx={styles(theme).buttonsContainer}>
        {location.pathname === "/contact" ||
        location.pathname === "/financial" ||
        location.pathname === "/business" ||
        location.pathname === "/policies" ? (
          <Button
            onClick={() => navigate(routes[index - 1].path)}
            {...properties.button}
            sx={styles(theme).backButton}
          >
            Back
          </Button>
        ) : (
          ""
        )}

        {location.pathname === "/policies" ? (
          ""
        ) : (
          <Button
            onClick={() => nextClick(index, action)}
            {...properties.button}
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
