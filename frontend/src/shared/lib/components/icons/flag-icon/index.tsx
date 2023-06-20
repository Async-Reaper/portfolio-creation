import { iconSet } from '../__generated/flags';
import type { IconName } from '../__generated/flags';
import { createIconComponent } from '../createIcon';

export { iconSet };
export type { IconName };

export const FlagIcon = createIconComponent<IconName, typeof iconSet>({
    componentName: 'FlagIcon',
    iconSet,
    defaultSize: 24,
});
