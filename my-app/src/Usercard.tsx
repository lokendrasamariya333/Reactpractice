import Avatar from "./Avatar";
import Badge from "./Badge";

interface UserCardProps {
  name: string;
  city: string;
  role: string;
}

function UserCard({ name, city, role }: UserCardProps) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "16px",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
      <Avatar name={name} />
      <div>
        <h3>{name}</h3>
        <p>{city}</p>
        <Badge label={role} />
      </div>
    </div>
  );
}

export default UserCard;