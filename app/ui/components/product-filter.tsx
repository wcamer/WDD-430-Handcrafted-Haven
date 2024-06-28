


export async function ProductFilterButtons(){
    return (
        <div className="flex justify-around p-6 lg:grid grid-cols-6" >
            <button className="hover:bg-black hover:text-white lg:col-start-2" >A-Z</button>
            <button className="hover:bg-black hover:text-white lg:col-start-3">Price</button>
            <button className="hover:bg-black hover:text-white lg:col-start-4">New</button>
            <button className="hover:bg-black hover:text-white lg:col-start-5">Rating</button>

        </div>
    )



}