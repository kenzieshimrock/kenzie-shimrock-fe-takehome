const initialState = {
  contactEmail: "",
  businessName: "",
  grossAnnualSales: 50000,
  annualPayroll: 50000,
  numEmployees: 0,
  industryId: "",
  locations: [
    {
      zip: "",
    },
  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "contact_submitted": {
      return {
        ...state,
        contactEmail: action.payload.contactEmail,
      };
    }
    case "business_submitted": {
      return {
        ...state,
        businessName: action.payload.businessName,
        numEmployees: action.payload.numEmployees,
        industryId: action.payload.industryId,
        locations: [
          {
            zip: action.payload.zip,
          },
        ],
      };
    }
    case "financial_submitted": {
      return {
        ...state,
        grossAnnualSales: action.payload.grossAnnualSales,
        annualPayroll: action.payload.annualPayroll,
      };
    }
    case "get_policies": {
      return {
        ...state,
        policies: [...action.payload.policies],
      };
    }

    default:
      return state;
  }
}
