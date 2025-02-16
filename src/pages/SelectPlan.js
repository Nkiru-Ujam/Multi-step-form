import { useNavigate } from "react-router-dom";
import Plan from "../components/Plan";
import { useContext } from "react";
import { FormContext } from "../components/FormProvider";
import Button from "../components/Button";

// {
//   details,
//   active,
//   setActive,
//   onToggle,
//   onPlanClick,
// // }
function SelectPlan() {
  const navigate = useNavigate();
  const { details, active, onToggle, onPlanClick } = useContext(FormContext);

  // useEffect(
  //   function () {
  //     const newState = localStorage.getItem("toggleState") === true;
  //     // if (!active) return;
  //     setActive(newState);
  //   },
  //   [setActive]
  // );

  // console.log(active);
  return (
    <div className="form-cont">
      <h1>Select your plan</h1>
      <p className="desc">You have option of monthly or yearly billing</p>

      <div className="plan-cont">
        {details.map((detail) => (
          <Plan
            key={detail.plan}
            detail={detail}
            active={active}
            onClick={onPlanClick}
          />
        ))}
      </div>

      <div className="toggle">
        <p style={active ? { color: "gray" } : { color: "hsl(213, 96%, 18%)" }}>
          Monthly
        </p>
        <label className={`switch ${active ? "toggle-switch" : ""}`}>
          <input
            type="checkbox"
            value={active}
            onChange={(e) => {
              onToggle(e);
            }}
          />
          <span className="slider round" onClick={() => {}}></span>
        </label>
        <p
          style={!active ? { color: "gray" } : { color: "hsl(213, 96%, 18%)" }}
        >
          Yearly
        </p>
      </div>

      <div className="buttons">
        <Button onClick={() => navigate("/")} type="prev-btn">
          Go Back
        </Button>
        <Button onClick={() => navigate("/add-ons")} type="next-btn">
          Next Page
        </Button>
      </div>
    </div>
  );
}

export default SelectPlan;
