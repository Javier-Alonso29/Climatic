const Card = ({ description, temp, temp_max, temp_min }) => {
  return (
    <div className="card" style={{ width: "376px", height: "158px" }}>
      <div className="card-body">
        <div className="card-subtitle mb-2 text-body-secondary">
          {description}
        </div>
        <div className="card-title">{temp}</div>
        <div className="card-text">
          <div className="row">
            <div className="col-6">
              <span className="text-body-secondary">min</span>
              <p>{temp_min}</p>
            </div>
            <div className="col-6">
              <span className="text-body-secondary">max</span>
              <p>{temp_max}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
