import backInstance from "@/utils/instances/backInstance";
import { Giveaway } from "@/utils/types/giveawayTypes";

export const getGiveaways = async ()=> {
  try {
    const response = await backInstance.get("giveaway");
    console.log("Response from API:", response.data);
    return response.data as Giveaway[];
  } catch (error) {
    console.error("Error fetching giveaways:", error);
    throw error;
  }
};