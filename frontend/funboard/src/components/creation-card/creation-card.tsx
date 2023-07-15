import React, { FormEvent, ReactElement, useState } from 'react';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getUserData } from '../../store/user/selectors';
import {
  createPostAction,
  fetchPostsDataAction,
} from '../../store/api-actions';
import {
  BtnContainerDiv,
  ColorInputStyled,
  LiStyled,
  TextInputStyled,
  TitleInputStyled,
} from './creation-card.styled';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from '../shared-styles/global';

export default function CreationCard(): ReactElement {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('#5A73FF');

  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(createPostAction({ post: { title, text, color } }));
    dispatch(fetchPostsDataAction());
  };

  const formData = {
    title: {
      label: 'Title',
      value: title,
      onChange: (evt: React.FormEvent<HTMLInputElement>) =>
        setTitle(evt.currentTarget.value),
    },
    text: {
      label: 'Text',
      value: text,
      onChange: (evt: React.FormEvent<HTMLTextAreaElement>) =>
        setText(evt.currentTarget.value),
    },
    color: {
      label: 'Color',
      value: color,
      onChange: (evt: React.FormEvent<HTMLInputElement>) =>
        setColor(evt.currentTarget.value),
    },
  };

  return (
    <LiStyled borderColor={color}>
      <form onSubmit={handleSubmit}>
        <TitleInputStyled
          type={'text'}
          value={title}
          onChange={formData.title.onChange}
          placeholder={formData.title.label}
        />
        <TextInputStyled
          value={text}
          onChange={formData.text.onChange}
          placeholder={formData.text.label}
        />
        <ColorInputStyled
          type={'color'}
          value={color}
          onChange={formData.color.onChange}
        />
        <BtnContainerDiv>
          <ButtonStyled color={'lightgreen'}>Create</ButtonStyled>
        </BtnContainerDiv>
      </form>
    </LiStyled>
  );
}
