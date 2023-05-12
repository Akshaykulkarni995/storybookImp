import React from "react";
import { AppHeaderComponent } from "../components/AppHeader/AppHeader";
import  {Theme} from "@clinisys/ui-framework"

export default function BaseComponent() {
  return (
    <React.Fragment>
      <Theme>
      <AppHeaderComponent />
      </Theme>
    </React.Fragment>
  );
}
