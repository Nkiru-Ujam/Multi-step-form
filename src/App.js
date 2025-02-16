import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import Form from "./pages/Form";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import { FormProvider } from "./components/FormProvider";
import Confirm from "./pages/Confirm";

// In order to be a Pragmatic Programmer,
//  we're challenging you to think about what you're doing while you're doing it...
// Never run on auto-pilot. Constantly be thinking, critiquing your work in real time.
// const newDetails = initialDetails.map((detail) => ({
//   ...detail,
//   price: detail.price * 10,
//   duration: "yr",
// }));
// const newAddOns = addOns.map((addOn) => ({
//   ...addOn,
//   addOnPrice: addOn.addOnPrice * 10,
//   duration: "yr",
// }));

// const duration = {year: false, month: false}
// if(price < 50) duration.month === true

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Main>
          <BrowserRouter>
            <SideNav />
            <Routes>
              <Route index element={<Form />} />
              {/* <Route path="form" element={<Form />} /> */}

              <Route path="plans" element={<SelectPlan />} />
              <Route path="add-ons" element={<AddOns />} />
              <Route path="summary" element={<Summary />} />
              <Route path="summary/confirm" element={<Confirm />} />
            </Routes>
          </BrowserRouter>
        </Main>
      </FormProvider>
    </div>
  );
}

export default App;
