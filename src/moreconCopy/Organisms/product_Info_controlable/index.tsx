'use client';

import { type SubmitEventHandler, useState } from 'react';
import { useSearchPokemon } from '../../../components/pokemon/entities/pokemon/usePokemon';

function Product_Info() {
  const [productName, setProductName] = useState('');
  const [pokemonData, searchPokemon] = useSearchPokemon();

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchPokemon(productName);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label style={{ display: 'block' }}>
        Pokemon Name or ID
        <input
          name="query123"
          onBlur={(e) => (e.target.value === 'hihihi' ? setProductName('hohoho') : setProductName(e.target.value))}
          onChange={(e) => (e.target.value === 'hahaha' ? setProductName('hohoho') : setProductName(e.target.value))}
          type="text"
          value={productName}
        />
      </label>
      <br />
      <p> product : {productName}</p>
      <br />
      <hr />
      <label style={{ display: 'block' }}>
        Description Product
        <button type="submit">버튼입니당</button>
      </label>
      <hr />
      Product Image
      <br />
      {/*<textarea cols={10} readOnly={true} rows={5} value={pokemonData?.toString()} />*/}
      {pokemonData && (
        <p>
          pokemonData : {pokemonData.id} / {pokemonData.name}
        </p>
      )}
    </form>
  );
}

export default Product_Info;
