import { ButtonProps } from "@types";

export default function DeleteButton({ onClick, label }: ButtonProps) {
    return (
        <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
