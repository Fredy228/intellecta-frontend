import { type NextPage } from "next";
import InDevelop from "@/components/ui/in-develop/InDevelop";
import {PartitionPlugVariantOne} from "@/components/reused/partition-plug/CubeGroupPlug/PartitionPlugVariantOne";
import {PartitionPlugVariantTwo} from "@/components/reused/partition-plug/CubeGroupPlug/PartitionPlugVariantTwo";
import {PartitionPlugVariantThree} from "@/components/reused/partition-plug/RobotGroupPlug/PartitionPlugVariantThree";
import {PartitionPlugVariantFive} from "@/components/reused/partition-plug/RobotGroupPlug/PartitionPlugVariantFive";
import {PartitionPlugVariantFour} from "@/components/reused/partition-plug/RobotGroupPlug/PartitionPlugVariantFour";

const Tests: NextPage = () => {
  return (
    <>
      {" "}
        {/*<PartitionPlugVariantOne/>*/}
        {/*<PartitionPlugVariantTwo/>*/}
        {/*<PartitionPlugVariantThree/>*/}
        {/*<PartitionPlugVariantFour/>*/}
        <PartitionPlugVariantFive/>
    </>
  );
};
export default Tests;
