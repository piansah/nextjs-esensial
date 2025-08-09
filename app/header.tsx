import { getSetting } from "@/app/queries/getSetting";
import { Nav } from "./nav";
import { Suspense } from "react";

export async function Header() {
  const settingPromise = getSetting(); // ✅ langsung Promise, tanpa await
  return (
    <header className="border-b border-white py-2 mb-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav settingPromise={settingPromise} />
      </Suspense>
    </header>
  );
}
