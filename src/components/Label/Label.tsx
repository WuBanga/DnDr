import { ComponentPropsWithoutRef } from 'react';

import './Label.css';

export const Label = (props: ComponentPropsWithoutRef<'label'>) => {
  return <label className="label" {...props}></label>;
};
