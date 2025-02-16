function AddOnServices({ service, active }) {
  return (
    <li className="summary-list">
      <span className="gray">{service.addOn}</span>
      <p className="free-months">{`+$${
        active ? service.addOnPrice.yearly : service.addOnPrice.monthly
      }/${active ? "yr" : "mo"}`}</p>
    </li>
  );
}

export default AddOnServices;
