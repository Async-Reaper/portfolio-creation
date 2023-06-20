import * as React from 'react';
import {SVGAttributes} from 'react';
import {FireIcon as fire} from './Fire';
import {PlusIcon as plus} from './Plus';

export type IconName =
  | 'fire'
  | 'plus';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  fire,
  plus,
};
