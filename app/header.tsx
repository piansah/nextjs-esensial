import { getSetting } from "@/app/queries/getSetting";
import { Nav } from "./nav";

export async function Header() {
  const setting = await getSetting();
  return (
    <header className="border-b border-white py-2 mb-2">
      <div className="text-2xl">{setting.siteName}</div>
      <Nav />
    </header>
  );
}
