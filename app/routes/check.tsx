import { Outlet } from "@remix-run/react";
import { Motion } from "../components/motion/motion";
import { ToDo } from "~/components/ToDo/ToDo";

export default function Home() {
  return (
    <div>
      <ToDo />
    </div>
  );
}
