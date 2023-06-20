import * as React from 'react';
import {SVGAttributes} from 'react';
import {EnIcon as en} from './En';
import {KzIcon as kz} from './Kz';
import {RuIcon as ru} from './Ru';
import {UkIcon as uk} from './Uk';

export type IconName =
  | 'en'
  | 'kz'
  | 'ru'
  | 'uk';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  en,
  kz,
  ru,
  uk,
};
