import Card from "../../components/Card";
import * as data from "../../data.json";

const dados = data.steps;

export default function Home() {
    const { durations } = data;

    return (
        <div>
            <header>Cards and timer</header>

            {dados.map((itemcolor, index) => (
                <div key={index}>
                    <Card
                        color={Object.entries(itemcolor)[1][1]}
                        duration={Object.entries(durations)[index][1]}
                    />
                </div>
            ))}
        </div>
    );
}