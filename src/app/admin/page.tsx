export default function AdminPage() {
    const inputClasses = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full mx-4 p-6 rounded-lg shadow-xl">
                <h1 className="text-3xl mb-5">Ingrese los datos del Producto</h1>
                <form>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="product" id="product" className={inputClasses} placeholder=" " required />
                        <label htmlFor="product" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del Producto</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="price" id="price" className={inputClasses} placeholder=" " required />
                        <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio del Producto</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="category" id="" className="w-full border-0 border-b-2 border-gray-600 py-2.5" required>
                            <option value="all">Categoria</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="file" name="image" id="image" className={inputClasses} placeholder=" " required />
                        <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Imágen del Producto</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
    );
}
