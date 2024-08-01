import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MOneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [money, setMoney] = useContext(MOneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Mamshad"} />
        <Cousin name={"Rubiya"} />
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000 Taka</button>
    </div>
  );
};

export default Aunty;
