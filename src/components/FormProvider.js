import { createContext, useState } from "react";
const initialDetails = [
  {
    icon: "../images/icon-arcade.svg",
    plan: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    selected: true,
  },
  {
    icon: "../images/icon-advanced.svg",
    plan: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    selected: false,
  },
  {
    icon: "../images/icon-pro.svg",
    plan: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    duration: "mo",
    selected: false,
  },
];

const addOns = [
  {
    addOn: "Online Service",
    advice: "Access to multiplayer games",
    addOnPrice: {
      monthly: 1,
      yearly: 10,
    },
    completed: true,
  },

  {
    addOn: "Larger Storage",
    advice: "Extra 1TB of cloud safe",
    addOnPrice: {
      monthly: 2,
      yearly: 20,
    },

    completed: false,
  },

  {
    addOn: "Customizable Profile",
    advice: "Custom theme on your profile",
    addOnPrice: {
      monthly: 2,
      yearly: 20,
    },
    completed: false,
  },
];

// CREATE A PROVIDER
const FormContext = createContext();
function FormProvider({ children }) {
  const [details, setDetails] = useState(initialDetails);
  const [active, setActive] = useState(false);
  const [addOnsDetails, setAddOns] = useState(addOns);

  function handleToggle(e) {
    const checkedState = e.target.checked;
    setActive(checkedState);
    console.log(active);
  }

  function handlePlanClick(plan) {
    setDetails((details) =>
      details.map((det) =>
        det.plan === plan
          ? { ...det, selected: !det.selected }
          : { ...det, selected: false }
      )
    );
  }

  function handleAddOnClick(addOn) {
    setAddOns((dets) =>
      dets.map((det) =>
        det.addOn === addOn ? { ...det, completed: !det.completed } : det
      )
    );
  }

  return (
    // PASS CONTEXT VALUE TO PROVIDER SO IT CAN BE ACCESSIBLE TO CONSUMERS
    <FormContext.Provider
      value={{
        details,
        addOnsDetails,
        active,
        onActive: setActive,
        onAddOns: setAddOns,
        onToggle: handleToggle,
        onPlanClick: handlePlanClick,
        onAddOnClick: handleAddOnClick,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormProvider, FormContext };
