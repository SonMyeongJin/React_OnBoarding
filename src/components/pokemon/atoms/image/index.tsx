'use client';

type ProfileProps = {
    pokeIndex: number;
};

function Image({pokeIndex}: ProfileProps) {
    return (
        <div>
            <img alt="Pokemon"
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`}/>
        </div>
    );
}

export default Image;


// hitokage.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
// pika.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
