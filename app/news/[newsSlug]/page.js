import Link from "next/link";

export default function NewsDetailPage({ params }) {
    const newsId = params.newsSlug;

    return (
        <>
            <h1>News Detail Page</h1>
            <p>News ID: {newsId}</p>
        </>
    );
}