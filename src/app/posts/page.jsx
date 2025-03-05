import React from 'react';

const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}

const posts = async () => {
    const posts = await loadPosts();
    // console.log(posts)
    return (
        <div className='grid grid-cols-3 gap-10 m-12'>
            {
                posts.map(({ userId, id, title, body }) => (
                    <div key={id}>
                        <p>userId: {userId}</p>
                        <p>title: {title}</p>
                        <p>body: {body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default posts;