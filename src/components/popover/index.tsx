import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

interface PopoverProps {
  MainComponent: React.ReactNode; // 具名插槽对应的元素
  ShowComponent: React.ReactNode; // 匿名插槽对应的元素
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; // 控制气泡位置
}

const DELAY_TIME = 1000;

const Popover: React.FC<PopoverProps> = ({
  MainComponent,
  ShowComponent,
  placement = "bottom-left",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentStyle, setContentStyle] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const referenceTarget = useRef<HTMLDivElement>(null);
  const contentTarget = useRef<HTMLDivElement>(null);
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // 计算元素尺寸
  const useElementSize = (target: HTMLElement | null) => {
    if (!target) return { width: 0, height: 0 };
    return { width: target.offsetWidth, height: target.offsetHeight };
  };

  // 计算气泡位置
  const calculatePosition = () => {
    if (!referenceTarget.current || !contentTarget.current) return;

    const referenceSize = useElementSize(referenceTarget.current);
    const contentSize = useElementSize(contentTarget.current);

    switch (placement) {
      case "top-left":
        setContentStyle({
          top: 0,
          left: -contentSize.width,
        });
        break;
      case "top-right":
        setContentStyle({
          top: 0,
          left: referenceSize.width,
        });
        break;
      case "bottom-left":
        setContentStyle({
          top: referenceSize.height,
          left: -contentSize.width,
        });
        break;
      case "bottom-right":
        setContentStyle({
          top: referenceSize.height,
          left: referenceSize.width,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible, placement]);

  const onMouseEnter = () => {
    setIsVisible(true);
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  const onMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsVisible(false);
      timeout = null;
    }, DELAY_TIME);
  };

  return (
    <>
      <div
        className="relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={referenceTarget}
      >
        {MainComponent}

        <CSSTransition
          in={isVisible}
          timeout={300} // 动画的持续时间
          classNames="slide"
          unmountOnExit
        >
          <div
            ref={contentTarget}
            className="absolute p-1 z-20 bg-white dark:bg-zinc-900 border rounded-md dark:border-zinc-700"
            style={{ ...contentStyle }}
          >
            {ShowComponent}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Popover;
