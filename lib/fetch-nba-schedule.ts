import { cache } from "react";

export const fetchNbaSchedule = cache(async () => {
  const res = await fetch(
    "http://api.sportradar.us/nba/trial/v8/en/games/2023/01/09/schedule.json?api_key=yf74g53h3cbjv3h2axx2krrm",
    // "https://api.sportsdata.io/v3/nba/odds/json/GameOddsByDate/today?key=ce1cea60fa674f5ebb95719e856f2b47",
    // "https://replay.sportsdata.io/api/v3/nba/odds/json/gameoddsbydate/2023-12-01?key=6a1ec01a9307469b9a7c7fb1ba1939f9",
    // "http://archive.sportsdata.io/v3/nba/odds/json/gameoddsbydate/2023-12-02?key=6a1ec01a9307469b9a7c7fb1ba1939f9",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
});
