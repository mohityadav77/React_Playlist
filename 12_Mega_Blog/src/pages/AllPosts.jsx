import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function AllPosts() {
    const [posts, setPosts] = useState([])

    const userData = useSelector((state) => state.auth?.userData)

    useEffect(() => {
        if (!userData) return

        appwriteService
            .getPosts([
                Query.equal("userId", userData.$id)
            ])
            .then((posts) => {
                console.log("MY POSTS:", posts)

                if (posts) {
                    setPosts(posts.rows)
                }
            })
    }, [userData])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts