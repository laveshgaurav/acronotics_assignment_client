import { Button, Grid, Paper, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { togglePopup } from "../../redux/StaffReducer/StaffAction";

function PrincipalLogin() {
  // state
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  // dispatch
  const dispatch = useDispatch();

  // login
  const login = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/principal/login",
        formData
      );
      console.log(data);
      if (data?.status) {
        dispatch({
          type: "LOGIN",
          payload: data?.data,
        });
      } else {
        dispatch(togglePopup(data?.message, "error"));
      }
    } catch (e) {
      dispatch(togglePopup(e?.message, "error"));
    }
  };

  return (
    <Grid container item xs={12} style={{ padding: "1rem" }}>
      <Grid
        sm={12}
        md={4}
        container
        item
        component={Paper}
        elevation={5}
        style={{ padding: "1.5rem" }}
      >
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value={formData.pass}
            onChange={(e) =>
              setFormData({
                ...formData,
                pass: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <Button variant="contained" color="primary" fullWidth onClick={login}>
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PrincipalLogin;
