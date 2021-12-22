import Counter from "./Counter";

const Counters = ({ counters, handleIcrease, handleDelete, resetCounter }) => {
  const counter = counters.map((counter) => {
    return (
      <Counter
        key={counter.id}
        counter={counter}
        handleIcrease={handleIcrease}
        handleDelete={handleDelete}
      />
    );
  });
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-success my-2"
        onClick={resetCounter}
      >
        Reset
      </button>
      {counter}
    </div>
  );
};

export default Counters;
