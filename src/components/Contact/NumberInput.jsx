import { InputMask } from "@react-input/mask";

export default function NumberInput() {
  return (
    <InputMask mask="+7 (___) ___-__-__" showMask replacement={{ _: /\d/ }} />
  );
}
