import React, { FormEvent, ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getUserData } from '../../store/user/selectors';
import { useNavigate } from 'react-router-dom';
import { updatePostAction } from '../../store/api-actions';
import {
  BtnContainerDiv,
  ColorInputStyled,
  LiStyled,
  TextInputStyled,
  TitleInputStyled,
} from '../create-card/create-card.styled';
import { ButtonStyled } from '../shared-styles/global';
import { CardModeEnum } from '../../const/card-mode.enum';

interface UpdateCardPropsType {
  postId: number;
  setMode: (arg: CardModeEnum) => void;
  initTitle: string;
  initText: string;
  initColor: string;
}
export default function UpdateCard({
  setMode,
  postId,
  initTitle,
  initText,
  initColor,
}: UpdateCardPropsType): ReactElement {
  const [title, setTitle] = useState<string>(initTitle);
  const [text, setText] = useState<string>(initText);
  const [color, setColor] = useState<string>(initColor);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(updatePostAction({ post: { title, text, color }, postId }));
    window.location.reload();
    setMode(CardModeEnum.View);
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
          <ButtonStyled color={color}>Save</ButtonStyled>
        </BtnContainerDiv>
      </form>
    </LiStyled>
  );
}
