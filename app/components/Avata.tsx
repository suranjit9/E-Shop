import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  src?: string | null | undefined;
}

const Avata: React.FC<Props> = ({ src }) => {
  if (src) {
    return <Image src={src} alt="avata" width={30} height={30} />;
  }
  return <FaUserCircle size={30} />;
};

export default Avata;
