import React from 'react';

const page = ({ params }) => {

    const features = [{
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

    const id = params?.id

    const singleData = features.find(features => features._id === id)
    if (singleData) {
        return (
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{singleData?.service_name}</h2>
                    <p>{singleData?.service_description}</p>
                </div>
                <figure>
                    <img src={singleData?.service_image}
                        alt="Shoes" />
                </figure>
            </div>
        );
    } else {
        return (
            <div>
                <p className='text-red-400'>Your requested data not found</p>
            </div>
        )
    }
};

export default page;