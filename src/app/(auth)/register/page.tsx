import { AuthProvider } from "@/components/auth/auth-provider";
import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="max-w-lg w-full space-y-12">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl text-center">Come Join Us!</h1>
        <span className="block text-center text-sm">
          Please provide your account information
        </span>
      </div>
      <AuthProvider>
        <RegisterForm />
      </AuthProvider>
      <span className="block text-center text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="text-blue-500">
          Let's authenticate!
        </Link>
      </span>
    </div>
  );
}
