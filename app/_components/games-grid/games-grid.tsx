import { GameCard } from "@/components/game-card";
import { GameDetails } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";
import { getScheduledGames } from "@/lib/getScheduledGames";
import { Box, Typography } from "@mui/joy";
import styles from "./games-grid.module.scss";

export const GamesGrid = async () => {
  const games = await getScheduledGames(formatDate());
  return (
    <Box className={styles.grid}>
      {!games?.length ? (
        <Typography className={styles.noGamesText}>No games today</Typography>
      ) : (
        games?.map((game: GameDetails) => (
          <GameCard game={game} key={game.GameID} />
        ))
      )}
    </Box>
  );
};
