import { type NextPage } from "next";
import InDevelop from "@/components/ui/in-develop/InDevelop";
import {PartitionPlugVariantOne} from "@/components/reused/partition-plug/PartitionPlugVariantOne";
import {PartitionPlugVariantTwo} from "@/components/reused/partition-plug/PartitionPlugVariantTwo";

const Tests: NextPage = () => {
  return (
    <div>
      {" "}
        {/*<PartitionPlugVariantTwo/>*/}
        <PartitionPlugVariantOne/>
    </div>
  );
};
export default Tests;
