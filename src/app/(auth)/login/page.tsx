import { AuthProvider } from "@/components/auth/auth-provider";
import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-lg w-full space-y-12">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl text-center">
          Let's Authenticate!
        </h1>
        <span className="block text-center text-sm">
          Start your session by providing valid credential
        </span>
      </div>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
      <span className="block text-center text-sm">
        Do not have any account yet?{" "}
        <Link href={"/register"} className="text-blue-500">
          Come join us!
        </Link>
      </span>
    </div>
  );
}
