import React from "react";
import { useSelector } from "react-redux";
import PrincipalHome from "../../components/PrincipalHome/PrincipalHome";
import TeacherHome from "../../components/TeacherHome/TeacherHome";
import Page from "../Page";

function Home() {
  const { user } = useSelector((state) => state.Staff);
  if (user?.role === "Principal") {
    return (
      <Page>
        <PrincipalHome />
      </Page>
    );
  } else if (user?.role === "Teacher") {
    return (
      <Page>
        <TeacherHome />
      </Page>
    );
  }
}

export default Home;
