import Button from "@components/atoms/button";
import Title from "@components/atoms/title";
import PizzaCard from "@components/molecules/PizzaCard/PizzaCard";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Title title="Le texte en H2 ici" />
            <Button
                label="Click me"
                onClick={() => alert("Bravo, le bouton a été cliqué !")}
            />
            <hr />
            <PizzaCard />
        </div>
    );
}
