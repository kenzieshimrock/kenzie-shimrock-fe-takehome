import Shell from "./Shell";
import {
  Container,
  CardContent,
  useTheme,
  TextField,
  Autocomplete,
} from "@mui/material";

function Business() {
  const theme = useTheme();

  const properties = {
    businessContainer: {
      component: "div",
      id: "name",
    },
    employees: {
      id: "number of employees",
      type: "number",
      label: "# of employees",
      required: true,
    },
    businessName: {
      id: "business name",
      type: "text",
      label: "business name",
      required: true,
      // color: "#3BCEAC",
    },
    zip: {
      id: "zip code",
      type: "text",
      label: "zip code",
      required: true,
    },
  };

  const styles = (theme) => ({
    cardContent: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "center",
      },
    },

    // -----------------------------------
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
    // ------------------------------------
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
        // width: "90%",
        flexDirection: "row",
      },
    },
  });

  const industries = [
    { type: "physician_office", label: "Physicians Offices", id: "621111" },
    { type: "law_firms", label: "Law Firms", id: "541110" },
    { type: "dentist_office", label: "Dentist Office", id: "621210" },
    { type: "insurance_office", label: "Insurance Office", id: "524298" },
    {
      type: "commercial_banks",
      label: "Commercial Banking",
      id: "522110",
    },
    { type: "landscape_care", label: "Landscape Care", id: "561730" },
    { type: "hvac", label: "HVAC", id: "238220" },
    {
      type: "real_estate_agencies",
      label: "Real Estate Agencies",
      id: "531210",
    },
    {
      type: "general_automotive_care",
      label: "General Automotive Care",
      id: "811111",
    },
    { type: "supermarkets", label: "Supermarkets", id: "445110" },
  ];

  return (
    <Shell
      heading="Business Information"
      index={2}
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
              sx={styles(theme).industry}
              options={industries}
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
