import { useContext } from "react";
import { Form } from "./Form";
import { ThemeContex } from "./Theme";

export function Card() {
  const theme = useContext(ThemeContex);
  return (
    <div style={{padding: '50px'}}>
      <Form />
      <button style={{background: theme.background, color: theme.color}}>Aperte</button>
    </div>
  )
}