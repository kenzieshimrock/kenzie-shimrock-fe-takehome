export default function getPolicy(policies) {
  return {
    type: "get_policies",
    payload: {
      policies: [...policies],
    },
  };
}
