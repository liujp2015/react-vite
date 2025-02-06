import React from "react";
import useScrollLock from "../../hooks/useScrollLock";
import ReactDOM from "react-dom";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  useScrollLock(isOpen);
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      {/* 蒙版 */}
      <div
        className="h-screen w-screen fixed top-0 left-0 z-40 bg-zinc-900/80"
        onClick={onClose} // 点击遮罩层关闭弹出框
      />
      {/* 弹出框内容 */}
      <div
        className="w-screen bg-white z-50 fixed bottom-0"
        style={{
          transition: "all 0.3s",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
        }}
      >
        {children}
      </div>
    </>,
    document.body // 将 Popup 渲染到 body 上
  );
};

export default Popup;
