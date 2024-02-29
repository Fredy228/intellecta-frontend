import { type NextPage } from "next";
import InDevelop from "@/components/ui/in-develop/InDevelop";
import {PartitionPlugVariantOne} from "@/components/reused/partition-plug/PartitionPlugVariantOne";
import {PartitionPlugVariantTwo} from "@/components/reused/partition-plug/PartitionPlugVariantTwo";
import {PartitionPlugVariantThree} from "@/components/reused/partition-plug/PartitionPlugVariantThree";
import {PartitionPlugVariantFive} from "@/components/reused/partition-plug/PartitionPlugVariantFive";

const Tests: NextPage = () => {
  return (
    <div>
      {" "}
        {/*<PartitionPlugVariantOne/>*/}
        {/*<PartitionPlugVariantTwo/>*/}
        {/*<PartitionPlugVariantThree/>*/}
        <PartitionPlugVariantFive/>
    </div>
  );
};
export default Tests;
