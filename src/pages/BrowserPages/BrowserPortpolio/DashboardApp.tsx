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
import { useRecoilValue } from "recoil";
/* import { currentClubInfoState } from "../../atoms/utilAtom"; */
import { useQuery } from "react-query";
/* import { RegisteredClubType, UserType } from "../../types/user"; */
import { useParams } from "react-router-dom";
/* import { getAppliedUserByClubID } from "../../utils/fetch/fetchApply"; */
/* import { AppliedUserType } from "../../types/apply"; */
import { useEffect, useState } from "react";
/* import { ToDoType } from "../../types/todo"; */
import AppConversionRates from "../../../components/dashboardApp/AppConversionRates";
import StringColumnChart from "../../../components/dashboardApp/StringColumnChart";
import BooleanColumnChart from "../../../components/dashboardApp/BooleanColumnChart";
/* import {
  calculateMonthTodos,
  calculateTodayTodos,
  makeChartData,
  studentIDData,
  studentIDExample,
  studentMajorData,
} from "../../utils/makeChartData";
import { getClubMembers } from "../../utils/fetch/fetchUser";
import { getTodosByClubID } from "../../utils/fetch/fetchTodo"; */

export default function DashboardApp() {
  /* const currentClubInfo = useRecoilValue(currentClubInfoState); */
  const { clubID } = useParams();

  const [stringColumnsData, setStringColumnsData] = useState(
    new Map<string, string[]>()
  );
  const [numberColumnsData, setNumberColumnsData] = useState(
    new Map<string, string[]>()
  );
  const [booleanColumnsData, setBooleanColumnsData] = useState(
    new Map<string, string[]>()
  );

  /* const { data: clubMembersData } = useQuery<UserType[]>(
    "getClubMembers",
    () => getClubMembers(clubID || ""),
    {
      onSuccess: (data) => {
        // console.log(data);
      },
      onError: (error: any) => alert(error.response.data.error),
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
 */
 /*  useEffect(() => {
    const tempStringColumns = new Map();
    const tempNumberColumns = new Map();
    const tempBooleanColumns = new Map();

    if (currentClubInfo) {
      if (clubMembersData) {
        clubMembersData.forEach((member) => {
          Object.values(member.registeredClubs).forEach(
            (club: RegisteredClubType) => {
              if (club.clubId === currentClubInfo._id) {
                club.moreColumns.forEach((col) => {
                  if (col.column.valueType === "string") {
                    if (tempStringColumns.get(col.column.key)) {
                      tempStringColumns.set(col.column.key, [
                        ...tempStringColumns.get(col.column.key),
                        col.value,
                      ]);
                    } else {
                      tempStringColumns.set(col.column.key, [col.value]);
                    }
                  } else if (col.column.valueType === "number") {
                    if (tempNumberColumns.get(col.column.key)) {
                      tempNumberColumns.set(col.column.key, [
                        ...tempNumberColumns.get(col.column.key),
                        col.value,
                      ]);
                    } else {
                      tempNumberColumns.set(col.column.key, [col.value]);
                    }
                  } else if (col.column.valueType === "boolean") {
                    if (tempBooleanColumns.get(col.column.key)) {
                      tempBooleanColumns.set(col.column.key, [
                        ...tempBooleanColumns.get(col.column.key),
                        col.value,
                      ]);
                    } else {
                      tempBooleanColumns.set(col.column.key, [col.value]);
                    }
                  }
                });
              }
            }
          );
        });
        setStringColumnsData(tempStringColumns);
        setNumberColumnsData(tempNumberColumns);
        setBooleanColumnsData(tempBooleanColumns);
      }
    }
  }, [currentClubInfo, clubMembersData]); */

  /* const { data: appliedUsersData } = useQuery<AppliedUserType[]>(
    "getAppliedUserByClubID",
    () => getAppliedUserByClubID(clubID || ""),
    {
      onSuccess: (data) => {
        // console.log(data);
      },
      onError: (error: any) => {
        alert(error.response.data.error);
      },
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const { data: todoData } = useQuery<ToDoType[]>(
    "getTodosByClubID",
    () => getTodosByClubID(clubID || ""),
    {
      onSuccess: (data) => {
        // console.log(data);
      },
      onError: (error: any) => alert(error.response.data.error),
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  ); */

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
              '$ 18709000'
            } 
            icon={"mdi:account-details"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="총 손익"
            total={
              '$ 246400'
            } 
            color="info"
            icon={"mdi:arrow-expand"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="총 매입"
            total={
              '$ 15037800'
            } 
            color="warning"
            icon={"icon-park-outline:buy"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="실현 손익"
            total={
              '$ 197120'
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

        {/* <Grid item xs={12} md={6} lg={12}> */}
{/*           <AppConversionRates
            title="학과 분포"
            subheader="동아리원들의 학과 분포 그래프"
             chartData={
              clubMembersData
                ? studentMajorData(clubMembersData)
                : [
                    { label: "Italy", value: 400 },
                    { label: "Japan", value: 430 },
                    { label: "China", value: 448 },
                    { label: "Canada", value: 470 },
                    { label: "France", value: 540 },
                    { label: "Germany", value: 580 },
                    { label: "South Korea", value: 690 },
                    { label: "Netherlands", value: 1100 },
                    { label: "United States", value: 1200 },
                    { label: "United Kingdom", value: 1380 },
                  ]
            } 
          /> */}
        {/* </Grid> */}

{/*          {stringColumnsData.size > 0
          ? Array.from(stringColumnsData).map(([key, value]) => {
              const obj = makeChartData(key, value);

              return (
                <Grid key={key} item xs={12} sm={6} md={6}>
                  <Card>
                    <CardHeader title={key} />
                    <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                      <StringColumnChart
                        name={key}
                        data={Object.values(obj)}
                        categories={Object.keys(obj)}
                      />
                    </Box>
                  </Card>
                </Grid>
              );
            })
          : null}

        {numberColumnsData.size > 0
          ? Array.from(numberColumnsData).map(([key, value]) => {
              const obj = makeChartData(key, value);

              return (
                <Grid key={key} item xs={12} sm={6} md={6}>
                  <AppWebsiteVisits
                    title={key}
                    subheader=""
                    chartLabels={Object.keys(obj)}
                    chartData={[
                      {
                        name: key,
                        type: "area",
                        fill: "gradient",
                        data: Object.values(obj),
                      },
                    ]}
                  />
                </Grid>
              );
            })
          : null} */}

    

             
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
