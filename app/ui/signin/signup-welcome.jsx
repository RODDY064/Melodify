import Image from "next/image"
export default function SignupWelcome() {
  return (
    <>
    <h1 className="my-2 font-[500] text-xl">Create account</h1>
      <h3 className="text-black/60">Please enter your details to get started</h3>
      <div className="w-[90%] h-[250px]  mt-5 relative">
        <Image src="/images/signin.svg" fill={true} alt="login" />
      </div>
      <h3 className="my-6 text-black/30">powered by melodify</h3>
    </>
  )
}
