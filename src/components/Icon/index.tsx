import { ReactElement } from "react";
import Google from "./icons/google.svg?react";
import Loader from "./icons/cog.svg?react";

export interface IconProps {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
  [key: string]: any;
}

interface IconComponents {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: IconComponents = {
  Loader,
  Google,
};

export const Icon = ({
  icon,
  color,
  size,
  className,
  ...rest
}: IconProps): ReactElement => {
  const Component = icons[icon];

  return (
    <Component
      {...rest}
      fill={color}
      width={size}
      height={size}
      className={className}
    />
  );
};
