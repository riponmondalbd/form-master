import { useContext } from "react";
import { MOneyContext } from "../GrandPa/GrandPa";

const Brother = () => {
  const [money] = useContext(MOneyContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>Grandpa: {money}</p>
    </div>
  );
};

export default Brother;
