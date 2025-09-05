function GreenTick() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="20"
        y1="55"
        x2="40"
        y2="75"
        stroke="green"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="75"
        x2="80"
        y2="25"
        stroke="green"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default GreenTick;
