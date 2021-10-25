import clsx from "clsx";

import "./CustomComponent.scss";
import { ReactNode } from "react";

interface CustomComponentProps {
  title?: ReactNode;
  body?: ReactNode;
  active?: boolean;
}
export default function CustomComponent(props: CustomComponentProps) {
  return (
    <div
      className={clsx(
        "CustomComponent__root",
        props.active && "CustomComponent__root--is-active"
      )}
    >
      <div className="CustomComponent__header">{props.title}</div>
      <div className="CustomComponent__body">{props.body}</div>
    </div>
  );
}
