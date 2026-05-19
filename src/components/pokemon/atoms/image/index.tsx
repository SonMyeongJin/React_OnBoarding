'use client';

type ProfileProps = {
  pokeName: string;
  imageUrl: string;
};

function Image({ pokeName, imageUrl }: ProfileProps) {
  return (
    <div>
      <img alt={pokeName} src={imageUrl} />
    </div>
  );
}

export default Image;

// hitokage.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
// pika.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
