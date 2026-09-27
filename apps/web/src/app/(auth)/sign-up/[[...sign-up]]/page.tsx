import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen m-15">
      <SignUp /> ;
    </div>
  );
}
