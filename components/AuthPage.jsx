import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/client"
import { useEffect } from "react";

function AuthPage({children}) {
  const router = useRouter();
  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return null;

  useEffect(() => {
    console.log(session, loading);
    if (!session) {
      return router.push("/api/auth/signin");
    }
  }, [session]);

  return <>{!loading && children}</>;
}

export default AuthPage;