"use client";
import { useState } from "react";
import { Box, Typography, CardActions, Card, Button } from "@mui/joy";
import styles from "./game-card.module.css";

export const GameCard = ({ game }: { game: any }) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <Card>
      <Typography level="h4" sx={{ textAlign: "center" }}>
        {game.AwayTeamName} @ {game.HomeTeamName}
      </Typography>
      <Button onClick={() => setSelectedTeam(game.AwayTeamName)}>
        {game.AwayTeamName}
      </Button>
      <Button onClick={() => setSelectedTeam(game.HomeTeamName)}>
        {game.HomeTeamName}
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
