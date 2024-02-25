"use client";
import { useState } from "react";
import { GameCardProps } from "./game-card.types";
import {
  Typography,
  CardActions,
  Card,
  Button,
  CardContent,
  CardOverflow,
  ToggleButtonGroup,
} from "@mui/joy";
import styles from "./game-card.module.scss";

export const GameCard = ({ game }: GameCardProps) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography level="h3" className={styles.gameTitle}>
          {game.AwayTeam} @ {game.HomeTeam}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ToggleButtonGroup
            variant="outlined"
            color="primary"
            value={selectedTeam}
            onChange={(event, newValue) => {
              setSelectedTeam(newValue);
            }}
            className={styles.teamButton}
            sx={{ width: "100%" }}
            disabled={game.Status !== "Scheduled"}
          >
            <Button value="away">{game.AwayTeam}</Button>
            <Button value="home">{game.HomeTeam}</Button>
          </ToggleButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};
