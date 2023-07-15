import React, { ReactElement, useEffect, useState } from 'react';
import { PostType } from '../../types/post.type';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getUserId } from '../../store/user/selectors';
import {
  deletePostAction,
  fetchPostsDataAction,
} from '../../store/api-actions';
import {
  BtnContainerDiv,
  IStyled,
  LiStyled,
  PStyled,
  StrongStyled,
} from './card.styled';
import { deletePostFromStateAction } from '../../store/posts/actions';
import { ButtonStyled } from '../shared-styles/global';
import { CardModeEnum } from '../../const/card-mode.enum';
import UpdateCard from '../update-card/update-card';

export default function Card({
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
  const [mode, setMode] = useState(CardModeEnum.View);

  const handleDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(deletePostAction({ postId: Number(evt.currentTarget.value) }));
    dispatch(deletePostFromStateAction(Number(evt.currentTarget.value)));
  };

  const handleEdit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setMode(CardModeEnum.Edit);
  };

  /*useEffect(() => {
    dispatch(fetchPostsDataAction());
  }, [mode]);*/

  return mode === CardModeEnum.Edit ? (
    <UpdateCard
      setMode={setMode}
      postId={id as number}
      initText={text}
      initTitle={title}
      initColor={color}
    />
  ) : (
    <LiStyled borderColor={color}>
      <StrongStyled>{title}</StrongStyled>
      <hr />
      <PStyled>{text}</PStyled>
      <hr />
      <IStyled>{`by ${createdBy}#${createdById}, on ${dayjs(postedDate).format(
        'dddd',
      )}`}</IStyled>
      {userId === createdById && id ? (
        <BtnContainerDiv>
          <ButtonStyled value={id} color={'darkorange'} onClick={handleEdit}>
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
