import { getServerSession } from "next-auth/next";
import { NextAuthOptions, Session, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import jsonwebToken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";
import logo1 from '@/public/logo-purple.svg'


interface ISession extends Session {
    user: User & {
        id: string
        name: string
        email: string
        avataUrl: string
    }
}


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt: {
    //     encode:  async ({secret, token}) => {

    //     },
    //     decode: ({secret, token}) => {

    //     },
    // },
    theme: {
        colorScheme: 'dark',
        logo: logo1,
    },
    callbacks: {
        async session({session}) {
            return session
        },
        async signIn({user}: {user: User}) {
            try {
                // get the user if they exist

                // if they don't exist, create user
                return true
            } catch (error: any) {
                console.log(error)
                return false

            }

        }
    }
}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as ISession
    return session 
}