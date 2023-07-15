import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getPosts } from '../../store/posts/selectors';
import { PostType } from '../../types/post.type';
import { fetchPostsDataAction } from '../../store/api-actions';
import PostCard from '../post-card/post-card';
import { UlStyled } from './posts-list.styled';

export default function PostsList(): ReactElement {
  const posts = useAppSelector(getPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsDataAction());
  }, []);

  return (
    <UlStyled>
      {posts.map((post: PostType) => {
        return (
          <PostCard
            key={post.id}
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
    </UlStyled>
  );
}
