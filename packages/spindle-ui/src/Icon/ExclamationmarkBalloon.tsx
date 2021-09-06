import * as React from 'react';

function SvgExclamationmarkBalloon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M17.5 3h-11c-2.2 0-4 1.8-4 4v12.3c0 .8.4 1.5 1 1.9.3.2.7.3 1 .3.5 0 1.1-.2 1.5-.6l1.5-1.6c.2-.2.5-.3.7-.3h9.3c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm2 11.9c0 1.1-.9 2-2 2h-10c-.4 0-.8.2-1.1.5l-1.9 2.1V7c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v7.9zm-6.3-7.1v3.3c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2V7.8c0-.7.6-1.2 1.2-1.2s1.2.5 1.2 1.2zm0 6.3c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.5 1.2 1.2z" />
    </svg>
  );
}

export default SvgExclamationmarkBalloon;