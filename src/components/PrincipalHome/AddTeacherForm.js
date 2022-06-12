import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../redux/StaffReducer/StaffAction";
import axios from "axios";

function AddTeacherForm({ fetchAllTeachers }) {
  // state & selector
  const { user } = useSelector((state) => state.Staff);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    class: "",
  });
  // dispatch
  const dispatch = useDispatch();

  // functions
  const addTeacher = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/principal/newTeacher",
        { ...formData, p_id: user?.p_id }
      );
      console.log(data);
      if (data?.status) {
        dispatch(togglePopup(data?.message, "success"));
        fetchAllTeachers();
        setFormData({
          fullname: "",
          email: "",
          password: "",
          class: "",
        });
      } else {
        dispatch(togglePopup(data?.message, "error"));
      }
    } catch (e) {
      dispatch(togglePopup(e?.message, "error"));
    }
  };
  return (
    <Grid
      container
      item
      xs={12}
      md={6}
      style={{ padding: "1rem", height: "min-content" }}
    >
      <Grid item xs={12} style={{ marginBottom: "1rem" }}>
        <Typography variant="h5">Add New Teacher</Typography>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "1rem" }}>
        <TextField
          label="Fullname"
          variant="outlined"
          fullWidth
          value={formData?.fullname}
          onChange={(e) =>
            setFormData({
              ...formData,
              fullname: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "1rem" }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={formData?.email}
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
          value={formData?.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "1rem" }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Class</InputLabel>
          <Select
            value={formData?.class}
            onChange={(e) => {
              setFormData({
                ...formData,
                class: e.target.value,
              });
            }}
            label="Class"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "1rem" }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={addTeacher}
        >
          ADD TEACHER
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddTeacherForm;
