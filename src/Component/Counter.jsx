const Counter = ({ counter, handleIcrease, handleDelete }) => {
  classesBadge();

  return (
    <div className="row my-2">
      <div className="col">
        <span style={{ fontSize: "20px" }} className={classesBadge()}>
          {counter.value === 0 ? "Zero" : counter.value}
        </span>

        <button
          type="button"
          className="btn btn-secondary m-2 "
          onClick={() => handleIcrease(counter)}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  function classesBadge() {
    let classes = "badge ";
    classes += counter.value === 0 ? "bg-warning" : " bg-secondary";
    return classes;
  }
};

export default Counter;
