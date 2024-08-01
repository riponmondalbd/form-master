import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const AssetContext = createContext("gold");
export const MOneyContext = createContext(1000);

const GrandPa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Money: {money}</p>
      <MOneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset} />
            <Uncle asset={asset} />
            <Aunty />
          </section>
        </AssetContext.Provider>
      </MOneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 * 1. create a context and export it
 * 2. add provider for the  context with a value. value could be anything
 * 3. useContext to access value in the context api
 */
