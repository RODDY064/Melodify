export default function CreateForm({
  handleAnimate,
  setIsAnimating,
  isAnimating,
}) {
  return (
    <div className="w-[50%] h-full max-sm:w-full max-sm:hidden p-2">
      <form className="flex flex-col px-2">
        <label className="p-1">Email</label>
        <input
          type="text"
          className="w-full h-12 rounded-lg p-2 bg-ice focus:outline-none focus:border border-rose-400/30 "
        />
        <label className="p-1">Password</label>
        <input
          type="password"
          className="w-full h-12 rounded-lg p-2 bg-ice focus:outline-none focus:border border-rose-400/30 "
        />
        <label className="p-1">Confirm Password</label>
        <input
          type="password"
          className="w-full h-12 rounded-lg p-2 bg-ice focus:outline-none focus:border border-rose-400/30 "
        />

        <button className="w-full h-12 bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30  rounded-lg  font-medium my-4">
          Submit
        </button>
        <h3
          className="text-center text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            handleAnimate(),
              setIsAnimating((prev) => ({
                ...prev,
                animate: !isAnimating.animate,
              }));
          }}>
          Already have account? Sign in
        </h3>
      </form>
    </div>
  );
}
