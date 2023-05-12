import React, { useState } from "react";
import {
  Theme,
  AppHeader,
  LeftMenu,
  UserSettings,
  SplashPage,
  ISplashPageTypes,
} from "@clinisys/ui-framework";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGear,
  faCircleQuestion,
  faBars,
  faUserClock,
  faClockRotateLeft,
  faChartMixed,
  faClockDesk,
  faUsers,
  faTransformerBolt,
  faCalendarDay,
  faChevronCircleRight,
} from "@fortawesome/pro-light-svg-icons";
import { Avatar, Box, Drawer, IconButton, styled } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Stack } from "@mui/material";
import {
  LANGUAGES,
  THEMES,
  LOCATION,
  PRINTER,
} from "../UserSettings/userSettingDropContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  About as AboutPage,
  IAboutPageTypes,
} from "@clinisys/ui-framework/about";
import productLogo from "./Clinisys_DaVinciLogo_bk_rgb.svg";

const barIcon = <FontAwesomeIcon icon={faBars} />;
const bellIcon = <FontAwesomeIcon icon={faBell} />;
const gearIcon = <FontAwesomeIcon icon={faGear} />;
const qIcon = <FontAwesomeIcon icon={faCircleQuestion} />;
const userIcon = <FontAwesomeIcon icon={faUserClock} />;
const historyIcon = <FontAwesomeIcon icon={faClockRotateLeft} />;

const handleOnClick = () => {
  alert("Clicked");
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const AppHeaderComponent = (args: any) => {
  const [openPage, setOpenPage] = useState<boolean>(false);

  const handleShowAboutPage = () => {
    setOpenPage(true);
  };

  const handleHideAboutPage = () => {
    setOpenPage(false);
  };
  //menuitem
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((pre: boolean) => !pre);
  };

  const LeftMenuItems = [
    {
      text: "Allocation Dashboard",
      icon: <FontAwesomeIcon icon={faChartMixed} />,
      to: "/dasboard",
    },
    {
      groupHeader: "Maintenance",
      text: "Maintenance",
      icon: <FontAwesomeIcon icon={faClockDesk} />,
      to: "/Maintenance",
    },
    {
      group: "Maintenance",
      text: "Roles",
      icon: <FontAwesomeIcon icon={faUsers} />,
      to: "/roles",
    },
    {
      group: "Maintenance",
      text: "Events",
      icon: <FontAwesomeIcon icon={faTransformerBolt} />,

      to: "/events",
    },
    {
      text: "Scheduler",
      icon: <FontAwesomeIcon icon={faCalendarDay} />,
      to: "/Scheduler",
    },
  ];
  return (
    <React.Fragment>
      <Box sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <AppHeader
          id="AppHeader"
          leftMenuProps={{
            icon: barIcon,
            altText: "LeftMenu",
            onClick: toggleDrawer,
          }}
          brandLogoProps={{
            altText: "Clinisys",
            onClick: handleOnClick,
          }}
          productNameProps={{
            name: "Product Logo",
            onClick: handleOnClick,
          }}
          notificationMenuProps={{
            icon: bellIcon,
            altText: "Notification",
            badgeCount: 1,
            onClick: () => handleMenuClick,
          }}
          historyProps={{
            icon: historyIcon,
            altText: "History",
            onClick: handleOnClick,
          }}
          settingsMenuProps={{
            icon: gearIcon,
            altText: "Settings",
            onClick: () => setIsOpen(true),
          }}
          faqMenuProps={{
            icon: qIcon,
            altText: "Settings",
            onClick: handleShowAboutPage,
          }}
          userProfileProps={{
            name: "Admin admin",
            altText: "Admin",
            icon: userIcon,
            onClick: () => handleMenuClick,
          }}
        ></AppHeader>
      </Box>
      <AboutPage
        open={openPage}
        onClose={handleHideAboutPage}
        id="about-page-test"
        productLogo={productLogo}
        version="Version 2023.1.0.0025"
        environmentInformation={[
          {
            name: "Namespace",
            value: "ENVROOT",
          },
          {
            name: "Site ID",
            value: "100",
          },
          {
            name: "Location",
            value: "100-1",
          },
          {
            name: "Unique Device ID",
            value: "+BA236ATL202210/$$$$72072210015",
          },
        ]}
        mfdYear="2023"
        buttonText="OK"
      />

      <Box sx={{ ml: "30%" }}>
        <SplashPage
          id="splashPageTest"
          productLogo={productLogo}
          version="Version 13.4.0"
          environmentInformation={[
            {
              name: "2023.1",
              value: "Edition",
            },
            {
              name: "Core",
              value: "23.1.0.0",
            },
            {
              name: "Adaptor",
              value: "23.1.0.0",
            },
          ]}
        ></SplashPage>
      </Box>

      <BrowserRouter>
        <Drawer anchor="left" open={isDrawerOpen} variant="persistent">
          <DrawerHeader>
            <IconButton onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </IconButton>
          </DrawerHeader>{" "}
          <LeftMenu menuItems={LeftMenuItems} />
        </Drawer>
      </BrowserRouter>
      <Stack flexDirection={"row"}>
        <UserSettings
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          language={{
            options: LANGUAGES,
            selectedKey: "english",
            onChange: (value) => {
              // event for language value change
            },
          }}
          theme={{
            options: THEMES,
            selectedKey: "light",
            onChange: (value) => {
              // event for theme value change
            },
          }}
          location={{
            options: LOCATION,
            selectedKey: "location1",
            onChange: (value) => {
              // event for location value change
            },
          }}
          printer={{
            options: PRINTER,
            selectedKey: "printer1",
            onChange: (value) => {
              // event for printer value change
            },
          }}
          notification={{
            value: true,
            onChange: (value) => {
              // event for notification value change
            },
          }}
          onClose={() => {
            // event for closing the user settings
          }}
        ></UserSettings>
      </Stack>
    </React.Fragment>
  );
};
