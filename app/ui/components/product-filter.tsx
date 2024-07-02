import Products from '@/app/ui/products.module.css';


export async function ProductFilterButtons(){
    return (
        <div>
            <h2 className="text-center p-6">Sort By:</h2>
            <div className={`${Products.filterBtnContainer}`} >
                <button className={`${Products.filterBtn}`} >A-Z</button>
                <button className={`${Products.filterBtn}`}>Price</button>
                <button className={`${Products.filterBtn}`}>New</button>
                <button className={`${Products.filterBtn}`}>Rating</button>

            </div>
        </div>
        
    )



}