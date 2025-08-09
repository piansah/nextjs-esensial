import {getSetting} from "@/app/queries/getSetting";

export async function Footer() {
   const setting = await getSetting();

   return (
      <footer className="border-t border-white py-2 mt-2">
         <div className="text-center">Coppy Right © {setting.siteName}</div>
      </footer>
   )
}