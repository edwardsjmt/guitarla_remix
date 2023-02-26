import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from "~/components/listado-posts"
import { getCurso } from "~/models/curso.server"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import stylesGuitarras from "~/styles/guitarras.css"
import stylesPosts from "~/styles/blog.css"
import stylesCurso from "~/styles/curso.css"
import Curso from "~/components/curso"

export async function loader () {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(), 
    getCurso()
  ])

  return {
    guitarras: guitarras.data, 
    posts: posts.data, 
    curso: curso.data
  }
}

export function links () {
  return [
    {
      rel: "StyleSheet",
      href: stylesGuitarras
    },
    {
      rel: "StyleSheet",
      href: stylesPosts
    },
    {
      rel: "StyleSheet",
      href: stylesCurso
    },
    
  ]
}

export function meta () {

}

function Index () {
  const {guitarras, posts, curso} = useLoaderData()
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  )
} 

export default Index

