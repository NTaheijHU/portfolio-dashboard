import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  theme: {
    colorScheme: "dark",
    brandColor: "#5e72e4",
    logo: "https://cdn.lokalized.nl/lokalized-images/icon_white"
  },
  session: {
    jwt: true,
    maxAge: 1 * 60 * 60, // 1 hour
  },
  jwt: {
    secret : process.env.JWT_SECRET,
    expiresIn: "1h",
  },
})