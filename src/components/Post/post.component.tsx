import type { SocialPost } from 'lib/sampleData';
import type { FC } from 'react';

type Props = {
    post: SocialPost;
};

const Post: FC<Props> = ({ post }) => {
    const { id, author, content } = post;

    return (
        <div
            id={id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <p>
                <span className="font-bold">{author}</span> says:
            </p>
            <p>{content}</p>
        </div>
    );
};

export default Post;
