'use client';

import { UserProfile, SignOutButton } from '@clerk/nextjs';

export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center min-h-screen m-15">
      <UserProfile />
      <SignOutButton />
    </div>
  );
}
