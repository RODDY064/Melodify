import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();

const handle = NextAuth({
  adapter: PrismaAdapter,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize (credentials, req) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.username,
            },
          });

          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const passwordCompared = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordCompared) {
            throw new Error("Invalid Email or Password");
          }

          return user
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages:{
    signIn:'/signin',
    signOut:'/'
  },
  session:{
    strategy:'jwt'
  },
  callbacks:{
    async session({ session }){
      return session
    }
  }
});


export { handle as GET , handle as POST }