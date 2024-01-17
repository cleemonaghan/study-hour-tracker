import { Box, Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Box
        component={"main"}
        sx={(theme) => ({ margin: theme.spacing(16.5, 4, 4, 4) })}
      >
        {/* Render the app routes via the Layout Outlet */}
        <Outlet />
      </Box>
      <Typography
        component={"footer"}
        variant="caption"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        ©️ Colin Monaghan 2024
      </Typography>
    </>
  );
}

function Navbar() {
  return (
    <Box
      component={"header"}
      sx={(theme) => ({
        position: "fixed",
        top: 0,
        width: "95%",
        zIndex: 1,
        padding: `${theme.spacing(4)} 2.5% ${theme.spacing(4)}`,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Typography
        sx={(theme) => ({
          margin: theme.spacing(0, 1),
        })}
        component={"h1"}
        variant="h5"
      >
        Study Hour Tracker
      </Typography>
      <NavbarLink link={"/"} title={"Home"} />
      <NavbarLink link={"/page1"} title={"Page 1"} />
    </Box>
  );
}

function NavbarLink({ link, title }: { link: string; title: string }) {
  const navigate = useNavigate();
  return (
    <Button
      sx={(theme) => ({
        margin: theme.spacing(0, 1),
        color: theme.palette.text.primary,
      })}
      onClick={() => navigate(link)}
    >
      {title}
    </Button>
  );
}

export default Layout;
