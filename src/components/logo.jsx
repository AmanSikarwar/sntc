import sntcLogo from "../assets/sntc-logo.png";

function Logo() {
  return (
    <div className="App flex justify-center m-4">
      <img src={sntcLogo} alt="SNTC Logo" width={64} />
    </div>
  );
}

export default Logo;
