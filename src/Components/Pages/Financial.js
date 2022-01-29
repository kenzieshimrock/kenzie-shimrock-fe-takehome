import Shell from "./Shell";
import {
  Container,
  CardContent,
  useTheme,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import submitFinancialsAction from "../../Actions/Financial";
import store from "../../store";

function Financial() {
  const theme = useTheme();
  const [sales, setSales] = useState(store.getState().grossAnnualSales);
  const [payroll, setPayroll] = useState(store.getState().annualPayroll);

  const properties = {
    selectionsContainer: {
      component: "div",
    },
    salesSelect: {
      labelId: "annual sales",
      id: "annual sales",
      label: "Annual Sales",
      value: sales,
      onChange: (e) => setSales(e.target.value),
    },
    payrollSelect: {
      labelId: "annual payroll",
      id: "annual payroll",
      label: "Annual Payroll",
      value: payroll,
      onChange: (e) => setPayroll(e.target.value),
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
    selectionsContainer: {
      display: "flex",
      flexDirection: "column",
    },
    annualSales: {
      marginBottom: "1rem",
      color: "#3BCEAC",
      [theme.breakpoints.up("sm")]: {
        marginRight: "1rem",
        flex: 2,
      },
    },
    salesForm: { marginBottom: "1rem" },
    payrollForm: { marginBottom: "1rem" },
    annualPayroll: {
      [theme.breakpoints.up("sm")]: {
        width: "40%",
      },
    },
  });

  return (
    <Shell
      heading="Financial Information"
      index={3}
      action={submitFinancialsAction(sales, payroll)}
      content={
        <CardContent sx={styles(theme).cardContent}>
          <Container
            {...properties.selectionsContainer}
            sx={styles(theme).selectionsContainer}
          >
            <FormControl fullWidth sx={styles(theme).salesForm}>
              <InputLabel>Annual Sales</InputLabel>
              <Select {...properties.salesSelect}>
                <MenuItem value={50000}>$50,000</MenuItem>
                <MenuItem value={75000}>$75,000</MenuItem>
                <MenuItem value={100000}>$100,000</MenuItem>
                <MenuItem value={150000}>$150,000</MenuItem>
                <MenuItem value={200000}>$200,000</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={styles(theme).payrollForm}>
              <InputLabel>Annual Payroll</InputLabel>
              <Select {...properties.payrollSelect}>
                <MenuItem value={50000}>$50,000</MenuItem>
                <MenuItem value={75000}>$75,000</MenuItem>
                <MenuItem value={100000}>$100,000</MenuItem>
                <MenuItem value={150000}>$150,000</MenuItem>
                <MenuItem value={200000}>$200,000</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </CardContent>
      }
    />
  );
}

export default Financial;
