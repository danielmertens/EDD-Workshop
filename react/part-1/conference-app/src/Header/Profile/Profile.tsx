import { User } from "../../api/models";

export interface ProfileProps {
  user: User;
}

export function Profile(props: ProfileProps) {
  return (
    <div>
      <img src={props.user.profileImage} alt="profile" />
      <div>{props.user.name}</div>
    </div>
  );
}
