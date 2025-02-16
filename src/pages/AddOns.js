import { useNavigate } from "react-router-dom";
import AddOnsList from "../components/AddOnsList";
import Button from "../components/Button";
import { useContext } from "react";
import { FormContext } from "../components/FormProvider";
// { active, onActive, addOnsDetails, handleAddOnClick }
function AddOns() {
  const navigate = useNavigate();
  const { onActive, addOnsDetails } = useContext(FormContext);

  function goBack() {
    onActive(false);
    navigate("/plans");
  }

  return (
    <div className="form-cont">
      <h1>Pick add ons</h1>
      <p className="desc">Add-ons help enhance your gaming experience</p>

      <div className="addons">
        {addOnsDetails.map((addOns) => (
          <AddOnsList addOns={addOns} key={addOns.addOn} />
        ))}
      </div>

      <div className="buttons">
        <Button onClick={goBack} type="prev-btn">
          Go back
        </Button>
        <Button onClick={() => navigate("/summary")} type="next-btn">
          Next Page
        </Button>
      </div>
    </div>
  );
}

export default AddOns;
