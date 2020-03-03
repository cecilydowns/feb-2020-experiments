import React, { useEffect, useState, useRef } from "react";

interface Props {
  children: any;
}

// To improve performance, this wrapper component unmounts children that
// are not near the visible viewport, while using the wrapper as a
// placeholder with the same height as the unmounted element.
const UnmountHiddenWrapper = ({ children }: Props) => {
  const [visible, setVisible] = useState(true);
  const [style, setStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const callback = (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.intersectionRatio * 100 > 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: "1000px 0px",
        threshold: [0, 1]
      });

      observer.observe(containerRef.current);

      setStyle({ minHeight: `${containerRef.current.offsetHeight}px` });
    }
  }, []);

  return (
    <div ref={containerRef} style={style}>
      {visible && children}
    </div>
  );
};

export default UnmountHiddenWrapper;
