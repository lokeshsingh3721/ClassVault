"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Page() {
  const { user } = useKindeBrowserClient();

  return (
    <div className="mt-24">
      <h2 className=" text-center">this is Dashboard</h2>
      <h3 className="text-center">{user?.email}</h3>
    </div>
  );
}
