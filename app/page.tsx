const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$49",
    img: "https://picsum.photos/500?random=1",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-10">AKRAM STORE</h1>

      {products.map((p) => (
        <div key={p.id} className="bg-white/10 p-5 rounded-3xl max-w-sm">
          <img src={p.img} className="w-full h-64 object-cover rounded-2xl" />

          <h2 className="text-2xl mt-4">{p.name}</h2>

          <p className="text-purple-400 text-xl">{p.price}</p>

          <a
            href="/product"
            className="block mt-4 bg-purple-600 text-center py-3 rounded-xl"
          >
            Buy
          </a>
        </div>
      ))}
    </main>
  );
}