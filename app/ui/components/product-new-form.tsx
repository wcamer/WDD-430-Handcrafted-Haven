import PE from '@/app/ui/product-edit.module.css' // will be changed

export function NewProductForm(){

    return (
        <form className={`${PE.form} flex p-2 m-2`}>
            <fieldset className={`${PE.formFieldset} p-2 m-2 flex flex-col outline `}>
                <legend className="text-2xl text-center p-2 m-2">New Product Form</legend>
                <label className="text-xl">Price</label><br></br>
                <input type='number' placeholder="200.30"></input><br></br>
                <label className="text-xl">Image</label><br></br>
                <input type='file'></input><br></br>
                <label className="text-xl">Product Description</label><br></br>
                <textarea  required placeholder="Add Product description"></textarea><br></br>
                <button className={`${PE.submitBtn}  `}>
                Submit New Product
                </button>
            </fieldset>
            
        </form>
    )
}