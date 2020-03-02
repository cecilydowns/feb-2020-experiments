import React, { useEffect, useState, useRef } from "react";

interface Props {
  children: any;
}

const UnmountHiddenWrapper = ({ children }: Props) => {
  const [visible, setVisible] = useState(true);
  const [style, setStyle] = useState({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
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

      observer.observe(ref.current);

      setStyle({ minHeight: `${ref.current.offsetHeight}px` });
    }
  }, []);

  return (
    <div ref={ref} style={style}>
      {visible && children}
    </div>
  );
};

export default UnmountHiddenWrapper;
