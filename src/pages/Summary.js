import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddOnServices from "../components/AddOnServices";
import { FormContext } from "../components/FormProvider";
import Button from "../components/Button";

function Summary() {
  const [summaryData, setSummaryData] = useState([]);
  const navigate = useNavigate();
  const { details, addOnsDetails, onAddOns, active, onActive } =
    useContext(FormContext);
  const addOnServices = summaryData.slice(1);

  function handleNavigate() {
    navigate("/plans");
    onActive(false);
    onAddOns((addOns) =>
      addOns.map((addon) => ({ ...addon, completed: false }))
    );
  }

  function handlePrev() {
    navigate("/add-ons");
  }

  function handleConfirm() {
    navigate("/summary/confirm");
  }

  const plans = details.filter((detail) => detail.selected === true);
  if (plans.length === 0) plans.push(details[0]);
  const addOns = addOnsDetails.filter((addon) => addon.completed === true);
  if (addOns.length === 0) addOns.push(addOnsDetails[0]);

  if (summaryData.length === 0) {
    setSummaryData((summary) => [...summary, ...plans, ...addOns]);
  }
  const newPlan = summaryData.at(0);
  if (summaryData.length === 0) {
    return newPlan;
  }

  const price = active ? newPlan.price.yearly : newPlan.price.monthly;
  const addOnPrice = addOnServices
    .map((add) => (active ? add.addOnPrice.yearly : add.addOnPrice.monthly))
    .reduce((acc, cur) => acc + cur, 0);
  const total = price + addOnPrice;

  return (
    <>
      <div className="form-cont">
        <h1>Finishing Up</h1>
        <p className="desc">
          Double-check if everything looks OK before confirming
        </p>

        <div className="summary-cont">
          <div className="summary-plan">
            <div>
              <h3 className="free-months">{`${newPlan.plan} (${
                active ? "Yearly" : "Monthly"
              })`}</h3>
              <p onClick={handleNavigate} className="change">
                Change
              </p>
            </div>
            <h3 className="free-months">{`$${
              active ? newPlan.price.yearly : newPlan.price.monthly
            }/${active ? "yr" : "mo"}`}</h3>
          </div>

          <ul>
            {addOnServices.map((service) => (
              <AddOnServices
                service={service}
                key={service.addOn}
                active={active}
              />
            ))}
          </ul>
        </div>

        <div className="total">
          <span className="gray">Total per month</span>
          <h3>
            +${total}/{active ? "yr" : "mo"}
          </h3>
        </div>

        <div className="buttons">
          <Button onClick={handlePrev} type="prev-btn">
            Go Back
          </Button>
          <Button onClick={handleConfirm} type="confirm-btn">
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Summary;
