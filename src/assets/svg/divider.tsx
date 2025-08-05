function Divider() {
  return (
    <svg
      fill="none"
      height={12}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-3"
    >
      <line
        x1="1.74846e-08"
        y1="3.8"
        x2="98%"
        y2="3.80001"
        stroke="url(#paint0_linear_277_963)"
        strokeWidth="0.4"
      />
      <circle cx="98%" cy="4" r="3.75" stroke="#00FF63" strokeWidth="0.5" />
      <circle cx="98%" cy="4" r="1" fill="#00FF63" />
      <defs>
        <linearGradient
          id="paint0_linear_277_963"
          x1="-4.37114e-08"
          y1="4.5"
          x2="151"
          y2="4.50001"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.485" stopColor="#00FF63" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Divider;
