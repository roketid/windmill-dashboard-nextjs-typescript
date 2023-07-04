import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Label, Input, Button, WindmillContext } from '@roketid/windmill-react-ui'
import {GithubIcon, TwitterIcon, SSOIcon, SSOIcon100} from 'icons'

function LoginPage() {
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/login-office-dark.jpeg' : '/assets/img/login-office.jpeg'

  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='relative h-32 md:h-auto md:w-1/2'>
            <Image
              aria-hidden='true'
              className='hidden object-cover w-full h-full'
              src={imgSource}
              alt='Office'
              layout='fill'
            />
          </div>
          <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Entrar
              </h1>
              <Label>
                <span>E-mail</span>
                <Input
                  className='mt-1'
                  type='email'
                  placeholder='teste@teste.com'
                />
              </Label>

              <Label className='mt-4'>
                <span>Senha</span>
                <Input
                  className='mt-1'
                  type='password'
                  placeholder='***************'
                />
              </Label>

              <Link href='/radius' passHref={true}>
                <Button className='mt-4' block>
                  Entrar
                </Button>
              </Link>

              <hr className='my-8' />

              <Button block layout='outline'>
                <SSOIcon100 className='w-4 h-4 mr-2' aria-hidden='true' />
                SSO
              </Button>

              <p className='mt-4'>
                <Link href='/radius/forgot-password'>
                  <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    Esqueceu a senha?
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
