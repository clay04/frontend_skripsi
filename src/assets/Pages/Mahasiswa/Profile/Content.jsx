import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";

export default function Content() {
  return (
    <section className="col-9">
      <div className="container-fluid py-5">
        <ProfileHeader />
        <ProfileDetails />
      </div>
    </section>
  );
}
