import { useState } from "react";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div class="bg-white">
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          {open && (
            <div class="fixed  inset-0 bg-black/25" aria-hidden="true"></div>
          )}
          {open && (
            <div class="fixed inset-0 z-40 ">
              <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div class="flex px-4 pb-2 pt-5">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-2">
                  <div class="border-b border-gray-200"></div>
                </div>

                <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div class="flow-root">
                    <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/");
                      }}
                      class="-m-2 block p-2 font-medium text-green-700"
                      to="/"
                    >
                      Home
                    </button>
                  </div>
                  <div class="flow-root">
                    <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/about");
                      }}
                      class="-m-2 block p-2 font-medium text-green-700 "
                      to="about"
                    >
                      About
                    </button>
                  </div>
                </div>

                <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div class="flow-root">
                  <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/login-from");
                      }}
                      class="-m-2 block p-2 font-medium text-green-700"
                      to="/login-from"
                    >
                      Sign in
                    </button>
                  </div>
                  <div class="flow-root">
                  <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/sign-up");
                      }}
                      class="-m-2 block p-2 font-medium text-green-700"
                      to="/sign-up"
                    >
                      Create accounts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <header class="relative   bg-white">
          <p class="flex h-10 items-center justify-center bg-white-900 px-4 text-sm font-medium text-green-800     sm:px-6 lg:px-8">
            Where aspirations soar, and every dream finds its reality.
          </p>
          <nav
            aria-label="Top"
            class="mx-auto max-w-7xl bg-green-900 px-4 sm:px-6 lg:px-8"
          >
            <div class="border-b      border-gray-200">
              <div class="flex h-16 text-white items-center">
                <button
                  onClick={() => setOpen(true)}
                  type="button"
                  class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open menu</span>
                  <svg
                    class="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
                <div class="ml-4 flex lg:ml-0 ">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img class="h-20 w-auto" src={logo} alt=""></img>
                  </a>
                </div>
                <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div class="flex h-full space-x-8">
                    <div class="flex">
                      <div class="relative flex">
                        <button
                          onClick={() => {
                            setOpen(false);
                            navigate("/");
                          }}
                          type="button"
                          class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-white  transition-colors duration-200 ease-out hover:text-gray-400"
                          aria-expanded="false"
                        >
                          Home
                        </button>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="relative flex">
                        <button
                          onClick={() => {
                            setOpen(false);
                            navigate("/about");
                          }}
                          type="button"
                          class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-gray-400"
                          aria-expanded="false"
                        >
                          About
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ml-auto flex items-center">
                  <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/login-from");
                      }}
                      to="/login-form"
                      class="text-sm font-medium text-white  hover:text-gray-400"
                    >
                      Sign in
                    </button>
                    <span
                      class="h-6 w-px bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/sign-up");
                      }}
                      to="/sign-up"
                      class="text-sm font-medium text-white  hover:text-gray-400"
                    >
                      Create account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Navbar;
