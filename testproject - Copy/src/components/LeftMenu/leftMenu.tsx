import React, { useState } from "react";
import { LeftMenu } from "@clinisys/ui-framework";
import { Button, Drawer, IconButton, styled } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { faChevronCircleRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartMixed,
  faClockDesk,
  faUsers,
  faTransformerBolt,
  faCalendarDay,
} from "@fortawesome/pro-light-svg-icons";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const LeftMenuComponent = (args: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log(isDrawerOpen);
    setIsDrawerOpen((pre: boolean) => !pre);
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        <Button onClick={toggleDrawer}>toggle</Button>
        <Drawer anchor="left" open={isDrawerOpen} variant="persistent">
          <DrawerHeader>
            <IconButton onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </IconButton>
          </DrawerHeader>{" "}
          <LeftMenu
            menuItems={[
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
            ]}
          />
        </Drawer>
      </BrowserRouter>
    </React.Fragment>
  );
};
