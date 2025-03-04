import React from 'react';

const catchAllSegments = async ({ params }) => {
    const slugsData = params.slugs;


    const slugNames = slugsData.map((slug, index) => {
        return { name: `Slug ${index + 1}`, value: slug };
    });

    console.log(slugNames);

    return (
        <div>
            catchAllSegments:
            <ul>
                {slugNames.map((slug, index) => (
                    <li key={index}>
                        <strong>{slug.name}:</strong> {slug.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default catchAllSegments;
