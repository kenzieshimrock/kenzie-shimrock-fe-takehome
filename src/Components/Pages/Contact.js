import Shell from "./Shell";
import TextField from "@mui/material/TextField";
import { Container, CardContent, useTheme } from "@mui/material";
import { useState } from "react";
import submitContactAction from "../../Actions/Contact";
import store from "../../store";

function Contact() {
  const [contactEmail, setEmail] = useState(store.getState().contactEmail);

  const theme = useTheme();

  const properties = {
    nameContainer: {
      component: "div",
    },
    email: {
      type: "email",
      label: "email",
      required: true,
      value: contactEmail,
      onChange: (e) => setEmail(e.target.value),
    },
  };

  const styles = (theme) => ({
    cardContent: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      [theme.breakpoints.up("md")]: {
        justifyContent: "center",
      },
    },
    nameContainer: {
      marginBottom: "2rem",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },

    email: {
      width: "100%",
    },
  });

  return (
    <Shell
      heading="Contact Information"
      index={1}
      action={submitContactAction(contactEmail)}
      content={
        <CardContent sx={styles(theme).cardContent}>
          <Container>
            <TextField {...properties.email} sx={styles(theme).email} />
          </Container>
        </CardContent>
      }
    />
  );
}

export default Contact;
