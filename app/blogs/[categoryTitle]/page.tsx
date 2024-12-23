import React from 'react';
import SanityClient from '@/sanity/client';
import BlogCard from '@/components/cards/blogCard';
import BlogHeader from '../components/BlogHeader';
import { Breadcrumbs } from '@mantine/core';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { SanityAsset } from '@sanity/image-url/lib/types/types';

const categoryQuery = `*[_type == "post" && references(*[_type == "category" && slug.current == $categoryTitle][0]._id)] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
}`;

interface MainImage {
    _type: string;
    alt: string;
    asset: SanityAsset;
}

interface Categories {
    _id: string;
    title: string;
    slug: {
        current: string;
        _type: string;
    };
}

export interface BlogMeta {
    mainImage: MainImage;
    title: string;
    publishedAt: string;
    slug: {
        current: string;
        _type: string;
    };
    _id: string;
    categories: Categories[];
}


async function getBlogsByCategory(categoryTitle: string) {
    return await SanityClient.fetch(categoryQuery, { categoryTitle });
}



const CategoryPage = async ({ params }: { params: { categoryTitle: string } }) => {
    const { categoryTitle } = params;
    const blogs = await getBlogsByCategory(categoryTitle);

    return (
        <>
        <div className="bg-[#1a1a2e]">
            <BlogHeader />
        </div>
        <div className="mt-8 mb-4 safe-area">
            <Breadcrumbs>
                <IconHome size={16} />
                <Link className='text-gray-900' href="/">Home</Link>
                <Link className='text-gray-900' href="/blogs">Blogs</Link>
                <span>{categoryTitle}</span>
            </Breadcrumbs>
        </div>
        <main className='safe-area'>
            <h1 className='h2'>Blog For: {categoryTitle}</h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {blogs.map((blog: BlogMeta) => (
                    <BlogCard key={blog._id} {...blog}  />
                ))}
            </div>
        </main>
        </>
    );
};

export default CategoryPage;