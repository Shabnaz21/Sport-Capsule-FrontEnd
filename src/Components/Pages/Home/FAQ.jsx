import AccordionItem from "./AccordionItem";

const FAQ = () => {
    return (
        <section className="relative z-20 overflow-hidden  pt-20 pb-12 lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[820px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold font-jost text-[#F1615A]">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost  md:text-[40px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base px-3 text-body-color">
                                We understand that you may have questions about our products, services, and policies. We've compiled a list of commonly asked questions to provide you with the information you need.
                                If you can't find the answer you're looking for, please feel free to reach out to our customer support team.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How do I place an order?"
                            text="To place an order, simply browse our product catalog, select the items you wish to purchase, and add them to your shopping cart. When you're ready, click on the cart icon in the top right corner of the website, 
                            review your selections, and proceed to checkout. Follow the step-by-step instructions to complete your order."
                        />
                        <AccordionItem
                            header="How long will it take to receive my order?"
                            text="The delivery time may vary depending on your location and the shipping method you choose. Generally, we aim to process and ship orders within 1-3 business days. Standard shipping typically 
                            takes 5-7 business days, while expedited shipping options are available for quicker delivery."
                        />
                        <AccordionItem
                            header="Can I return or exchange a product?"
                            text="Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within 30 days of receiving the 
                            item for a full refund or exchange. Please review our Returns and Refunds page for detailed instructions."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How can I track my order?"
                            text="The duration of our retreats varies depending on the package you select. We offer options ranging from weekend getaways to extended 30-day retreats. Check the details of each package for specific duration information."
                        />
                        <AccordionItem
                            header="Is there a minimum age requirement for participants?"
                            text="Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and 
                            location of your package. Simply enter the tracking number on our Order Tracking page to get real-time updates."
                        />
                        <AccordionItem
                            header="Are the products on your website authentic?"
                            text="We take pride in offering only authentic products from well-known brands. We source our inventory 
                            directly from authorized distributors and reputable suppliers to ensure the highest quality and authenticity."
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default FAQ;
