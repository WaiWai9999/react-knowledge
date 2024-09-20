// import * as React from "react";
// import styledC from "styled-components";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

// import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";

// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

// import TextField from "@mui/material/TextField";

// const Container = styledC.div`
//   margin: 50px;
// `;

// const Space = styledC.div`
//   margin-top: 50px;
// `;

// const StyledButton = styled(IconButton)(({ theme }) => ({
//   borderRadius: theme.shape.borderRadius,
// }));

// const StyledDay = styled(PickersDay)(({ theme }) => ({
//   borderRadius: theme.shape.borderRadius,
//   color:
//     theme.palette.mode === "light"
//       ? theme.palette.secondary.dark
//       : theme.palette.secondary.light,
// }));

// export default function MuiDatePicker() {
//   const today = dayjs();
//   const [value, setValue] = React.useState(null);
//   return (
//     <Container>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           value={today}
//           format="YYYY/MM/DD"
//           label="DOB"
//           maxDate={today}
//           closeOnSelect={false}
//         />
//         <Space></Space>
//         <DatePicker
//           defaultValue={today}
//           format="YYYY/MM/DD"
//           label="Registration Date"
//           maxDate={today}
//           views={["year", "month", "day"]}
//         />
//         <Space></Space>
//         <DatePicker
//           defaultValue={today}
//           format="YYYY/MM/DD"
//           label="Styled Picker"
//           maxDate={today}
//           views={["year", "month", "day"]}
//           slots={{
//             openPickerIcon: EditCalendarRoundedIcon,
//             openPickerButton: StyledButton,
//             day: StyledDay,
//           }}
//           slotProps={{
//             field: {
//               clearable: true,
//             },
//             openPickerIcon: { fontSize: "large" },
//             openPickerButton: { color: "secondary" },
//             textField: {
//               variant: "filled",
//               focused: true,
//               color: "secondary",
//             },
//           }}
//         />
//         <Space></Space>
//         <DatePicker
//           format="MMMM YYYY"
//           label="年月"
//           maxDate={today}
//           views={["year", "month"]}
//         />
//         <Space></Space>
//         <DatePicker format="DD" label="日" maxDate={today} views={["day"]} />
//         <Space></Space>
//         <MobileDatePicker
//           label="Mobile variant"
//           defaultValue={dayjs("2022-04-17")}
//         />
//         <Space></Space>
//         <DatePicker
//           label="Helper Text Example"
//           slotProps={{
//             textField: {
//               helperText: "MM/DD/YYYY",
//             },
//           }}
//         />
//         <Space></Space>
//         <DatePicker
//           label="予約日を選択"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           disablePast
//           slotProps={{
//             textField: {
//               variant: "outlined",
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </Container>
//   );
// }

import styledC from "styled-components";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import IconButton from "@mui/material/IconButton";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import PickersActionBarProps from "@mui/x-date-pickers/PickersActionBar";

const Container = styledC.div`
  margin: 50px;
`;

const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const StyledDay = styled(PickersDay)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light,
}));

export default function MuiDatePicker() {
  // const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  // const today = dayjs();
  // const eventDate = dayjs("2024-06-06"); // イベント日 / 登録締切日

  // const [selectedYearMonth, setSelectedYearMonth] =
  //   React.useState<Dayjs | null>(dayjs());
  //const [selectedDay, setSelectedDay] = React.useState<Dayjs | null>(dayjs());

  const today = dayjs();
  //const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(today);

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          label="日付を選択"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        /> */}
        {/* <DatePicker
          label="申請日"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={today} // 今日からのイベント日まで選択可能
          maxDate={eventDate} // 締切日
          format="YYYY/MM/DD"
          views={["year", "month", "day"]}
          slotProps={{
            textField: {
              helperText: `イベントの登録日を選択してください。締切日：${eventDate.format(
                "YYYY/MM/DD"
              )}`,
            },
          }}
        /> */}
        {/* <DatePicker
          format="MMMM YYYY"
          label="年月"
          value={selectedYearMonth}
          onChange={(date) => setSelectedYearMonth(date)}
          views={["year", "month"]}
        />
        <Space></Space>
        <DatePicker
          format="DD"
          label="日"
          value={selectedDay}
          onChange={(date) => setSelectedDay(date)}
          views={["day"]}
        /> */}

        <DatePicker
          format="YYYY/MM/DD"
          defaultValue={today}
          label="Styled Picker"
          maxDate={today}
          views={["year", "month", "day"]}
          slots={{
            openPickerIcon: EditCalendarRoundedIcon,
            openPickerButton: StyledButton,
            day: StyledDay,
          }}
          slotProps={{
            field: {
              clearable: true,
            },
            previousIconButton: { color: "secondary" },
            openPickerIcon: { fontSize: "large" },
            openPickerButton: { color: "secondary" },
            textField: {
              variant: "filled",
              focused: true,
              color: "secondary",
            },
          }}
        />
      </LocalizationProvider>
    </Container>
  );
}
