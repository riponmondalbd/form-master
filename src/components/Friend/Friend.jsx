import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>Lovely: {gift}</p>
    </div>
  );
};

export default Friend;
