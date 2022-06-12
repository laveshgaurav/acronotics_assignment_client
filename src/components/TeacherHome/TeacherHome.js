import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TeacherHome() {
  // state & selector
  const { user } = useSelector((state) => state.Staff);

  // dispatch
  const dispatch = useDispatch();
  return (
    <Grid container style={{ padding: "1rem" }}>
      <Grid container item xs={12} md={6}>
        <Grid container item xs={12}>
          <Typography variant="h4">Welcome, {user?.full_name}</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="h6">Email : {user?.email}</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="body1">Class : {user?.class}</Typography>
        </Grid>
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
    </Grid>
  );
}

export default TeacherHome;
