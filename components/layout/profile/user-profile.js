import HomeWrapper from "../HomeWrapper";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <HomeWrapper>
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm />
      </section>
    </HomeWrapper>
  );
}

export default UserProfile;
