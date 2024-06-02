import Image from "next/image";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import googleIcon from "@/assets/google-logo.svg";
import { useRouter } from "next/router";

const RedirectUser = () => {
  // const { router } = useRouter();
  // console.log(router.pathname);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && router.pathname !== "/") {
  //     localStorage.setItem("redirectUrl", window.location.href);
  //   }
  // }, [router]);
  // const handleSignIn = () => {
  //   const redirectUrl = localStorage.getItem("redirectUrl") || "/";
  //   signIn("google", { callbackUrl: redirectUrl });
  // };

  return (
    <>
      <section className="request-user-section">
        <div className="container">
          <div className="content">
            <button
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
              // onClick={handleSignIn}
              className="btn"
            >
              <Image src={googleIcon} width={26} height={26} alt="22" />
              <span>Continue With Google</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RedirectUser;
