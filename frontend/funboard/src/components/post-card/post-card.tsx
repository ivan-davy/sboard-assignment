import React, { ReactElement, SyntheticEvent } from 'react';
import { PostType } from '../../types/post.type';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getUserId } from '../../store/user/selectors';
import { deletePostAction } from '../../store/api-actions';

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
    dispatch(deletePostAction({ postId: Number(evt.currentTarget.id) }));
  };

  return (
    <li>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
        <i>{`by ${createdBy}#${createdById}, ${dayjs(postedDate).format(
          'DD/MM/YY',
        )}`}</i>
      </div>
      {userId === createdById ? (
        <span>
          <button id={`${id}`}>Edit</button>
          <button id={`${id}`} onClick={handleDelete}>
            Delete
          </button>
        </span>
      ) : null}
    </li>
  );
}
