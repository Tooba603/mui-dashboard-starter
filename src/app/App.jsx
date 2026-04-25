import { Suspense } from "react";
import AppRoutes from "./routes";
import Loader from "../components/loader";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppRoutes />
    </Suspense>
  );
}
