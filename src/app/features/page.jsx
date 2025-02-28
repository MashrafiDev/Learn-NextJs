import Link from 'next/link';
import React from 'react';

const page = () => {

    const features = [
        {
            _id: "1a2b3c4d",
            service_name: "Web Development",
            service_image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
            service_description: "Professional web development services including frontend and backend development."
        },
        {
            _id: "5e6f7g8h",
            service_name: "Graphic Design",
            service_image: "https://wearebluegrass.com/wp-content/uploads/2024/05/importance-of-graphic-design-services-in-digital-marketing-2.png",
            service_description: "Creative graphic design services for branding, marketing, and digital content."
        },
        {
            _id: "9i0j1k2l",
            service_name: "SEO Optimization",
            service_image: "https://5.imimg.com/data5/SELLER/Default/2021/1/BY/OB/JX/29699789/seo-optimization-service.png",
            service_description: "Boost your website’s ranking with our expert SEO optimization services."
        },
        {
            _id: "3m4n5o6p",
            service_name: "Digital Marketing",
            service_image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg",
            service_description: "Comprehensive digital marketing strategies to increase brand visibility and engagement."
        }
    ];


    return (
        <div>
            <h1 className="text-center my-4 text-xl">Features Page</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    features.map(({ _id, service_name, service_image, service_description }) => <div key={_id} className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={service_image}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service_name}</h2>
                            <div className="card-actions">
                                <Link href={`/features/${_id}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div >
        </div >
    );
};

export default page;