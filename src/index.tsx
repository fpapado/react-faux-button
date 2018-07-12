import React from 'react';

/**
 * Accessible "button" usurper.
 * Establishes the correct role, tabindex, and key/mouse interaction if interactive.
 * Buttons activate on space and enter.
 *
 * NOTE: Gives 'disabled' attribute if interaction not provided.
 *
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#button
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html
 */
interface IFauxButton extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  /** The DOM element for the component */
  tag: string;
  className?: string;
  /** The action to take on activation. Happens on click and space or enter keys. */
  onInteraction?: () => any;
  /** HTML disabled attribute */
  disabled?: boolean;
}

export const FauxButton: React.StatelessComponent<IFauxButton> = ({
  tag,
  className,
  onInteraction,
  disabled,
  children,
  ...rest
}) =>
  React.createElement(
    tag,
    {
      ...rest,
      role: 'button',
      tabIndex: '0',
      className,
      // Disabled if set, or if interaction non-existent
      disabled: disabled ? true : onInteraction ? null : true,
      onClick: onInteraction,
      onKeyDown: onInteraction && handleKeyActivation(onInteraction),
    },
    children
  );

// Handle the keyboard activation same as a button
function handleKeyActivation(cb: () => any) {
  return (event: any) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        cb();
        return;
    }
  };
}
