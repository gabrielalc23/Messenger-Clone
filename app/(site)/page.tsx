import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
     flex
     min-h-full
     flex-col
     justify-center
     py-12
     sm:px-6
     lg:px-6
     bg-gray-100
     "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="80"
          width="80"
          className="mx-auto w-auto"
          src={"/images/logo.png"}
        />
        <h2
          className="
          mt-6 
          text-center 
          font-bold 
          text-3xl
           tracking-tight"
        >Sigin in to your account</h2>
      </div>
      <AuthForm />
    </div>
  );
}
