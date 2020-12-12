import React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Tooltip,
  Box,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box {...props}>
      <Tooltip
        label={text === "dark" ? "Light mode" : "Dark mode"}
        size="md"
        placement="auto"
      >
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          label="Change mode"
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          justifySelf="flex-end"
        />
      </Tooltip>
    </Box>
  );
};
