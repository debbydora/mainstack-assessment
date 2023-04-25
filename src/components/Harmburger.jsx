const Harmburger = ({ mobileMenu, setMobileMenu }) => {
  return (
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className={`${
        mobileMenu && "open"
      } block hamburger sm:hidden focus:outline-none`}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
};

export default Harmburger;
