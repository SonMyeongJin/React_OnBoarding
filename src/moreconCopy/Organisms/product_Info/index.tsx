'use client';

import type {FormEvent} from 'react';

function Product_Info() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch('/api/products', { body: formData, method: 'POST' });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'block' }}>
        Product Name
        <input name="query123" />
      </label>
      <hr />
      <label style={{ display: 'block' }}>
        Description Product
        <button type="submit">버튼입니당</button>
      </label>
      <hr />
      Product Image
      <br />
      <label>
        option1
        <input name={'skill1'} type="checkbox" />
      </label>
      <br />
      <label>
        option2
        <input name={'skill2'} type="checkbox" />
      </label>
      <br />
      <label>
        option3
        <input name={'skill3'} type="checkbox" />
      </label>
    </form>
  );
}

export default Product_Info;
