import { useSession, signIn } from "next-auth/react";
import { Button, Modal } from "react-bootstrap";
import googleIcon from "@/assets/google-logo.svg";
import Image from "next/image";
const LoginModal = ({ handleClose, show }) => {
  // console.log(session);
  return (
    <Modal className="login-modal" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button
          onClick={() => {
            signIn("google", { callbackUrl: "/" });
          }}
          className="btn"
        >
          <Image src={googleIcon} width={26} height={26} alt="22" />
          <span>Continue With Google</span>
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
