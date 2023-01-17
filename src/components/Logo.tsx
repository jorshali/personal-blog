import { SITE_NAME } from "../lib/constants";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-2xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center ${fontStyle}`}>
      {SITE_NAME}
    </span>
  );
};

export { Logo };
