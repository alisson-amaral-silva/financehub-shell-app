"use client"
import { urlUser } from "@/lib/api-client/resources";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {
const [user, setUser] = useState<any>(null);

    useEffect(()=>{
    const getData = async()=>{
    const res = await fetch("/api/user");
    const data = await res.json();
    setUser(data)
    }
    getData();
  }, [])
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      test
      {user ? <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      </>
      :
      <p>user not found</p>}
    </div>
  );
}
