import {Card} from "@/components/Card";
import {formatDate} from "@/lib/formatDate";
import React from "react";

export default function Article({article}) {
    return (
        <Card as="article">
            {/* todo : create a reel good article */}
            {/*<Card.Title href={`/articles/${article.slug}`}>*/}
            {/*    {article.title}*/}
            {/*</Card.Title>*/}
            {/*<Card.Eyebrow as="time" dateTime={article.date} decorate>*/}
            {/*    {formatDate(article.date)}*/}
            {/*</Card.Eyebrow>*/}
            {/*<Card.Description>{article.description}</Card.Description>*/}
            {/*<Card.Cta>Read article</Card.Cta>*/}
        </Card>
    )
}