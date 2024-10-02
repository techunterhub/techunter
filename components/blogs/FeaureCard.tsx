"use client";

import BlogsCard from "@/components/blogs/Card";
export default function FeatureCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BlogsCard />
      </div>
    </>
  )
}