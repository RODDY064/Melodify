import Image from "next/image";

export default function SigninWelcome() {
  return (
    <>
      <h1 className="my-2 font-[500] text-xl">Welcome</h1>
      <h3 className="text-black/60">Please enter your details to login</h3>
      <div className="w-[90%] h-[250px]  mt-5 relative">
        <Image src="/images/signin.svg" fill={true} alt="login" />
      </div>
      <h3 className="text-black/30">powered by melodify</h3>
    </>
  );
}
