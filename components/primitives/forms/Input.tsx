interface InputProps {
  placeholder: string;
  name: string;
  formRef: any;
}

export default function Input(props: InputProps) {
  return (
    <input
      className="text-md w-full rounded border-[1px] border-zinc-300 p-1"
      name={props.name}
      placeholder={props.placeholder}
      ref={props.formRef}
    />
  );
}
