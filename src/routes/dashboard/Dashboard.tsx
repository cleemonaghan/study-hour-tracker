import { Box, Grid, Paper, Typography, styled, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import StudyHoursDataGrid from "./StudyHoursDataGrid";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = {
  currentChapter: 14,
  maxChapters: 30,
  hoursThisWeek: 8,
  expectedHoursThisWeek: 25,
  accumulatedHours: 218,
  totalExpectedHours: 400,
  daysUntilExam: 25,
  hoursStudied: [5, 10, 18, 18, 18, 19, 21, 18, 6, 20, 18, 19, 26, 8],
};

function Dashboard() {
  const theme = useTheme();
  return (
    <Box
      sx={(theme) => ({ margin: theme.spacing(4), minHeight: "80vh" })}
      data-testid="dashboard"
    >
      <Typography
        component={"div"}
        variant="h4"
        sx={(theme) => ({ margin: theme.spacing(4) })}
      >
        Dashboard
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <GridItem
          sm={6}
          md={3}
          title="Current Chapter"
          body={`${data.currentChapter}/${data.maxChapters}`}
          color={theme.palette.secondary.contrastText}
          backgroundColor={theme.palette.secondary.light}
        />
        <GridItem
          sm={6}
          md={3}
          title="Hours This Week"
          body={`${data.hoursThisWeek}/${data.expectedHoursThisWeek}`}
          color={theme.palette.secondary.contrastText}
          backgroundColor={theme.palette.secondary.main}
        />
        <GridItem
          sm={6}
          md={3}
          title="Total Hours"
          body={`${data.accumulatedHours}/${data.totalExpectedHours}`}
          color={theme.palette.text.primary}
          backgroundColor={theme.palette.primary.light}
        />
        <GridItem
          sm={6}
          md={3}
          title="Days Until Exam"
          body={`${data.daysUntilExam}`}
          color={theme.palette.primary.contrastText}
          backgroundColor={theme.palette.primary.main}
        />
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Item
            sx={(theme) => ({
              color: theme.palette.primary.dark,
              backgroundColor: theme.palette.background.default,
              width: "100uv",
              height: theme.spacing(60),
            })}
          >
            <StudyHoursDataGrid />
          </Item>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Item
            sx={(theme) => ({
              width: "100uv",
              height: theme.spacing(60),
              backgroundColor: theme.palette.background.default,
            })}
            data-testid="study-hours-graph"
          >
            <LineChart
              xAxis={[
                {
                  label: "Week",
                  labelStyle: {
                    fontSize: "1.2rem",
                    fontWeight: theme.typography.fontWeightBold,
                  },
                  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                  tickMinStep: 1,
                },
              ]}
              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: "1.2rem",
                    fontWeight: theme.typography.fontWeightBold,
                  },
                },
              }}
              series={[
                {
                  curve: "linear",
                  data: data.hoursStudied,
                  label: "Hours Studied",
                  color: theme.palette.primary.main,
                },
              ]}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function GridItem({
  title,
  body,
  color,
  backgroundColor,
  sm,
  md,
}: {
  title: string;
  body: string;
  color: string;
  backgroundColor: string;
  sm?: number;
  md?: number;
}) {
  return (
    <Grid item xs={12} sm={sm} md={md}>
      <Item
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(2, 3),
          color,
          backgroundColor,
        })}
      >
        <Typography
          sx={{
            alignSelf: "flex-start",
            textWrap: "nowrap",
          }}
          component={"div"}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography component={"div"} variant="h3">
          {body}
        </Typography>
      </Item>
    </Grid>
  );
}

export default Dashboard;
