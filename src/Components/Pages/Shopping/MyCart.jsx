const MyCart = () => {
    return (
        <div className="container mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <figure><img src='' alt={'photo'} className="lg:w-[300px] w-2/3 md:h-[250px] lg:h-[350px]" /></figure>
                </div>
                <div className="card-body">
                    <div className=" text-left flex  mt-10  mx-8">
                        <div>
                            <h2 className="text-xl"><span className="font-bold">Name:</span> {'name'}</h2>
                            <p><span className="text-lg font-bold">Band Name: </span>{'brand'}</p>
                            <p><span className="text-lg font-bold">Type: </span>{'type'}</p>
                            <p><span className="text-lg font-bold">Price: </span>$ {'price'}</p>
                            <p><span className="text-lg font-bold">Rating: </span>{'rating'}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MyCart;