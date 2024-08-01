import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Rafsan"} asset={asset} />
        <Cousin name={"Sohana"} />
      </section>
    </div>
  );
};

export default Uncle;
