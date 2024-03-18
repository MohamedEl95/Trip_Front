import { useTranslations } from "../../../hooks/useTranslation";
import MyList from "./navigationlist";
import { Paths } from "../../../routes/paths";
import Logo from "../../../assets/travel_logo_app.png";
import { CustomDrawer, DrawerHeader } from "../../atoms/drawer";
import DividerAtom from "../../atoms/divider";
import BoxAtom from "../../atoms/box";
import { OpenIcon } from "../../atoms/icons/openIcon";
import { CloseIcon } from "../../atoms/icons/closeIcon";
import { DashboardIcon } from "../../atoms/icons/dashbordIcon";
import { LogoutIcon } from "../../atoms/icons/logoutIcon";
import IconButtonAtom from "../../atoms/iconButton";

const DrawerAppbar = (props: {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}) => {
  const { translations } = useTranslations();
  const drawerPrimaryNavigations = [
    {
      text: translations.dashboardagency,
      icon: <DashboardIcon />,
      activeicon: <DashboardIcon />,
      path: Paths.agencytemplate + Paths.agency.dahsboard,
    },
  ];

  const drawerSecondaryNavigations = [
    {
      text: translations.logout,
      icon: <LogoutIcon />,
      path: Paths.authtemplate + Paths.auth.login,
    },
  ];

  return (
    <CustomDrawer
      variant="permanent"
      open={props.open}
      PaperProps={{
        sx: {
          backgroundColor: "info.main",
        },
      }}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
        }}
      >
        {props.open && (
          <img
            alt="Logo dashboard"
            src={Logo}
            height="80px"
            style={{ marginLeft: "35px" }}
          />
        )}

        {!props.open ? (
          <IconButtonAtom onClick={props.handleDrawerOpen} disableRipple>
            <OpenIcon />
          </IconButtonAtom>
        ) : (
          <IconButtonAtom onClick={props.handleDrawerClose} disableRipple>
            <CloseIcon />
          </IconButtonAtom>
        )}
      </DrawerHeader>
      <DividerAtom sx={{ backgroundColor: "info.300", height: "2px", my: 2 }} />
      <MyList items={drawerPrimaryNavigations} activePath={location.pathname} />
      <BoxAtom sx={{ marginTop: "auto" }}>
        <DividerAtom
          sx={{ backgroundColor: "info.300", height: "2px", my: 2 }}
        />
        <MyList
          items={drawerSecondaryNavigations}
          activePath={location.pathname}
        />
        <BoxAtom height={"20px"} />
      </BoxAtom>
    </CustomDrawer>
  );
};

export default DrawerAppbar;
