"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/auth_store";
import { usePathname, useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

const PUBLIC_ROUTES = ["/login", "/register"];

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isLoading) return;

    const isPublic = PUBLIC_ROUTES.includes(pathname);

    if (!isAuthenticated && !isPublic) {
      router.push("/login");
    }

    if (isAuthenticated && isPublic) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}
