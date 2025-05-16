import { NextAuthOptions } from "next-auth";
   import GithubProvider from "next-auth/providers/github";
   // ...other providers

   export const authOptions: NextAuthOptions = {
     providers: [
       GithubProvider({
         clientId: process.env.GITHUB_ID!,
         clientSecret: process.env.GITHUB_SECRET!,
       }),
       // add more if needed
     ],
     // Optional: session callbacks, pages overrides, etc.
   };