import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getPosts } from '../../store/posts/selectors';
import { PostType } from '../../types/post.type';
import { fetchPostsDataAction } from '../../store/api-actions';
import PostCard from '../post-card/post-card';
import { PStyled, UlStyled } from './posts-list.styled';
import { getAuthStatus } from '../../store/service/selectors';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';
import CreationCard from '../creation-card/creation-card';

export default function PostsList(): ReactElement {
  const posts = useAppSelector(getPosts);
  const dispatch = useAppDispatch();
  const isAuthorized =
    useAppSelector(getAuthStatus) === AuthorizationStatusEnum.Auth;

  useEffect(() => {
    dispatch(fetchPostsDataAction());
  }, []);

  return (
    <main>
      <UlStyled>
        {isAuthorized ? <CreationCard /> : null}
        {posts.length === 0 ? (
          <PStyled>
            Nothing here... yet.
            <br />
            Add a new note!
          </PStyled>
        ) : null}
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
    </main>
  );
}
