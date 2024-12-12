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
              <Link href="/team-members">Team Members</Link>
            </li>
            <li>
              <Link href="/prototype">Prototype</Link>
            </li>
            <li>
              <Link href="/glossary">Glossary</Link>
            </li>
            <li>
              <Link href="/references">References</Link>
            </li>
            <li>
              <a>Algorithms</a>
              <ul className="p-2">
                <li>
                  <Link href="/algorithms/info-collection">
                    Restaurant Collection
                  </Link>
                </li>
                <li>
                  <Link href="/algorithms/user-registration">
                    User Registration
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Deliverables</a>
              <ul className="p-2">
                <li>
                  <Link href="/deliverables/current-process-flow">
                    Current Process Flow
                  </Link>
                </li>
                <li>
                  <Link href="/deliverables/solution-process-flow">
                    Solution Process Flow
                  </Link>
                </li>
                <li>
                  <Link href="/deliverables/risk-matrix">Risk Matrix</Link>
                </li>
                <li>
                  <Link href="/deliverables/competition-matrix">
                    Competition Matrix
                  </Link>
                </li>
                <li>
                  <Link href="/deliverables/work-breakdown">
                    Work Breakdown
                  </Link>
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
                  <Link href="/presentations/design">Design</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Story">User Stories</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-3xl">
          GrubTurbo
        </Link>
      </div>
      <div className="shrink xl:navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link href="/problem">Problem</Link>
          </li>
          <li>
            <Link href="/solution">Solution</Link>
          </li>
          <li>
            <Link href="/team-members">Team Members</Link>
          </li>
          <li>
            <Link href="/prototype">Prototype</Link>
          </li>
          <li>
            <Link href="/glossary">Glossary</Link>
          </li>
          <li>
            <Link href="/references">References</Link>
          </li>
          <li>
            <details>
              <summary>Algorithms</summary>
              <ul className="p-2">
                <li>
                  <Link href="/algorithms/info-collection">
                    Restaurant Collection
                  </Link>
                </li>
                <li>
                  <Link href="/algorithms/user-registration">
                    User Registration
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Deliverables</summary>
              <ul className="p-2">
                <li>
                  <Link href="/deliverables/current-process-flow">
                    Current Process Flow
                  </Link>
                </li>
                <li>
                  <Link href="/deliverables/solution-process-flow">
                    Solution Process Flow
                  </Link>
                </li>
                <li>
                  <Link href="/deliverables/risk-matrix">Risk Matrix</Link>
                </li>
                <li>
                  <Link href="/deliverables/competition-matrix">
                    Competition Matrix
                  </Link>
                </li>
                <li>
                  <Link href="/deliverables/work-breakdown">
                    Work Breakdown
                  </Link>
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
                  <Link href="/presentations/design">Design</Link>
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
