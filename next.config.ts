import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Pin the workspace root to this repository. Without it, Next walks up and
   * finds an unrelated lockfile above the project, and infers the wrong root
   * for module resolution and output file tracing.
   */
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
