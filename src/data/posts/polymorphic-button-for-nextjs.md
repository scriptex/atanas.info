Today I'd like to show you how to create a (nearly) multi-purpose and reusable `Button` component for React and NextJS (or React Router).

## Why "nearly"?

Because I didn't consider all use cases. One example would be intergrating the `Button` component with a component library such as MUI or Bootstrap.
My example uses CSS class names and external styles but is also suitable for styled components or any CSS-in-JS approach.

If you plan on using the `Button` component in a CSS-in-JS environment (`styled-components`, `emotion`, `jss` or any other) feel free to strip the `className` attribute and the helper function which takes care of the `className` prop.

## Why polymorphic?

Accordiong to [Dictionary.com](https://www.dictionary.com/browse/polymorphic), the term "Polymorphic" refers to

> having more than one form or type

What does this mean in the context of front-end web development, React and NextJS? A polymorphic button component is such component which will be used regardless of its form under the hood - whether we want to render a `<button>`, a Router `<Link>` or a simple `<a>` (anchor) tag.

On the one hand, designers usually prefer to have consistent look for interactive elements such as buttons or links. On the other hand, we - the developers, would love to have an easy to use interface which utilizes common styles and maintains semantic and accessible HTML markup.

## Use cases

We will create a component called `<Button />` that will allow us to use it as a `<button />` of any kind (pure button, submit or reset), a router `<Link />` (React Router or NextJS Router) or a simple `<a />` anchor tag. On top of that, we will utilize TypeScript to provide better development experience by adding suggestions as we type, autocomplete functionality and instant error/warning feedback.

For example, the end result will look like this:

```tsx
// Router Link
<Button type="link" href="/pages/example">
    I will take you to the "example" page
</Button>

// Pure button tag
<Button type="button" onClick={doSomething}>
    I will do something on click
</Button>

// Submit button
<Button type="submit">
    I will submit a form
</Button>

// External anchor tag
<Button type="anchor" rel="noopener noreferrer" href="https://atanas.info" target="_blank">
    I will open an external page
</Button>
```

Even though it is rarely happening, there are also times when we would like to render a good old button component without all the styles of the default `<Button />` component. This will be possible with our component:

```tsx
// Pure button tag without the styles
<Button type="button" onClick={doSomething} unstyled>
    I will do something on click
</Button>

// Pure button tag with custom class name and styles
<Button type="button" onClick={doSomething} unstyled className="fancy-button">
    I will do something on click
</Button>
```

## Implementation

Tl;DR

Here is the code for the `Button` component:

```tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link, { LinkProps as ILinkProps } from 'next/link';
import { FC, useMemo, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { composeClassName } from '@scripts/shared';
import type { ReactChildren } from '@scripts/types';

type CustomProps = {
	unstyled?: boolean;
};

type LinkProps = CustomProps & ILinkProps & { type: 'link'; children: ReactChildren };
type AnchorProps = CustomProps & AnchorHTMLAttributes<HTMLAnchorElement> & { type: 'anchor' };
type ButtonProps = CustomProps & ButtonHTMLAttributes<HTMLButtonElement> & { type: 'button' | 'reset' | 'submit' };

type Props = LinkProps | AnchorProps | ButtonProps;

const getClassName = <T extends Props>({ unstyled, className }: T): string | undefined => {
	if (unstyled) {
		return className;
	}

	return composeClassName('c-btn', [], [className]);
};

const AnchorButton: FC<Readonly<AnchorProps>> = (props: AnchorProps) => {
	const { type, unstyled, children, ...rest } = props;

	return <a {...rest}>{children}</a>;
};

const LinkButton: FC<Readonly<LinkProps>> = (props: LinkProps) => {
	const { type, unstyled, children, ...rest } = props;

	return <Link {...rest}>{children}</Link>;
};

const DefaultButton: FC<Readonly<ButtonProps>> = (props: ButtonProps) => {
	const { unstyled, children, ...rest } = props;

	return <button {...rest}>{children}</button>;
};

export const Button: FC<Readonly<Props>> = (props: Props) => {
	const className = useMemo(() => getClassName(props), [props]);

	if (props.type === 'anchor') {
		return <AnchorButton {...props} className={className} />;
	}

	if (props.type === 'link') {
		return <LinkButton {...props} className={className} />;
	}

	return <DefaultButton {...props} className={className} />;
};

export default Button;
```

## Implementation notes

You probably noticed the very first line which disables the ESLint rule for unused variables. Unfortunately, that's the only drawback of this implementation but it's not so big deal when you think about it. Just tell ESLint not to complain about it.

---

The next important thing is the `composeClassName` function which is a utility function I built to help me manage CSS class names for my components. This function is implementing the BEM methodology and looks like this:

```ts
export const composeClassName = (main: string, modifiers: string[], optional: Array<string | undefined> = []): string =>
	[main, ...modifiers.filter(Boolean).map((modifier: string) => `${main}--${modifier}`), ...optional]
		.filter(Boolean)
		.join(' ');
```

The first argument is the `block` or `element` class name, then a list of modifiers and then a list of optional class names.

The function creates modifier class names out of the modifiers array and then merges everything into one string.

If you're not using CSS or any pre- ot post-processor for styling, feel free to disregard this function.

Just keep in mind that you probably won't need the `className` attributes in your `Button`s as well as in any of the defined typings.

---

The `ReactChildren` is a utility type I am using. It boils down to the following:

```ts
export type ReactChild = string | ReactNode;
export type ReactChildren = ReactChild | ReactChild[];
```

---

Then you will find my custom props for the `Button` component:

```ts
type CustomProps = {
	unstyled?: boolean;
	className?: string;
};
```

---

Then I defined three different types for each of the supported `Button` types:

```ts
type LinkProps = CustomProps & ILinkProps & { type: 'link'; children: ReactChildren };
type AnchorProps = CustomProps & AnchorHTMLAttributes<HTMLAnchorElement> & { type: 'anchor' };
type ButtonProps = CustomProps & ButtonHTMLAttributes<HTMLButtonElement> & { type: 'button' | 'reset' | 'submit' };
```

The `LinkProps` combines the custom props for my component as well as the `LinkProps` from `next/link` (which I renamed to `ILinkProps` 😈) and the props specific to the `link` type `<Button />`.

The `AnchorProps` combines the custom props for my component as well as the default props which an HTML anchor tag can receive and the props specific to the `anchor` type `<Button />`.

The `ButtonProps` combines the custom props for my component as well as the default props which an HTML button tag can receive and the props specific to the `button` type `<Button />`.

---

After this you will find a union type of the three types above. The union type is used in the `<Button />` component as well as in the three helper components.

```ts
type Props = LinkProps | AnchorProps | ButtonProps;
```

---

The rest of the implementation is just declaring and using several component types.

## React Router vs NextJS

The implementation above is used in a NextJS application but it can be easily converted to a regular React application which uses React Router.

All you need to do is replace the following line

```ts
import Link, { LinkProps as ILinkProps } from 'next/link';
```

with the following line

```ts
import { Link, LinkProps as ILinkProps } from 'react-router-dom';
```

## Final thoughts

It is important to mention why we are doing this custom `<Button />` implementation - the reason is type safety and better developer experience.

As long as you pass the `type` prop as a first prop to your `Button` component, you will receive autocomplete suggestions based on the type you used.

If you added a `type="anchor"`, Typescript will suggest all props which are accepted by the `<a />` tag.

If you added a `type="button"`, Typescript will suggest all props which are accepted by the `<button />` tag.
