export default function submitBusinessAction(
  businessName,
  numEmployees,
  zip,
  industryId
) {
  return {
    type: "business_submitted",
    payload: {
      businessName: businessName,
      numEmployees: numEmployees,
      industryId: industryId,
      zip: zip,
    },
  };
}
