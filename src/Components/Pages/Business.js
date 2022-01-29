import Shell from "./Shell";
import {
  Container,
  CardContent,
  useTheme,
  TextField,
  Autocomplete,
} from "@mui/material";
import submitBusinessAction from "../../Actions/Business";
import store from "../../store";

import { useState } from "react";
function Business() {
  /// theme
  const theme = useTheme();

  /// local states
  const [businessName, setBusiness] = useState(store.getState().businessName);
  const [industryId, setIndustry] = useState(store.getState().industryId);
  const [numEmployees, setEmployeeNum] = useState(
    store.getState().numEmployees
  );
  const [zip, setZip] = useState(store.getState().locations[0].zip);

  /// properties
  const properties = {
    businessContainer: {
      component: "div",
      id: "name",
    },
    employees: {
      id: "number of employees",
      type: "text",
      label: "# of employees",
      value: numEmployees,
      required: true,
      onChange: (e) => setEmployeeNum(e.target.value),
    },
    businessName: {
      id: "business name",
      type: "text",
      label: "business name",
      value: businessName,
      required: true,
      onChange: (e) => setBusiness(e.target.value),
    },
    zip: {
      id: "zip code",
      type: "text",
      label: "zip code",
      value: zip,
      required: true,
      onChange: (e) => setZip(e.target.value),
    },
    industry: {
      id: "industry",
      onChange: (e, value) => setIndustry(value.id),
    },
  };

  /// styles
  const styles = (theme) => ({
    cardContent: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "center",
      },
    },

    businessContainer: {
      display: "flex",
      flexDirection: "column",

      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    },
    businessName: {
      marginBottom: "1rem",
      color: "#3BCEAC",
      [theme.breakpoints.up("sm")]: {
        marginRight: "1rem",
        flex: 2,
      },
    },
    employees: {
      [theme.breakpoints.up("sm")]: {
        width: "40%",
      },
    },

    industry: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1rem",
      },
      [theme.breakpoints.up("sm")]: {
        flex: 2,
        marginRight: "1rem",
      },
    },
    industryContainer: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
      },
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
  });

  /// industry information
  const industries = [
    { label: "Plumber", id: "10537" },
    { label: "Software Developer", id: "10391" },
    { label: "Lawyer", id: "10415" },
    { label: "Handyman", id: "10109" },
  ];

  return (
    <Shell
      heading="Business Information"
      index={2}
      action={submitBusinessAction(businessName, numEmployees, zip, industryId)}
      content={
        <CardContent sx={styles(theme).cardContent}>
          <Container
            {...properties.businessContainer}
            sx={styles(theme).businessContainer}
          >
            <TextField
              {...properties.businessName}
              sx={styles(theme).businessName}
            />
            <TextField {...properties.employees} sx={styles(theme).employees} />
          </Container>

          <Container sx={styles(theme).industryContainer}>
            <Autocomplete
              {...properties.industry}
              sx={styles(theme).industry}
              options={industries}
              isOptionEqualToValue={(option, value) =>
                option.label === value.label
              }
              renderInput={(params) => (
                <TextField {...params} label="industry" />
              )}
            />
            <TextField {...properties.zip} sx={styles(theme).zip} />
          </Container>
        </CardContent>
      }
    />
  );
}

export default Business;
