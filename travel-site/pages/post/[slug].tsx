import { GetStaticProps } from 'next'
import React from 'react'
import Nav from '../../Components/Nav';
import { sanityClient, urlFor} from '../../sanity-file'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'


interface Props {
    post: Post;
}

const Post = ({ post}: Props) => {
  return (
    <main>
        <Nav />
        <div className="grid h-screen xl:grid-cols-2 grid-cols-1">
            <img src={urlFor(post.mainImage).url()!} alt="" className=" w-screen  object-cover h-full" />
            <article className="flex flex-col">
                <h1 className=" flex justify-center font-bold uppercase p-10 text-yellow-500 text-[2em] xl:text-6xl 2xl:text-7xl">{post.title}</h1>
                <hr className="border mx-20 border-black my-3 flex justify-center items-center" />
                <PortableText
              className=" xl:my-10 2xl:my-20 xl:text-sm text-[.7em] 2xl:text-lg flex flex-col xl:mb-10 2xl:mb-60 space-y-4 justify-center py-6 px-8 xl:px-10leading-8 break-before-auto"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                
              }}
            />
            <div className="bg-black h-full 2xl:h-full cursor-pointer text-white flex justify-center text-xl xl:text-4xl duration-500 mt-4 font-bold items-center hover:bg-yellow-500"><a href="/Gallery">Explore More Locations!</a></div>
            </article>
            
        </div>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type=="post"]{
        _id,
        title,
        slug,
        author ->{
          name,
          image
        },
        'allcategories':*[
          _type=="category"
        ],
      body,
      categories,
      description,
      mainImage
      }`;

      const post = await sanityClient.fetch(query)

      const paths = post.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
      }))

      return {
        paths,
        fallback: "blocking"
      }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type=="post"&& slug.current==$slug][0]{
        _id,
      _createdAt,
      title,
      author->{
      name,
      image
    },
      'comments': *[
      _type=="comment" &&
      post._ref==^._id &&
      approved==true],
    categories,
    'allcategories':*[
      _type=="category"
    ],
    description,
    mainImage,
    slug,
    body
      }`

      const post = await sanityClient.fetch(query, { slug: params?.slug })

  if (!post || post.length === 0) {
    return { notFound: true }
  }
  return {
    props: {
      post,
    },
    revalidate: 500,
  }
}