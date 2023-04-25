const Button = ({ type, className, title, onClick, name, value }) => {
  return (
    <button
      className={`flex items-center border border-bordergray rounded-[100px] py-3 px-4 text-sm leading-4 font-semibold  ${
        className ? className : ""
      } `}
      name={name}
      value={value}
      type={type}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
