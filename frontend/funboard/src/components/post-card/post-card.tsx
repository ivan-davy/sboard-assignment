import React, { ReactElement, SyntheticEvent, useEffect } from 'react';
import { PostType } from '../../types/post.type';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getUserId } from '../../store/user/selectors';
import { deletePostAction } from '../../store/api-actions';
import {
  BtnContainerDiv,
  ButtonStyled,
  IStyled,
  LiStyled,
  PStyled,
  StrongStyled,
} from './post-card.styled';
import { deletePostFromStateAction } from '../../store/posts/actions';

export default function PostCard({
  id,
  text,
  postedDate,
  title,
  createdBy,
  createdById,
  color,
}: PostType): ReactElement {
  const userId = useAppSelector(getUserId);
  const dispatch = useAppDispatch();

  const handleDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(deletePostAction({ postId: Number(evt.currentTarget.value) }));
    dispatch(deletePostFromStateAction(Number(evt.currentTarget.value)));
  };

  useEffect(() => {}, []);

  return (
    <LiStyled borderColor={color}>
      <StrongStyled>{title}</StrongStyled>
      <PStyled>{text}</PStyled>
      <IStyled>{`by ${createdBy}#${createdById}, ${dayjs(postedDate).format(
        'DD/MM/YY',
      )}`}</IStyled>
      {userId === createdById ? (
        <BtnContainerDiv>
          <ButtonStyled value={id} color={'darkorange'}>
            Edit
          </ButtonStyled>
          <ButtonStyled value={id} color={'indianred'} onClick={handleDelete}>
            Delete
          </ButtonStyled>
        </BtnContainerDiv>
      ) : null}
    </LiStyled>
  );
}
