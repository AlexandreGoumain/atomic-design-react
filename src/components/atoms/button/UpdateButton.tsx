import { ButtonProps } from "@types";

export default function UpdateButton({ onClick, label }: ButtonProps) {
    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
