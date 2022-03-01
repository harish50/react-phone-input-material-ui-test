import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@mui/material";
import { TextField as TextInput } from "@material-ui/core"
import PhoneInput from "phone-number-material-ui";
import MuiPhoneInput from "react-phone-input-material-ui";
import "react-phone-input-material-ui/lib/style.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <PhoneInput
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputProps={{ variant: "standard" }}
        component={TextField}
        defaultConutry={"us"}
      />
      <div style={{ width: 300, paddingTop: 30 }}>
        <MuiPhoneInput
          name={"aasds"}
          disabled={false}
          value={phone}
          component={TextField}
          country="it"
          inputProps={{ variant: "filled", label: "Phone", required: true, fullWidth: true }}
          onChange={(val) => setPhone(val)}
          onBlur={()=>{}}
          // onKeyDown={e => e.key === 'Enter' && onBlur(e)}
          defaultErrorMessage={"error"}
          helperText={"helper text"}
        />
      </div>
      <div style={{ width: 300, paddingTop: 30 }}>
        <MuiPhoneInput
          name={"aasds"}
          disabled={false}
          value={phone}
          component={TextInput}
          inputProps={{ variant: "filled", label: "Phone", required: true, fullWidth: true }}
          onChange={(val) => setPhone(val)}
          onBlur={()=>{}}
          // onKeyDown={e => e.key === 'Enter' && onBlur(e)}
          defaultErrorMessage={"error"}
          helperText={"helper text"}
        />
      </div>
    </div>
  );
}

export default App;
