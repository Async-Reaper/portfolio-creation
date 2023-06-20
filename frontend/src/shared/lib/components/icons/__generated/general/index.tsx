import * as React from 'react';
import {SVGAttributes} from 'react';
import {LockIcon as lock} from './Lock';
import {PlayIcon as play} from './Play';
import {PlusIcon as plus} from './Plus';
import {PointIcon as point} from './Point';
import {SalesIcon as sales} from './Sales';
import {SoundIcon as sound} from './Sound';
import {UnlockIcon as unlock} from './Unlock';
import {UpIcon as up} from './Up';
import {VkIcon as vk} from './Vk';
import {VolumeIcon as volume} from './Volume';

export type IconName =
  | 'lock'
  | 'play'
  | 'plus'
  | 'point'
  | 'sales'
  | 'sound'
  | 'unlock'
  | 'up'
  | 'vk'
  | 'volume';

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  lock,
  play,
  plus,
  point,
  sales,
  sound,
  unlock,
  up,
  vk,
  volume,
};
