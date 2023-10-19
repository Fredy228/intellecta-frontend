import { FC } from "react";
import { ColorRing } from "react-loader-spinner";

type Props = {
  height: string;
  width: string;
  color: string;
};
const LoaderButton: FC<Props> = ({ height, width, color }) => {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={[color, color, color, color, color]}
    />
  );
};
export default LoaderButton;
