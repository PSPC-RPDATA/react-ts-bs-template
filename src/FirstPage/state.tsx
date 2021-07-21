import React, {
  useContext,
  useReducer,
  useMemo,
  Provider,
  ReactNode,
  createContext,
} from "react";

interface FirstPageState {
  isModalActive: boolean;
}

interface FirstPageStateContextType {
  state: FirstPageState;
  dispatch: (Action) => void;
}

const FirstPageStateContext = createContext<FirstPageStateContextType>();

const initialState = {
  isModalActive: false,
};

type ActionType = { type: string; payload?: any };

function reducer(state: FirstPageState, action: ActionType) {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_MODAL":
      return { ...state, isModalActive: true };
    case "CLOSE_MODAL":
      return { ...state, isModalActive: false };
    default:
      return state;
  }
}

export function useFirstPageState() {
  const { state, dispatch } = useContext(FirstPageStateContext);

  const stateModifiers = useMemo(
    () => ({
      closeModal: () => dispatch({ type: "CLOSE_MODAL" }),
      activateModal: () => dispatch({ type: "OPEN_MODAL" }),
    }),
    [dispatch]
  );

  return {
    ...state,
    ...stateModifiers,
  };
}
export function FirstPageStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FirstPageStateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FirstPageStateContext.Provider>
  );
}
