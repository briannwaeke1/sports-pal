import { Box, Button, Typography } from "@mui/joy";
import styles from "./header.module.scss";
import { UserButton, currentUser, SignInButton } from "@clerk/nextjs";

export const Header = async () => {
  const user = await currentUser();

  return (
    <nav className={styles.container}>
      <Typography level="h3">Sports Pal</Typography>

      <Box className={styles.spacer}>
        {!user && (
          <SignInButton>
            <Button className={styles.signInButton}>Sign In</Button>
          </SignInButton>
        )}

        <UserButton afterSignOutUrl="/" />
      </Box>
    </nav>
  );
};
