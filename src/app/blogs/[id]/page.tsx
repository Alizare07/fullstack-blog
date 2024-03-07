import Comments from "@/components/Comments"
import FormComment from "@/components/FormComment"


const BlogDetails = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post One</h1>
      <div className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rerum maiores hic odio veritatis. Nulla commodi atque sint autem veniam reiciendis cumque eos, unde optio, aliquam laboriosam sequi ullam adipisci.
      </div>
      <Comments/>
      <FormComment/>

    </div>
  )
}

export default BlogDetails