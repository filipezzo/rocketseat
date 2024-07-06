import { useLocation } from "react-router-dom";

export function useConviteController() {
  const { state } = useLocation();

  const initial = new Date(state.startDate);
  const final = new Date(state.endDate);

  return {
    state,
    initial,
    final,
  };
}
