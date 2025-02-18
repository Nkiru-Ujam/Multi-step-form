import { useContext } from "react";
import { FormContext } from "./FormProvider";

function AddOnsList({ addOns }) {
  const { active, onAddOnClick } = useContext(FormContext);
  return (
    <div className={`addOns-list ${addOns.completed ? "active" : ""}`}>
      <div className="check-cont">
        <input
          type="checkbox"
          checked={addOns.completed}
          onChange={() => {
            onAddOnClick(addOns.addOn);
          }}
          className="check-input"
        />
        <div>
          <h3 className="free-months">{addOns.addOn}</h3>
          <p className="gray">{addOns.advice}</p>
        </div>
      </div>

      <div className="addon-text">
        <p>
          +${active ? addOns.addOnPrice.yearly : addOns.addOnPrice.monthly}/
          <span>{active ? "yr" : "mo"}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default AddOnsList;
