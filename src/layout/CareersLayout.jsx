import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
}
