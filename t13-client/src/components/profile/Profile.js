import React from "react";
import { DummyUser } from "./DummyUser";
import MyProfile from "./MyProfile";

function Profile() {
  return DummyUser.map((dummy) => <MyProfile key={dummy.id} {...dummy} />);
}

export default Profile;
