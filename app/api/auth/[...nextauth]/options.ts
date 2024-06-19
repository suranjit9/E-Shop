
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials"
// const prisma = new PrismaClient()
import prisma from "@/app/libs/prismadb"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
    credentials: {
          email:{
              label: "Email",
              type: "text",
          },
          password:{
              label: "Password",
              type: "password",
          },
      },
      async authorize(credentials: any) {
        if(!credentials?.email || !credentials?.password){
          throw new Error("Invalid credentials")
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if(!user || !user?.hashedPassword){
          throw new Error("Invalid credentials")
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )
        if(!isCorrectPassword){
          throw new Error("Invalid credentials")
        }
        return user
        // ghfdixghiuh
      }}
    ),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})