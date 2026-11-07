'use client';

import type { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width }: ImageLoaderProps): string {
  if (!/\.(png|jpe?g|webp)$/i.test(src)) return src;
  return `/optimized${src.replace(/\.[^.]+$/, '')}-${width}.webp`;
}
