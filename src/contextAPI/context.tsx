import { createContext, useState } from "react";

// Create a context for the firstTimeLogin state
export const FirstTimeLoginContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | null
>(null);

// Create a provider for components to consume and subscribe to changes
export const FirstTimeLoginProvider = (props: React.PropsWithChildren) => {
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);
  return (
    <FirstTimeLoginContext.Provider value={[firstTimeLogin, setFirstTimeLogin]}>
      {props.children}
    </FirstTimeLoginContext.Provider>
  );
};
