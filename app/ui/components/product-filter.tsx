import Products from '@/app/ui/products.module.css';

export async function ProductFilterButtons() {
  return (
    <div>
      <h2 className="p-6 text-center">Sort By:</h2>
      <div className={`${Products.filterBtnContainer}`}>
        <button className={`${Products.filterBtn}`}>A-Z</button>
        <button className={`${Products.filterBtn}`}>Price Ascending</button>
        <button className={`${Products.filterBtn}`}>Price Descending</button>
        <button className={`${Products.filterBtn}`}>Rating</button>
      </div>
    </div>
  );
}
