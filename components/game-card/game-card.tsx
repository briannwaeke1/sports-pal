"use client";
import { useState } from "react";
import { Box, Typography, CardActions, Card, Button } from "@mui/joy";
import styles from "./game-card.module.css";

export const GameCard = ({ game }: { game: any }) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <Card className={styles.card}>
      <Typography
        fontSize={14}
        fontWeight="bold"
        style={{ textAlign: "center" }}
      >
        {game.away.name} @ {game.home.name}
      </Typography>
      <Button onClick={() => setSelectedTeam(game.away.alias)}>
        {game.away.alias}
      </Button>
      <Button onClick={() => setSelectedTeam(game.home.alias)}>
        {game.home.alias}
      </Button>
      <CardActions>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          {selectedTeam ? (
            <Typography fontSize="large" color="primary">
              You selected {selectedTeam} to win
            </Typography>
          ) : (
            <Typography fontSize="large">
              Click a team to see the odds
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};
