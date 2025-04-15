import cn from "classnames";
import { FC } from "react";

import styles from "./button.module.scss";
import { IButtonProps } from "./button.props";

export const Button: FC<IButtonProps> = ({ counter, variant="primary", children, ...props }) => (
  <button
    className={cn({
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.animate]: variant === "animate",
      [styles.outline]: variant === "outline",
    })}
    {...props}>
    {!!counter && <div className={styles.counter}>{counter}</div>}
    {children}
  </button>
);

