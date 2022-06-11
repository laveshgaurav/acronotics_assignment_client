import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PrincipalLogin from "../../components/PrincipalLogin/PrincipalLogin";
import PrincipalSignup from "../../components/PrincipalSignup/PrincipalSignup";
import { togglePopup } from "../../redux/StaffReducer/StaffAction";
import Page from "../Page";

function Login() {
  // state
  const [value, setValue] = useState(0);

  // dispatch
  const dispatch = useDispatch();

  // function handlers
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Principal Login" {...a11yProps(0)} />
              <Tab label="Principal Signup" {...a11yProps(1)} />
              <Tab label="Teacher Login" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <PrincipalLogin />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PrincipalSignup />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Login;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container item xs={12}>
          {children}
        </Grid>
      )}
    </div>
  );
}
