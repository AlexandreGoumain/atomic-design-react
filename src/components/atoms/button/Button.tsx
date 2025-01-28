import { ButtonProps } from "@types";

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
