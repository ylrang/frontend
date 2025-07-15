import { useContext } from "react";
import { TreeContext } from "../store/TreeContext";

export const useTreeState = () => {
  const context = useContext(TreeContext);
  return context;
};
