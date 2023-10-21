import { FC } from "react";
import style from '../../style/ui.module.scss'

type IProps = {
  text: string;
  additionalClass?: string;
};

const Button: FC<IProps> = ({ text, additionalClass }) => {
  return (
    <button
      className={` ${additionalClass}  ${style['ui-btn']} `}
    >
      {text}
    </button>
  );
};

export default Button;
