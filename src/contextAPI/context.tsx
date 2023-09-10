import { createContext, useState } from "react";

// Create a context for the firstTimeLogin state
export const RenderingConditionContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | null
>(null);

// Create a provider for components to consume and subscribe to changes
export const RenderingConditionProvider = (props: React.PropsWithChildren) => {
  const [renderComponent, setRenderComponent] = useState(true);

  //Here add the logic for the rendering condition

  return (
    <RenderingConditionContext.Provider
      value={[renderComponent, setRenderComponent]}
    >
      {props.children}
    </RenderingConditionContext.Provider>
  );
};
