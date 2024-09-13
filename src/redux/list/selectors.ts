import { RootState } from "@/redux/store";

export const isFetch = (state: RootState) => state.list.isFetchList;
