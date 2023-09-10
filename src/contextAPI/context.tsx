import { createContext, useState } from 'react';

// Create a context for the firstTimeLogin state
export const RenderingConditionContext = createContext<{
  renderComponent: boolean;
  setRenderComponent: React.Dispatch<React.SetStateAction<boolean>>;
  showBackButton: boolean;
  setShowBackButton: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  renderComponent: true,
  setRenderComponent: () => {},
  showBackButton: false,
  setShowBackButton: () => {},
});

// Create a provider for components to consume and subscribe to changes
export const RenderingConditionProvider = (props: React.PropsWithChildren) => {
  const [renderComponent, setRenderComponent] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);

  //Here add the logic for the rendering condition

  return (
    <RenderingConditionContext.Provider
      value={{
        renderComponent,
        setRenderComponent,
        showBackButton,
        setShowBackButton,
      }}
    >
      {props.children}
    </RenderingConditionContext.Provider>
  );
};
