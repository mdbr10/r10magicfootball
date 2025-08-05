import { IInputProps } from "./types";

function Input({ placeholder, type = "text", value, onChange, error, ...rest }: IInputProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary-green focus:border-2 text-base font-normal font-body placeholder:text-gray-500"
        {...rest}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1 block font-body">{error}</span>
      )}
    </div>
  );
}

export default Input;
