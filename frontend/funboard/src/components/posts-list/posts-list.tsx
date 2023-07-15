import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getPosts } from '../../store/posts/selectors';
import { PostType } from '../../types/post.type';
import { fetchPostsDataAction } from '../../store/api-actions';
import PostCard from '../post-card/post-card';

export default function PostsList(): ReactElement {
  const posts = useAppSelector(getPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsDataAction());
  }, []);

  console.log('POSTS');
  console.log(posts);

  return (
    <ul>
      {posts.map((post: PostType) => {
        console.log(post);
        return (
          <PostCard
            id={post.id}
            postedDate={post.postedDate}
            title={post.title}
            color={post.color}
            createdBy={post.createdBy}
            createdById={post.createdById}
            text={post.text}
          />
        );
      })}
    </ul>
  );
}
