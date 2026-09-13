import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function Home() {

    const [posts, setPosts] = useState([])

    const userData = useSelector((state) => state.auth?.userData)

    useEffect(() => {

        if (!userData) {
            setPosts([])
            return
        }

        appwriteService.getPosts([
            Query.equal("userId", userData.$id)
        ]).then((response) => {

            console.log("USER ID:", userData.$id)
            console.log("POSTS FROM APPWRITE:", response)

            if (response) {
                setPosts(response.rows || [])
            } else {
                setPosts([])
            }

        }).catch((error) => {
            console.log("GET POSTS ERROR:", error)
            setPosts([])
        })

    }, [userData])


    if (!userData) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        )
    }


    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">

                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="p-2 w-1/4"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Home