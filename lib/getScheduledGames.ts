"use server";

/**
 * This function is responsible for fetching the scheduled games from the API
 * @param currentDate
 * @returns {Promise} - Promise object represents the scheduled games
 */

import { GameDetails } from "./types";

export const getScheduledGames = async (
  currentDate: string
): Promise<GameDetails[]> => {
  const res = await fetch(
    //  `https://api.sportradar.us/nba/trial/v8/en/games/${currentDate}/schedule.json?api_key=${process.env.SPORTS_RADAR_API_KEY}`,
    `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${currentDate}?key=ce1cea60fa674f5ebb95719e856f2b47`
  );
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
