"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "@/store/slices/BlogsSlice";
import type { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";

interface RSSFeedItem {
  title: string;
  link: string;
  guid?: {
    _: string;
    $: {
      isPermaLink: string;
    };
  };
  category?: string[];
  "dc:creator": string;
  pubDate: string;
  "atom:updated": string;
  "content:encoded": string;
  image: string;
  description: string;
  formattedDate: string;
}

export default function BlogsCard() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogData = useSelector((state: RootState) => state.blogs.data);

  const memoizedBlogs = useMemo(
    () => blogData as RSSFeedItem[] | undefined,
    [blogData]
  );

  return (
    <>
      {memoizedBlogs && memoizedBlogs.length > 0 ? (
        memoizedBlogs.map((blog) => (
          <Link href={blog.link} key={blog.guid._} className="">
            <div className="aspect-[480/258] overflow-hidden rounded-[4px] bg-[#f5f5f5]">
              <Image
                src={blog.image}
                alt={blog.title}
                width={480}
                height={258}
                className="w-full aspect-[480/258] group-hover:scale-[1.1] object-cover duration-300 max-w-full h-auto"
              />
            </div>
            <div className="text-pretty">
              <p className="body-2 group-hover:underline duration-300 font-bold mt-4 mb-0 text-gray-950 leading-[150%] text-pretty">
                {blog.title}
              </p>
              <span className="text-pretty text-muted line-clamp-3">
                {blog.description}
              </span>
            </div>
          </Link>
        ))
      ) : (
        <p>No blog data available.</p>
      )}
    </>
  );
}
