interface BadgeProps {
  label: string;
}

function Badge({ label }: BadgeProps) {
  return (
    <span style={{
      background: "#E1F5EE",
      color: "#085041",
      padding: "2px 10px",
      borderRadius: "20px",
      fontSize: "12px"
    }}>
      {label}
    </span>
  );
}

export default Badge;