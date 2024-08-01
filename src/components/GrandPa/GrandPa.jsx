import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Dad />
        <Uncle />
        <Aunty />
      </section>
    </div>
  );
};

export default GrandPa;
