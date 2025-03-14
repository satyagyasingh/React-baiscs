import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if(!user)return <div>please login</div>
  return (
    <>Welcome {user.username}
    </>
  );
}

export default Profile;
