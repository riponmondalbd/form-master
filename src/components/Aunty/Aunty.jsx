import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Mamshad"} />
        <Cousin name={"Rubiya"} />
      </section>
    </div>
  );
};

export default Aunty;