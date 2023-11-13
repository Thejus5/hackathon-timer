import { ButtonWrapper } from "./button.style";

function Button({
  label,
  variant,
  className,
}: Readonly<{
  label: string;
  variant: "primary" | "secondary";
  className?: string;
}>) {
  return (
    <ButtonWrapper variant={variant} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="173"
        height="52"
        viewBox="0 0 173 52"
        fill="none"
        className="buttonFill"
      >
        <path
          d="M153.898 0H0V34.8861L21.9854 52H97.4927H173V18.4304L153.898 0Z"
          fill="#FF0000"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="173"
        height="52"
        viewBox="0 0 173 52"
        fill="none"
        className="buttonSecondary"
      >
        <path
          d="M0.518368 34.6327V0.518368H153.689L172.482 18.6505V51.4816H97.4927H22.1634L0.518368 34.6327Z"
          stroke="url(#paint0_linear_18_13598)"
          stroke-width="1.03674"
        />
        <defs>
          <linearGradient
            id="paint0_linear_18_13598"
            x1="173"
            y1="52"
            x2="-2.63506"
            y2="11.3989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF0000" />
            <stop offset="1" stop-color="#DD0000" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="173"
        height="52"
        viewBox="0 0 173 52"
        fill="none"
        className="buttonPrimaryHover"
      >
        <path
          d="M153.898 0H0V34.8861L21.9854 52H97.4927H173V18.4304L153.898 0Z"
          fill="#D10000"
        />
      </svg>
      <p>{label}</p>
    </ButtonWrapper>
  );
}

export default Button;
