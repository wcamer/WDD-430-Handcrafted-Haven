


export async function ProductFilterButtons(){
    return (
        <div>
            <h2 className="text-center p-6">Sort By:</h2>
            <div className="flex justify-around p-3 lg:grid grid-cols-6" >
                <button className="hover:bg-black hover:text-white lg:col-start-2 outline p-2 m-2" >A-Z</button>
                <button className="hover:bg-black hover:text-white lg:col-start-3 outline p-2 m-2">Price</button>
                <button className="hover:bg-black hover:text-white lg:col-start-4 outline p-2 m-2">New</button>
                <button className="hover:bg-black hover:text-white lg:col-start-5 outline p-2 m-2">Rating</button>

            </div>
        </div>
        
    )



}