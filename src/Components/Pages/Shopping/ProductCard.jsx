import Swal from "sweetalert2";

const ProductCard = ({ product, products, setProducts }) => {
    const {  name, brand, price, type, photo } = product;
    const handleDelete = name => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/carts/${name}`, {
                        method: 'DELETE'

                    }).then(res => res.json()
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Are you sure that you want to delete it?',
                                    'success'
                                )
                            }
                        }))
                    const remaining = products.filter(product => product.name !== name);
                    console.log(remaining);
                    setProducts(remaining);
                }
            })

    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="card md:card-side bg-base-100 shadow-xl">
                    <figure><img src={photo} alt={name} className="md:w-96 w-2/3 md:h-60 lg:h-[350px]"/></figure>
                    <div className="card-body">
                        <div className="space-y-2">
                            <h2 className="text-xl"><span className="font-bold">Name:</span> {name}</h2>
                            <p><span className="text-lg font-bold">Band Name: </span>{brand}</p>
                            <p><span className="text-lg font-bold">Type: </span>{type}</p>
                            <p><span className="text-lg font-bold">Price: </span>$ {price}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(name)} className="btn bg-[#C1032F] text-white hover:bg-[#303030] hover:text-white normal-case">Delete
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default ProductCard;