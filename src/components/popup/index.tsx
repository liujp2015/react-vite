import React, { useState } from "react";
import useScrollLock from "../../hooks/useScrollLock";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Button } from "@headlessui/react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const [testOpen, setTestOpen] = useState(isOpen);

  useScrollLock(isOpen);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Button onClick={() => setTestOpen(true)}>打开弹窗</Button>

      {/* 蒙版 */}
      <CSSTransition
        in={testOpen}
        timeout={300} // 动画的持续时间
        classNames="fade"
        unmountOnExit
      >
        <div
          className="h-screen w-screen fixed top-0 left-0 z-40 bg-zinc-900/80"
          onClick={onClose} // 点击遮罩层关闭弹出框
        />
      </CSSTransition>

      {/* 弹出框内容 */}
      <CSSTransition
        in={testOpen}
        timeout={300} // 动画的持续时间
        classNames="popup"
        unmountOnExit
      >
        <div className="w-screen bg-white z-50 fixed bottom-0">{children}</div>
      </CSSTransition>
    </>,
    document.body // 将 Popup 渲染到 body 上
  );
};

export default Popup;
