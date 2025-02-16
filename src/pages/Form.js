import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const initialState = {
  nameInput: "",
  emailInput: "",
  phoneNoInput: "",
  nameErrMsg: "",
  emailErrMsg: "",
  phoneNoErrMsg: "",
  nextPage: false,
};
function reducer(state, action) {
  // console.log(state, action);

  switch (action.type) {
    case "nameInput":
      return { ...state, nameInput: action.payload };

    case "emailInput":
      return { ...state, emailInput: action.payload };

    case "phoneNoInput":
      return { ...state, phoneNoInput: action.payload };

    case "mustContainNameText":
      return {
        ...state,
        nameErrMsg: (state.nameErrMsg = "This field is required"),
        nextPage: false,
      };

    case "validateName":
      return {
        ...state,
        nameErrMsg: (state.nameErrMsg =
          "Names must be separated by white space"),
        nextPage: false,
      };

    case "mustContainEmailText":
      return {
        ...state,
        nameErrMsg: "",
        emailErrMsg: (state.emailErrMsg = "This field is required"),
        nextPage: false,
      };

    case "validateEmail":
      return {
        ...state,
        nameErrMsg: "",
        emailErrMsg: (state.emailErrMsg = "Email must be valid"),
        nextPage: false,
      };

    case "mustContainPhoneNo":
      return {
        ...state,
        nameErrMsg: "",
        emailErrMsg: "",
        phoneNoErrMsg: (state.phoneNoErrMsg = "This field is required"),
        nextPage: false,
      };

    case "validatePhoneNo":
      return {
        ...state,
        nameErrMsg: "",
        emailErrMsg: "",
        phoneNoErrMsg: (state.phoneNoErrMsg =
          "Phone number must contain 11 digits"),
        nextPage: false,
      };

    case "goToNextPage":
      return {
        ...state,
        nameErrMsg: "",
        emailErrMsg: "",
        phoneNoErrMsg: "",
        nextPage: true,
      };

    default:
      throw new Error("Unknown action");
  }
}

function Form() {
  const [
    {
      nameInput,
      emailInput,
      phoneNoInput,
      nameErrMsg,
      emailErrMsg,
      phoneNoErrMsg,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  function handleNextPage(e) {
    const namePattern = /\w+\s\w+/;
    const isEqual = namePattern.test(nameInput);

    const emailPattern = /\w+@\w{5,8}\.\w{2,5}/;
    const isTrue = emailPattern.test(emailInput);

    const phonePattern = /\d{11}/;
    const isComplete = phonePattern.test(phoneNoInput);
    e.preventDefault();
    if (nameInput.length === 0) dispatch({ type: "mustContainNameText" });
    else if (!isEqual) dispatch({ type: "validateName" });
    else if (emailInput.length === 0)
      dispatch({ type: "mustContainEmailText" });
    else if (!isTrue) dispatch({ type: "validateEmail" });
    else if (phoneNoInput.length === 0)
      dispatch({ type: "mustContainPhoneNo" });
    else if (!isComplete) dispatch({ type: "validatePhoneNo" });
    else {
      dispatch({ type: "goToNextPage" });
      navigate("/plans");
    }
  }

  return (
    <div className="form-cont">
      <h1>Personal Info</h1>
      <span className="desc">
        Please provide your name, email address and phone number
      </span>

      <form>
        <div className="input-cont">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="name">Name</label>
            <p className="error-message">{nameErrMsg}</p>
          </div>
          <input
            type="text"
            placeholder="e.g.Nkiru Ujam"
            className={`input-field ${nameErrMsg ? "error-border" : ""}`}
            value={nameInput}
            onChange={(e) =>
              dispatch({ type: "nameInput", payload: e.target.value })
            }
          />
        </div>

        <div className="input-cont">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="email">Email Address</label>

            <p className="error-message">{emailErrMsg}</p>
          </div>
          <input
            type="text"
            placeholder="e.g.nkiruUjam@lorem.com"
            className={`input-field ${emailErrMsg ? "error-border" : ""}`}
            value={emailInput}
            onChange={(e) =>
              dispatch({ type: "emailInput", payload: e.target.value })
            }
          />
        </div>

        <div className="input-cont">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="phone">Phone Number</label>

            <p className="error-message">{phoneNoErrMsg}</p>
          </div>
          <input
            type="text"
            placeholder="e.g.090 250 017 42"
            className={`input-field ${phoneNoErrMsg ? "error-border" : ""}`}
            value={phoneNoInput}
            onChange={(e) =>
              dispatch({ type: "phoneNoInput", payload: e.target.value })
            }
          />
        </div>

        <div className="btn-form">
          <Button type="next-btn step" onClick={(e) => handleNextPage(e)}>
            Next step
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
