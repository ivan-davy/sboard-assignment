import { StateType } from '../../types/states/state.type';
import { NamespaceEnum } from '../../const/namespace.enum';
import { PostType } from '../../types/post.type';

export const getPosts = (state: StateType): PostType[] =>
  state[NamespaceEnum.Posts];
