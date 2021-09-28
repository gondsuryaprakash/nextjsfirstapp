import { useRouter } from 'next/router'

const  Blog = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Blog</h1>
            <p>The Blog Id with {router.query.id}</p>
        </div>

    )
}

export default Blog