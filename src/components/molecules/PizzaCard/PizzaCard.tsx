import Button from "@components/atoms/button";
import Title from "@components/atoms/title";

export default function PizzaCard() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Title title="Commandez votre pizza" />
            <h1>test Pizzacard</h1>
            <Button
                label="Commander"
                onClick={() =>
                    alert("Bravo, vous avez bien commandé votre Pizza !")
                }
            />
        </div>
    );
}
