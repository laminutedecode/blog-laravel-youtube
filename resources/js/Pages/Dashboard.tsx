import ListPosts from '@/Components/Post/ListPost';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Post } from '@/types/post';
import { Head, Link } from '@inertiajs/react';

interface Props extends PageProps {
    userPosts: Post[];
}

export default function Dashboard({ auth, userPosts }: Props) {
    return (
        <AuthenticatedLayout

            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tableau de bord</h2>}
        >
            <Head title="Tableau de bord" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Mes Publications
                                </h2>
                                <Link
                                    href={route('posts.create')}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Créer un post
                                </Link>
                            </div>

                            {userPosts.length > 0 ? (
                                <ListPosts
                                    posts={userPosts}
                                    showAuthor={false}
                                    canEdit={true}
                                />
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 mb-4">
                                        Vous n'avez pas encore créé de posts.
                                    </p>
                                    <Link
                                        href={route('posts.create')}
                                        className="text-indigo-600 hover:text-indigo-800"
                                    >
                                        Créer votre premier post
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
