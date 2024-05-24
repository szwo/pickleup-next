import Post from 'components/Post';
import type { SocialPost } from 'lib/sampleData';
import type { FC } from 'react';

type Props = {
    posts: Array<SocialPost>;
};

const PostList: FC<Props> = ({ posts }) => {
    return (
        <div className="flex flex-col gap-4 my-6">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
