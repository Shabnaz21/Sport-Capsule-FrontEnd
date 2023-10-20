import Swal from "sweetalert2";

const AddProducts = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newProduct = { name, brand, price, rating, type, description, photo }
        console.log(newProduct);
        form.reset();

        //send Data
        fetch('http://localhost:5001/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'New Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }
    return (
        <>
            <div className="container mx-auto m-20">
                <div className="bg-[#F3ECED] rounded-xl mx-2 md:mx-5 p-2 pb-8 pt-8 ">
                    <div className="text-center ">
                        <h2 className="text-4xl m-4 font-semibold font-jost">Add New Product</h2>
                        <p className="lg:mx-36">Share product details, images, and descriptions to showcase your sportswear creations. Our platform makes it easy for you to connect with fashion enthusiasts and share your unique designs with the world.</p>
                    </div>
                    <div>
                        <form onSubmit={handleAddProduct} className=" lg:mx-40 mt-10 space-y-3">
                            <div className="md:flex gap-20 ">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name='name' placeholder="Enter Product Name" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Brand Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='brand' placeholder="Enter Brand Name" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="md:flex gap-20">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Price</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name='price' placeholder="$ Enter Product Price" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Rating</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='rating' placeholder="Enter Rating of Product" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="md:flex gap-20">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Type</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name='type' placeholder="Enter Product's Type" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Short Description</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='description' placeholder="Enter Product's Details" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="form-control w-[85%]">
                                <label className="label">
                                    <span className="text-xl font-semibold">Photo</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='photo' placeholder="Enter Product Photo URL" className="input p-3 w-full lg:w-[86%] input-bordered" />
                                </label>
                            </div>
                            {/* Button */}
                            <div className="form-control flex place-content-center">
                                <input type="submit" value="Add Product" className="text-xl font-Rancho
                            rounded-xl bg-[#C1032F] text-white border-2 hover:bg-[#303030] hover:text-white mt-5 p-4 w-4/6 font-semibold" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProducts;