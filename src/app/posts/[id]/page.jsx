import React from 'react';

const loadSinglePosts = async (postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await res.json();
    return data
}

const page = async ({ params }) => {
    // const paramsData = await params;
    const post = await loadSinglePosts(params.id)
    console.log(post)
    return (
        <div className='lg:max-w-[50%] bg-blue-50 p-10 rounded'>
            <p>userId: {post?.userId}</p>
            <p>title: {post?.title}</p>
            <p>body: {post?.body}</p>
        </div>
    );
};

export default page;