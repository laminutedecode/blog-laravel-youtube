import {Link, usePage} from '@inertiajs/react';

export default function Nav() {

    const { auth } = usePage().props as any;
  return (
    <nav className='bg-white shadow-md border-b py-2'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className='text-2xl font-black text-indigo-600'>
                        MyApp
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    {auth.user ? (
                        <Link href={route('dashboard')} className='inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
                            Tableau de bord
                        </Link>
                    )
                :
                (
                    <>
                     <Link href={route('login')} className='text-gray-600 hover:text-gray-900'>
                            Connexion
                        </Link>
                         <Link href={route('register')} className='inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
                            Inscription
                        </Link>
                    </>

                )}
                </div>
            </div>
        </div>
    </nav>
  )
}
