import Shell from "./Shell";
import store from "../../store";
function Policies() {
  const policies = store.getState().policies;
  return (
    <Shell
      heading="Policies"
      index={4}
      content={policies.map((policy) => (
        <p key={Math.random()}>{policy}</p>
      ))}
    />
  );
}

export default Policies;
