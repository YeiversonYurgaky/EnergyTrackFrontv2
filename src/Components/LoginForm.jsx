import React from 'react'

const LoginForm = () => {
  return (
    <main className="bg-white flex justify-center">
      <container className="flex h-screen items-center justify-center">
        <section className='flex flex-col justify-center items-center gap-3 w-[31.25rem] h-[31.25rem] border-none rounded-md shadow-lg'>
          <article className='flex flex-col gap-3 prose lg:prose-lg'>
            <header className='flex justify-center'>
              <h1>Iniciar Sesión</h1>
            </header>
            <form className="flex flex-col gap-8">
              <input className='w-80 px-4 py-2 border-2 border-neutral-800 rounded-lg bg-neutral-200 text-lg text-neutral-900' type="email" placeholder='Correo electronico' />
              <input className='w-80 px-4 py-2 border-2 border-neutral-800 rounded-lg bg-neutral-200 text-lg text-neutral-900' type="password" placeholder='Contraseña' />
              <button className='btn border-2 w-80 border-blue-500 bg-blue-300 text-lg'>Ingresar</button>
            </form>
          </article>
          <footer className='flex text-xs text-neutral-500 gap-16'>
            <a className='no-underline hover:underline' href="">¿No tienes cuenta?</a>
            <a className='no-underline hover:underline' href="">¿Olvidaste la contraseña?</a>
          </footer>
        </section>
      </container>
    </main>
  )
}

export default LoginForm