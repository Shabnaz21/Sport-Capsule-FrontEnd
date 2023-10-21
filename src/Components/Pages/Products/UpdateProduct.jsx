import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const productData = useLoaderData();
    const { _id, name, brand, price, rating, type, photo } = productData;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const updateProduct = { name, brand, price, rating, type, photo }
        console.log(updateProduct);
        form.reset();

        fetch(`https://sport-capsule-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'success',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
    }

    return (
        <>
            <div className="container mx-auto m-20">
                <div className="bg-[#F3ECED] rounded-xl mx-2 md:mx-5 p-2 pb-8 pt-8 ">
                    <div className="text-center ">
                        <h2 className="text-4xl m-4 font-semibold font-jost">Update Product Information</h2>
                        <p className="lg:mx-36">Easily modify product details, including descriptions, images, prices, and availability, ensuring your customers stay up-to-date with the latest sports-inspired fashion trends.</p>
                    </div>
                    <div>
                        <form onSubmit={handleUpdateProduct} className=" lg:mx-40 mt-10 space-y-3">
                            <div className="md:flex gap-20 ">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name='name' defaultValue={name} placeholder="Enter Product Name" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Brand Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='brand' defaultValue={brand} placeholder="Enter Brand Name" className="input p-3 w-full input-bordered" />
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
                                        <input type="text" name='price' defaultValue={price} placeholder="$ Enter Product'd Updated Price" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Rating</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='rating' defaultValue={rating} placeholder="Enter Updated Rating of Product" className="input p-3 w-full input-bordered" />
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
                                        <input type="text" name='type' defaultValue={type} placeholder="Enter Product's Type" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Photo</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter updated Product Photo URL" className="input p-3 w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="form-control">
                                <input type="submit" value="Update Product's" className="text-xl font-Rancho
                            rounded-xl bg-[#C1032F] text-white border-2 hover:bg-[#303030] hover:text-white mt-5 p-4 w-4/6 font-semibold" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;