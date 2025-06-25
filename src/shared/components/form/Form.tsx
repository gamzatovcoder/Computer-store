import { JSX } from "react";
type Props = {
   id?: string;
   children: JSX.Element;
};
const Form = ({ id, children }: Props) => {
   return <form id={id}>{children}</form>;
};

export default Form;
