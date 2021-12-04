import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Label, Input, Button } from '@windmill/react-ui';
import { GithubIcon, TwitterIcon } from 'icons';

export default function loginPage() {
  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='relative h-32 md:h-auto md:w-1/2'>
            <Image
              aria-hidden='true'
              className='object-cover w-full h-full dark:hidden'
              src='/assets/img/login-office.jpeg'
              alt='Office'
              layout='fill'
            />
            <Image
              aria-hidden='true'
              className='hidden object-cover w-full h-full dark:block'
              src='/assets/img/login-office-dark.jpeg'
              alt='Office'
              layout='fill'
            />
          </div>
          <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className='mt-1'
                  type='email'
                  placeholder='john@doe.com'
                  css={undefined}
                />
              </Label>

              <Label className='mt-4'>
                <span>Password</span>
                <Input
                  className='mt-1'
                  type='password'
                  placeholder='***************'
                  css={undefined}
                />
              </Label>

              <Link href='/app' passHref={true}>
                <Button className='mt-4' block>
                  Log in
                </Button>
              </Link>

              <hr className='my-8' />

              <Button block layout='outline'>
                <GithubIcon className='w-4 h-4 mr-2' aria-hidden='true' />
                Github
              </Button>
              <Button className='mt-4' block layout='outline'>
                <TwitterIcon className='w-4 h-4 mr-2' aria-hidden='true' />
                Twitter
              </Button>

              <p className='mt-4'>
                <Link href='/forgot-password'>
                  <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    Forgot your password?
                  </a>
                </Link>
              </p>
              <p className='mt-1'>
                <Link href='/create-account'>
                  <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    Create account
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
