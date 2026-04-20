"use client";

import Spline from "@splinetool/react-spline";

type Props = {
  sceneUrl: string;
};

/**
 * Spline embed when `NEXT_PUBLIC_SPLINE_SCENE_URL` is set (see `.env.example`).
 */
export function SplineHero({ sceneUrl }: Props): React.ReactElement {
  return (
    <div className="absolute inset-0 h-full min-h-[100dvh] w-full [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full">
      <Spline scene={sceneUrl} className="h-full w-full" onLoad={() => undefined} />
    </div>
  );
}
