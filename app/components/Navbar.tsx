import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'
import { Redirect } from 'next'

const Navbar = async () => {
  const session = await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={144} height={30}></Image>
            </Link>
            <div className='flex items-center gap-5 text-black'>
                {session && session?.user ? (
                  <>
                    <Link href="/startup/create">
                      <span>Create</span>
                    </Link>

                    <button onClick={async() => {
                      "use server";
                      await signOut
                      }
                      }><span>Logout</span></button>

                    <Link href={`/user/${session?.id}`}>
                    <Image src={`${session?.user.image}`} width={26} height={26}  className='rounded-full' alt="profile-pic">
                        
                    </Image>
                    {/* <span>{session?.user?.name}</span> */}
                    </Link>
                  </>
                ) : (
                    <>
                        <button onClick={async () => {
                          "use server"
                          await signIn('github')}}>
                          <span>Login</span>
                          </button>
                      
                      </>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
