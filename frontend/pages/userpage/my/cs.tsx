import UserMypageSidebar from "@/components/UserMypageSidebar";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Container,
  Stack,
  Typography,
  CssBaseline,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  Table,
  Button,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { FC } from "react";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const CustomButton2 = styled(Button)({
  color: "#5B321E",
  border: "2px solid #5B321E",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#FCE2A6",
    color: "#5B321E",
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#CDAD78",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: "#FCF8F0",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: 50,
}));

const dummyData = [
  {
    donationApplyId: 1,
    title: "엉키는 마음은 꿈에선 다 잊게 영원처럼 안아줘",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: null,
  },
  {
    donationApplyId: 2,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: null,
  },
  {
    donationApplyId: 3,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: true,
  },
  {
    donationApplyId: 4,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 5,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: true,
  },
  {
    donationApplyId: 6,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 7,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: true,
  },
  {
    donationApplyId: 8,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 9,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 10,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
];

const UserMypageCs: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <UserMypageSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          mt: 0,
        }}
      >
        <Container maxWidth="lg" sx={{}}>
          <Typography variant="h4">문의 내역</Typography>
          <TableContainer component={Paper} sx={{ mt: 5 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                    번호
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                    제목
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                    작성일
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                    답변 여부
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((data) => (
                  <StyledTableRow key={data.donationApplyId}>
                    <StyledTableCell align="center">
                      {data.donationApplyId}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ width: 400 }}>
                      {data.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.donationDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.fact === true ? (
                        <Typography>완료</Typography>
                      ) : (
                        <Typography>미완료</Typography>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default UserMypageCs;