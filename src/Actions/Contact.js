export default function submitContactAction(email) {
  return {
    type: "contact_submitted",
    payload: {
      contactEmail: email,
    },
  };
}
