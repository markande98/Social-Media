import { Typography, useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";

const HobbiesWidget = () => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const mediumMain = palette.neutral.mediumMain;
  return (
    <WidgetWrapper mt="2rem">
      <Typography color={main} mb="1rem">What I Like!</Typography>
      <Typography color={mediumMain} mb="1rem">
        A passionate software engineer, who loves with innovation 
        and creativity, expolored every tech field. 
      </Typography>
      <Typography color={mediumMain}>
        Eat, code and Sleep.
      </Typography>
    </WidgetWrapper>
  );
};

export default HobbiesWidget;
