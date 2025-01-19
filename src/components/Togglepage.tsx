export function Togglepage({children, onClick}) {
  return (
    <>
      <p className="text-bg-white text-sm mt-4 text-center">
        Don't have an account?{" "}
        <button
          type="button"
          className="text-blue-500 font-semibold hover:underline ml-1"
          onClick={onClick}
        >
          {children}
        </button>
      </p>
    </>
  );
}
