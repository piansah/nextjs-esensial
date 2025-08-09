import {Setting} from "@/app/types/setting";

export async function getSetting(): Promise<Setting> {
  const res = await fetch("http://localhost:3001/settings");
  const setting = await res.json();
  return setting;
}