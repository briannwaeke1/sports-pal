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
        <Typography className={styles.gameTitle}>
          {game.away.name} @ {game.home.name}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ToggleButtonGroup
            variant="outlined"
            value={selectedTeam}
            onChange={(event, newTeam) => {
              setSelectedTeam(newTeam);
            }}
            className={styles.teamButton}
          >
            <Button value={game.away.alias}>{game.away.alias}</Button>
            <Button value={game.home.alias}>{game.home.alias}</Button>
          </ToggleButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};
