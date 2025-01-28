import { TitleProps } from "@types";

export default function Title({ title }: TitleProps) {
    return <h2 className="text-4xl font-bold text-blue-600">{title}</h2>;
}
