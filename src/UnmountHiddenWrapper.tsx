import React, { useEffect, useState, useRef } from "react";

interface Props {
  children: any;
}

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
