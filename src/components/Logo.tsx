import { SITE_NAME } from "../lib/constants";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  return (
    <span className={`inline-flex items-center font-semibold md:text-2xl text-lg`}>
      {SITE_NAME}
    </span>
  );
};

export { Logo };
