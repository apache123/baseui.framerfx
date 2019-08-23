import * as React from "react";
import { ThemeProvider } from "./utils/ThemeProvider";
import { addListener } from "./utils/ThemeManagement";

export function withHOC(Component): React.SFC {
  return (props: any) => {
    const [currentTheme, setCurrentTheme] = React.useState()

    React.useEffect(() => {
      const unsubscribe = addListener(theme => {
          setCurrentTheme(theme)
      })
      return unsubscribe;
    }, []);

    return (
      <ThemeProvider theme={currentTheme}>
        <Component {...props} />
      </ThemeProvider>
    )
  };
}
