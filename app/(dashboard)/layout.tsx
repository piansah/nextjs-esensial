import React from "react";

export default function DashboardLayout({ children }: {
   children: React.ReactNode;
}) {
   return (
      <main>
         <header className="border-b border-gray-500">Dashboard</header>
         {children}
      </main>
   );
}
