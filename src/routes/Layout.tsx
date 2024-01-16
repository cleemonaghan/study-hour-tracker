import { Box, Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer>
        <Typography component={"div"} variant="caption">
          ©️ Colin Monaghan 2024
        </Typography>
      </footer>
    </>
  );
}

function Navbar() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        textAlign: "center",
        margin: theme.spacing(4),
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
      })}
      onClick={() => navigate(link)}
    >
      {title}
    </Button>
  );
}

export default Layout;
