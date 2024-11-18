import Link from "next/link";
import { root } from "postcss";

export default function Navbar() {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/problem">Problem</Link>
            </li>
            <li>
              <Link href="/solution">Solution</Link>
            </li>
            <li>
              <a>Team Members</a>
            </li>
            <li>
              <a>Glossary</a>
            </li>
            <li>
              <a>References</a>
            </li>
            <li>
              <a>Deliverables</a>
              <ul className="p-2">
                <li>
                  <a>Current Process Flow</a>
                </li>
                <li>
                  <a>Solution Problem Flow</a>
                </li>
                <li>
                  <a>Risk Matrix</a>
                </li>
                <li>
                  <a>Competition Matrix</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Presentations</a>
              <ul className="p-2">
                <li>
                  <Link href={"/presentations/feasibility"}>Feasibility</Link>
                </li>
                <li>
                  <a>Design</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-3xl">
          GrubTurbo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link href="/problem">Problem</Link>
          </li>
          <li>
          <Link href="/solution">Solution</Link>
          </li>
          <li>
            <a>Team Members</a>
          </li>
          <li>
            <a>Glossary</a>
          </li>
          <li>
            <a>References</a>
          </li>
          <li>
            <details>
              <summary>Deliverables</summary>
              <ul className="p-2">
                <li>
                  <a>Current Process Flow</a>
                </li>
                <li>
                  <a>Solution Process Flow</a>
                </li>
                <li>
                  <a>Risk Matrix</a>
                </li>
                <li>
                  <a>Competition Matrix</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Presentations</summary>
              <ul className="p-2">
                <li>
                <Link href="/presentations/feasibility">Feasibility</Link>
                </li>
                <li>
                  <a>Design</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
          <Link href="/Story">User Stories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
