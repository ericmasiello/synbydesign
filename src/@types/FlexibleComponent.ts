// eslint-disable-next-line import/no-extraneous-dependencies
import { ElementType, ComponentPropsWithoutRef } from 'react';

type PolymorphicComponent<T extends ElementType> = {
  /**
   * Which HTML tag or custom Component should be rendered
   */
  component?: T;
};

export type FlexibleComponent<T extends ElementType, ComponentCustomProps extends any = {}> = PolymorphicComponent<T> &
  ComponentCustomProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ComponentCustomProps>;

/**
## Usage Example:
The following component will default to rendering as a <div /> element.

*Note:* You must define a default type value for `<T>` in `<T extends ElementType = 'div'>`
as well as define a default value at runtime: `const { component: Component = 'div' } = props;`
These values (`div`) must match.

```tsx
import React, { ElementType } from 'react';
import classNames from 'classnames';
import { FlexibleComponent } from '@vp/esdx-types/lib/FlexibleComponent';
import styles from './MyComponent.module.scss';

type Props = {
    // Define custom props for this component here
};

export const MyComponent = <T extends ElementType = 'div'>(props: FlexibleComponent<T, Props>) => {
    const { component: Component = 'div', className, ...rest } = props;

    return <Component className={classNames(styles.sample, className)} {...rest} />;
};
```

Using the component above, below we illustrate how the `component` prop behavior works.

### Rendering behavior

If no `component` prop is specified, it will default to rendering as a `<div />`.

`<MyComponent />` => `<div className="..." />`

When specifying a custom component such as `'a'`, the component will render itself as an `<a />`
and will support props specific to it such as `href`.

✅ ✅ ✅
`<MyComponent component="a" href="http://www.vistaprint.com" />` => `<a className="..." href="http:/www.vistaprint.com" />`

Similarly, if you try to specify a prop that is not appropriate, the Typescript compiler will fail the build.

❌ ❌ ❌
`<MyComponent component="button" href="http://www.vistaprint.com" />`


This approach was inspired by this article https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2
**/
