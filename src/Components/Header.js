import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: "center",
        mb: 3,
        color: "#8A2BE2",
        fontWeight: "bold",
      }}
    >
      Pro Todo List
    </Typography>
  );
};

export default Header;
