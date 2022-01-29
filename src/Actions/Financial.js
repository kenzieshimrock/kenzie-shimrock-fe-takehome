export default function submitFinancialsAction(
  grossAnnualSales,
  annualPayroll
) {
  return {
    type: "financial_submitted",
    payload: {
      grossAnnualSales: grossAnnualSales,
      annualPayroll: annualPayroll,
    },
  };
}
