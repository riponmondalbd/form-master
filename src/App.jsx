import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign up data", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("Update Profile", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <GrandPa />
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
