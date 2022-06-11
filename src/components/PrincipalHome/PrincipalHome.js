import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../redux/StaffReducer/StaffAction";
import axios from "axios";
import AddTeacherForm from "./AddTeacherForm";

function PrincipalHome() {
  // state & selector
  const { user, teachers } = useSelector((state) => state.Staff);

  // dispatch
  const dispatch = useDispatch();

  // functions

  const fetchAllTeachers = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/principal/getTeachers",
        {
          p_id: user?.p_id,
        }
      );
      if (data?.status) {
        dispatch({
          type: "POPULATE_TEACHERS",
          payload: data?.data,
        });
      } else {
        dispatch(togglePopup(data?.message, "error"));
      }
    } catch (e) {
      dispatch(togglePopup(e?.message, "error"));
    }
  };

  const deleteTeacher = async (t_id) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/principal/deleteTeacher",
        {
          p_id: user?.p_id,
          t_id,
        }
      );
      console.log(t_id);
      console.log(user?.p_id);
      console.log(data);
      if (data?.status) {
        fetchAllTeachers();
      } else {
        dispatch(togglePopup(data?.message, "error"));
      }
    } catch (e) {
      dispatch(togglePopup(e?.message, "error"));
    }
  };

  useEffect(() => {
    fetchAllTeachers();
  }, []);

  return (
    <Grid container style={{ padding: "1rem" }}>
      <Grid container item xs={12} md={6}>
        <Typography variant="h4">Welcome, {user?.full_name}</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        style={{
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            dispatch({
              type: "LOGOUT",
            })
          }
        >
          LOGOUT
        </Button>
      </Grid>
      <AddTeacherForm fetchAllTeachers={fetchAllTeachers} />
      <Grid
        container
        item
        xs={12}
        md={6}
        style={{
          padding: "1rem",
          height: "min-content",
        }}
      >
        <Grid item xs={12} style={{ marginBottom: "1rem" }}>
          <Typography variant="h5">List Of Teachers</Typography>
        </Grid>
        {teachers.map((item, index) => (
          <Grid
            xs={12}
            container
            item
            component={Paper}
            elevation={5}
            style={{
              padding: "1rem ",
              marginBottom: "1rem",
            }}
          >
            <Grid container item xs={8} md={10}>
              <Grid container item xs={12}>
                <Typography variant="h5">
                  <span style={{ fontWeight: "bold" }}>Name : </span>{" "}
                  {item.full_name}
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Typography variant="body2">
                  <span style={{ fontWeight: "bold" }}>Email : </span>{" "}
                  {item.email}
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Typography variant="body2">
                  <span style={{ fontWeight: "bold" }}>Class : </span>{" "}
                  {item.class}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={4} md={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => deleteTeacher(item?.t_id)}
              >
                DELETE
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default PrincipalHome;
