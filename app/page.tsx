import { Counter } from "@/app/counter";
import Image from "next/image";
import gambarKucing from "@/public/cat.jpeg";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1750262727445-d6dff3ec7241?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <div className="h-screen" />
      <div className="relative size-72 rounded-full overflow-hidden">
        <Image
          src={gambarKucing}
          alt="Gambar Kucing"
          fill
          className="object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}
