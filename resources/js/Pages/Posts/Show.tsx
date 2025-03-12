import Nav from "@/Components/Nav"
import { Button } from "@/Components/ui/button"
import { ShowProps } from "@/types/post"
import {Head, Link, router} from "@inertiajs/react"
import { Heart } from "lucide-react"

export default function Show({auth, post}: ShowProps) {

    const handleLike = ()=> {
        if(!auth.user){
            window.location.href = route('login')
            return;
        }
        router.post(route('posts.like', post.id), {} , {
            preserveScroll : true,
            preserveState: true
        })
    }

    const handleDelete = () => {
        if(confirm('Et tu veux vraiment supprimer ce post ?')){
            router.delete(route('posts.destroy', post.id))
        }
    }


    const canEdit = auth.user?.id === post.user_id
  return (
    <div className="min-screen bg-gray-50">
         <Head title={post.title} />
         <Nav />

         <div className="py-12">
            <article className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-md sm:rounded-lg">
                    <div className="p-6">
                        <div className="mb-6 flex justify-between items-center">
                            <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                retour
                            </Link>
                            {canEdit && (
                                <div className="flex gap-4">
                                    <Link href={route('posts.edit', post.id)} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                        Modifier
                                    </Link>
                                    <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition-colors">
                                        Supprimer
                                    </button>
                                </div>
                            )}
                        </div>

                        {post.image && (
                            <div className="mb-8">
                                <img src={`/storage/${post.image}`} alt={post.title} className="w-full h-96 object-cover rounded-lg" />
                            </div>
                        )}

                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {post.title}
                        </h1>


                        <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-4">
                                <span>Par {post.author.name} </span>
                                <span>•</span>
                                <span>{new Date(post.created_at).toLocaleDateString('fr-FR')}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button onClick={handleLike} className={`transition-colors ${post.is_liked ? "text-red-600 hover:text-red-700" : "text-gray-500 hover:text-red-700"}`}>
                                    <Heart className="w-6 h-6" fill={post.is_liked ? "currentColor" : "none"}/>
                                </button>

                                <span className="text-gray-600">
                                    {post.likes_count}
                                </span>

                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-gray-700">
                                {post.description}
                            </p>
                        </div>
                    </div>
                </div>
            </article>

         </div>

    </div>
  )
}
