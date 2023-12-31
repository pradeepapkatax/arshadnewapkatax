import { fetchUser } from "@/services";
import Link from "next/link";
import React from "react";

const About = async () => {
  const fetchApi = await fetchUser();
  // console.log(fetchApi);
  return (
    <div>
      {fetchApi?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <Link href={`/en/users/${item.id}`}>Full Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default About;

// Make API Call in server components

