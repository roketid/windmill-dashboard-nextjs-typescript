import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GithubIcon, TwitterIcon } from 'icons'
import { Input, Label, Button, WindmillContext } from '@roketid/windmill-react-ui'

function CrateAccount() {
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/create-account-office-dark.jpeg' : '/assets/img/create-account-office.jpeg'

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="relative h-32 md:h-auto md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full"
              src={imgSource}
              alt="Office"
              layout='fill'
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" placeholder="***************" type="password" />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input className="mt-1" placeholder="***************" type="password" />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Link
                  href='/example/login'
                  passHref={true}
                >
                <Button block className="mt-4">
                  Create account
                </Button>
              </Link>

              <hr className="my-8" />

              <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button block className="mt-4" layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button>

              <p className="mt-4">
                <Link href="/example/login">
                  <a
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Already have an account? Login
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CrateAccount
