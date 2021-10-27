import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function AuthPage({children}) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (typeof window !== 'undefined' && status === 'loading') return null;

  useEffect(() => {
    if (!session) {
      return router.push("/api/auth/signin");
    }
  }, [session]);

  return <>{(!(status === 'loading') && session) && children}</>;
}

export default AuthPage;