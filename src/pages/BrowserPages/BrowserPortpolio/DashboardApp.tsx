import {
  Grid,
  Container,
  Typography,
  CardHeader,
  Card,
  Box,
} from "@mui/material";
import AppWidgetSummary from "../../../components/dashboardApp/AppWidgetSummary";
import AppWebsiteVisits from "../../../components/dashboardApp/AppWebsiteVisits";
import { useQuery } from "react-query";
import BooleanColumnChart from "../../../components/dashboardApp/BooleanColumnChart";


export default function DashboardApp() {
  

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" sx={{ mb: 5, color: "#000069" }}>
        자산관리를 한눈에! 대시보드
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="총 평가"
            total={
              '18709000원'
            } 
            icon={"mdi:account-details"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="총 손익"
            total={
              '246400원'
            } 
            color="info"
            icon={"mdi:arrow-expand"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="총 매입"
            total={
              '15037800원'
            } 
            color="warning"
            icon={"icon-park-outline:buy"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="실현 손익"
            total={
              '197120원'
            } 
            color="error"
            icon={"mdi:report-bar"}
          />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <AppWebsiteVisits
            title="자산 흐름"
            subheader="현재 계좌 자산 흐름 그래프"
            chartLabels={
              ["2.1", "2.2", "2.3", "2.6", "2.7", "2.8", "2.9"]
            } 
             chartData={[
              {
                name: "총자산",
                type: "area",
                fill: "gradient",
                data: [18500000, 18559000, 18509000, 18689000, 18779000, 18739000, 18709000],
              },
            ]} 
          /> 
        </Grid>

      
             
        <Grid key={"보유주식 현황"} item xs={12} xl={6}>
          <Card>
            <CardHeader title={"보유주식 현황"} />
            <Box sx={{ p: 2, pb: 1 }} dir="ltr">
              <BooleanColumnChart
                series={[1984000,1977600,1960100,1977800,1868900,1974900,1352000,1942500]}
                labels={["삼천당제약","삼성전자","삼성물산","삼성생명","현대자동차","현대제철","LG화학","LG이노텍"]}
              />
            </Box>
          </Card>
        </Grid>
  
          
      </Grid>
    </Container>
  );
}
