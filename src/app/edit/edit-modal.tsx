import { MouseEventHandler } from "react";

type EditModalProps = {
  show: boolean;
  setShow: Function;
};

export default function EditModal({ show, setShow }: EditModalProps) {
  return (
    <div
      className={`${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } z-10 fixed flex justify-center items-center w-full h-full transition-all duration-300`}
    >
      <div className="flex flex-col items-center p-5 bg-blue-950 max-w-2xl rounded-2xl">
        <div className="px-24 py-12">Edit modal</div>
        <div className="flex w-full">
          <div className="flex">
            <Button
              className="hover:bg-blue-800"
              onClick={() => setShow(false)}
            >
              Save
            </Button>
            <Button
              className="text-slate-500 hover:text-white hover:bg-blue-800"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

type ButtonProps = {
  className: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  children: string;
};

function Button({ className, onClick, children }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`p-2 mx-1 hover:cursor-pointer transition-colors rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}