import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-small.png";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/">
          <Image
            src={logo}
            priority={true}
            alt="logo"
            width={150}
            height={30}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            {session ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {session && (
                    <Image
                      src={session?.user?.image}
                      className="profile-img"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  )}
                  <span>{session && session?.user?.name}</span>
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">My Profile</li>
                  <li className="dropdown-item">Settings</li>
                  <li className="dropdown-item">
                    <button
                      className="btn p-0"
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button onClick={handleShow} className="btn btn-outline-success">
                Login
              </button>
            )}

            <LoginModal handleClose={handleClose} show={show} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
