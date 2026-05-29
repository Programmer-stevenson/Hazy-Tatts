import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let mx = -200, my = -200, raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    // The dagger's blade tip sits near the image's top-left, so we offset the
    // element slightly up/left to put that tip exactly on the pointer point.
    const TIP_X = 6; // px from left edge to blade tip
    const TIP_Y = 4; // px from top edge to blade tip

    const anim = () => {
      el.style.left = mx - TIP_X + "px";
      el.style.top = my - TIP_Y + "px";
      raf = requestAnimationFrame(anim);
    };
    anim();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Grow slightly when hovering links/buttons */}
      <style>{`
        #pointer-cursor {
          position: fixed; top: -200px; left: -200px;
          width: 66px; height: 66px;
          pointer-events: none; z-index: 99999;
          background: url('/pointer.png') no-repeat center / contain;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.55));
          transform: scale(1) rotate(0deg);
          transform-origin: top left;
          transition: transform 0.15s ease;
        }
        body:has(a:hover) #pointer-cursor,
        body:has(button:hover) #pointer-cursor {
          transform: scale(1.18) rotate(-6deg);
        }
        /* Hide the dagger on touch devices (no hover/pointer) */
        @media (hover: none), (pointer: coarse) {
          #pointer-cursor { display: none; }
        }
      `}</style>
      <div id="pointer-cursor" ref={ref}></div>
    </>
  );
}