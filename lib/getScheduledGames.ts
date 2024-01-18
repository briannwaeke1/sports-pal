/**
 *
 * @param currentDate
 * @returns {Promise} - a promise that resolves to the nba games data from the API
 */

import { NBAScheduleResponse } from "./types";

export const getScheduledGames = async (
  currentDate: string,
): Promise<NBAScheduleResponse> => {
  const res = await fetch(
    `https://api.sportradar.us/nba/trial/v8/en/games/${currentDate}/schedule.json?api_key=${process.env.SPORTS_RADAR_API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
