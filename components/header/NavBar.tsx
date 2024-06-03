const NavBar = () => {
  return (
    <div className="navbar bg-base-100 flex my-3 mx-3 items-center w-full justify-between text-xl md:mx-6 md:text-2xl xl:mx-10 xl:text-3xl">
      <div className="">
        <a className="btn btn-ghost gradient-text">
          PixiAI
        </a>
      </div>
      <div className="">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;