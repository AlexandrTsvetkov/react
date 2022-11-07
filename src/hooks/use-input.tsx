import { useReducer } from "react";

type InputState = { value: string; isTouched: boolean };

type InputChangedAction = { type: "CHANGED"; payload: string };
type InputTouchedAction = { type: "TOUCHED" };
type InputResetAction = { type: "RESET" };
type InputAction = InputChangedAction | InputTouchedAction | InputResetAction;

const initialState: InputState = { value: "", isTouched: false };

const inputReducer = (state: InputState, action: InputAction): InputState => {
  if (action.type === "CHANGED") {
    return {
      ...state,
      value: action.payload,
    };
  } else if (action.type === "TOUCHED") {
    return {
      ...state,
      isTouched: true,
    };
  } else if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return state;
};

type UseInput = {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangedHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  blurChangedHandler: () => void;
  reset: () => void;
};

const useInput = (validateValue: (value: string) => boolean): UseInput => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const isValid = validateValue(state.value);
  const hasError = !isValid && state.isTouched;

  const valueChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGED", payload: event.currentTarget.value });
  };

  const blurChangedHandler = () => {
    dispatch({ type: "TOUCHED" });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.value,
    isValid: isValid,
    hasError: hasError,
    valueChangedHandler: valueChangedHandler,
    blurChangedHandler: blurChangedHandler,
    reset: resetHandler,
  };
};

export default useInput;
