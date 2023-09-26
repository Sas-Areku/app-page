import Image, { StaticImageData } from "next/image";

type AppPageProps = {
  edit: boolean;
  setModal?: Function;
};

export default function AppPage({ edit, setModal }: AppPageProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="p-5">
        {edit ? (
          <div onClick={() => (setModal ? setModal(true) : null)}>
            <AppItem name="Edit" edit={true} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

type AppItemProps = {
  name: string;
  image?: StaticImageData;
  url?: string | Function;
  edit?: boolean;
};

function AppItem({ name, image, url, edit }: AppItemProps) {
  return (
    <a href={typeof url === "string" ? url : "#"}>
      <div
        className={`${
          edit ? "icon-plus" : null
        } text-5xl p-8 cursor-pointer transition-all duration-75 hover:outline outline-4 outline-blue-500 hover:bg-white/[15%] rounded-2xl`}
      >
        {edit ? null : image ? <Image src={image.src} alt={name} /> : null}
      </div>
    </a>
  );
}
