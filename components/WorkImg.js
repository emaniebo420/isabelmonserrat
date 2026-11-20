'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Painting image. An invisible watermarked copy (opacity 0, same size and position) sits over the visible image,
 * so right-click, long-press, drag and save get the watermarked file while visitors see the clean painting.
 * It loads only after the visible image has loaded. Screenshots and browser dev tools are not covered.
 * Make the watermarked files with scripts/make-watermarks.py.
 */
export default function WorkImg({ src, wmSrc, alt, className = '', wrapperClassName = '', style, fetchPriority }) {
  const visibleRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // the image may already be complete (cached) before React attaches onLoad
    if (visibleRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <span className={`relative ${wrapperClassName}`}>
      <img
        ref={visibleRef}
        src={src}
        alt={alt}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={style}
        onLoad={() => setLoaded(true)}
      />
      {loaded ? (
        <img
          src={wmSrc}
          alt=""
          aria-hidden="true"
          decoding="async"
          className={className}
          style={{
            ...style,
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            maxWidth: 'none',
            maxHeight: 'none',
            margin: 0,
            opacity: 0,
          }}
          onDragStart={(e) => {
            // the overlay is invisible, so show the visible image as the drag ghost
            const vis = visibleRef.current;
            if (vis) e.dataTransfer.setDragImage(vis, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
        />
      ) : null}
    </span>
  );
}
