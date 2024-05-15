import Image from "next/image";

export default function Home() {
  const name = "Sarbin"

  return (
   <>
      <div className="text-3xl font-bold text-center flex justify-center items-center h-[100vh]">
          <p>My name is {name}.</p>
      </div>
   </>
  );
}
