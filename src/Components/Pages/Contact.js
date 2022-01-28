import Shell from "./Shell";
import TextField from "@mui/material/TextField";
import { Container, CardContent, useTheme } from "@mui/material";
import { useState } from "react";
function Contact() {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");

  const theme = useTheme();

  const properties = {
    nameContainer: {
      component: "div",
    },
    email: {
      type: "email",
      label: "email",
      required: true,
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    firstName: {
      type: "text",
      label: "first",
      required: true,
      value: firstName,
      onChange: (e) => setFirst(e.target.value),
    },
    lastName: {
      type: "text",
      label: "last",
      required: true,
      value: lastName,
      onChange: (e) => setLast(e.target.value),
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
    firstName: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1rem",
      },
      [theme.breakpoints.up("sm")]: {
        marginRight: "1rem",
        flex: 1,
      },
    },
    lastName: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
      },
      [theme.breakpoints.up("sm")]: {
        marginLeft: "1rem",
        flex: 1,
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
      values={{ firstName, lastName, email }}
      content={
        <CardContent sx={styles(theme).cardContent}>
          <Container
            sx={styles(theme).nameContainer}
            {...properties.nameContainer}
          >
            <TextField {...properties.firstName} sx={styles(theme).firstName} />
            <TextField {...properties.lastName} sx={styles(theme).lastName} />
          </Container>
          <Container>
            <TextField {...properties.email} sx={styles(theme).email} />
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
          </Container>
        </CardContent>
      }
    />
  );
}

export default Contact;
