const ProductPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-cache",
  });
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPage;
