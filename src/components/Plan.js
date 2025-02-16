function Plan({ detail, active, onClick }) {
  // console.log(detail);
  return (
    <div
      className={`plan ${detail.selected ? "active" : ""}`}
      onClick={() => onClick(detail.plan)}
    >
      <div>
        <img src={detail.icon} alt={detail.plan} />
      </div>
      <div>
        <h3>{detail.plan}</h3>
        <p className="gray">
          ${active ? detail.price.yearly : detail.price.monthly}/
          <span>{active ? "yr" : "mo"}</span>
        </p>
        {active && <p className="free-months">2 months free</p>}
      </div>
    </div>
  );
}

export default Plan;
