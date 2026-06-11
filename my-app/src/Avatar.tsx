interface AvatarProps {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  return (
    <div style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#EEEDFE",
      color: "#534AB7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold"
    }}>
      {name[0]}
    </div>
  );
}

export default Avatar;