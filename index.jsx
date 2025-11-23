import React from "react";
import { createRoot } from "react-dom/client";
import Interval from "./Interval";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Interval />);
