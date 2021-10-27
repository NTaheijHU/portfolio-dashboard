import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function AuthPage({children}) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session === null) {
        return router.push("/api/auth/signin");
    }
  }, [session]);

  if (typeof window !== 'undefined' && status === 'loading') return null;

  return <>{(!(status === 'loading') && session) && children}</>;
}

export default AuthPage;