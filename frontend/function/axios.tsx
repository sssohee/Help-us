import { FC } from "react";
import axios from "axios";
import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import endOfDecadeWithOptions from "date-fns/esm/fp/endOfDecadeWithOptions/index.js";
import { id } from "date-fns/locale";
import { PartyModeSharp } from "@mui/icons-material";
import { parseDocumentSize } from "html2canvas/dist/types/css/layout/bounds";

// proxy
// 9080: 기부, 후기 'http://k6c106.p.ssafy.io:9080'
// 9081: 봉사 'http://k6c106.p.ssafy.io:9081'
// 9082: 회원가입, 유저 정보 'http://k6c106.p.ssafy.io:9082'
// 8000: 로그인 'http://k6c106.p.ssafy.io:8000'

// ----------------------- 9080 ------------------------------

// 기부해주세요 - 물품
// export const getDonation = async () => {
//   return await axios({
//     method: "GET",
//     url: "/8000/api/donation"
//   })
// }
export const getChatroomList = async (id) => {
  console.log("get chatroom act");
  return await axios({
    method: "GET",
    url: "/9082/chat/list",
    headers: {
      memberIdByToken: id,
    },
  });
};
// 룸이 없으면 204 반환
export const getRoomId = async (oppId, id) => {
  console.log("get roomId act");
  return await axios({
    method: "GET",
    url: `/9082/chat/enter/${oppId}`,
    headers: {
      memberIdByToken: id,
    },
  });
};
// 룸이 없으면 204 반환
export const createRoom = async (oppId, id) => {
  console.log("create room act");
  return await axios({
    method: "POST",
    url: `/9082/chat/room/${oppId}`,
    headers: {
      memberIdByToken: id,
    },
  });
};
// 채팅 갯수 반환
export const getChatCount = async (roomId) => {
  console.log("create room act");
  return await axios({
    method: "GET",
    url: `/9082/chat/counts/${roomId}`
  });
};
// 채팅 이력 반환
export const getChatLogs = async (roomId,lastMessageId,totalCount,count) => {
  console.log("create room act");
  return await axios({
    method: "GET",
    url: `/9082/chat/logs/${roomId}/${lastMessageId}/${totalCount}/${count}`
  });
};
// 메인 페이지 - 물품 기부 목록 최근 6개
export const getDonationMain = async (params) => {
  return await axios({
    method: "GET",
    url: "/8000/api/donation/main",
    params: params,
  });
};

// 물품 기부 상세 조회
export const donationDetail = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/donation/${id}`,
  });
};

// 타인이 보는 기관 페이지 - 봉사글 조회
export const getOrgpageDonation = async (params) => {
  return await axios({
    method: "GET",
    url: "/8000/api/donation",
    params: params,
  });
};

// 물품 기부 상세 페이지 댓글 조회
export const donationOrgCommentList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.comment/donation/${id}`,
    params: params,
  });
};

// 물품 기부 상세 페이지 댓글 작성
export const donationOrgComment = async (id, token, params) => {
  return await axios({
    method: "POST",
    url: "/8000/d.comment",
    headers: {
      Authorization: token,
    },
    data: params,
  });
};

// 물품 기부 상세 페이지 대댓글 작성
export const donationOrgRecomment = async (id, token, data) => {
  return await axios({
    method: "POST",
    url: "/8000/d.comment",
    headers: {
      Authorization: token,
    },
    data: data,
  });
};

// 물품 기부 상세 페이지 댓글 삭제
export const donationOrgCommentDelete = async (
  commentId,
  memberId,
  id,
  token
) => {
  return await axios({
    method: "DELETE",
    url: `/8000/d.comment/${commentId}/${memberId}`,
    headers: {
      Authorization: token,
    },
  });
};

// 후기 페이지 - 후기 목록 조회
export const getReviewList = async (params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.confirm`,
    params: params,
  });
};

// 기관 마이페이지 - 작성 후기 목록 조회
export const getMyReviewOrg = async (params) => {
  return await axios({
    method: "GET",
    url: "/8000/api/d.confirm",
    params: params,
  });
};

// 후기 상세 페이지
export const reviewDetail = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.confirm/${id}`,
  });
};

// 후기 페이지 작성
export const createReview = async (id, token, confirm, files) => {
  const newForm = new FormData();

  newForm.append(
    "confirm",
    new Blob([JSON.stringify(confirm)], { type: "application/json" })
  );

  files?.map((file) => newForm.append("files", file));
  return await axios({
    method: "POST",
    url: "/8000/d.confirm",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
    data: newForm,
  });
};

// 후기 상세 페이지 댓글 조회
export const reviewCommentList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.comment/confirm/${id}`,
    params: params,
  });
};

// 후기 상세 페이지 댓글 작성
export const reviewComment = async (id, token, data) => {
  return await axios({
    method: "POST",
    url: "/8000/d.comment",
    headers: {
      Authorization: token,
    },
    data: data,
  });
};

// 후기 상세 페이지 댓글 삭제
export const reviewCommentDelete = async (commentId, memberId, id, token) => {
  return await axios({
    method: "DELETE",
    url: `/8000/d.comment/${commentId}/${memberId}`,
    headers: {
      Authorization: token,
    },
  });
};

// 후기 상세 페이지 대댓글 작성
export const reviewRecomment = async (id, token, params) => {
  return await axios({
    method: "POST",
    url: "/8000/d.comment",
    headers: {
      Authorization: token,
    },
    data: params,
  });
};

//후원자 명단
export const getSponsorList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.apply/donation/${id}`,
    params: params,
  });
};

// 마이페이지(개인) - 송장 입력 목록 조회
export const getApplyList = async (id, params, token) => {
  return await axios({
    headers: {
      Authorization: token,
    },
    method: "GET",
    url: `/8000/d.apply/tracking/${id}`,
    params: params,
  });
};

// 마이페이지(개인) - 개인 배송완료 목록 조회
export const getUserDonationList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.apply/donation/${id}`,
    params: params,
  });
};

// 마이페이지(개인) - 후원 송장 입력
export const sendApply = async (id, token, data) => {
  // console.log(id, data);
  return await axios({
    method: "PUT",
    url: "/8000/d.apply",
    headers: {
      memberId: id,
      Authorization: token,
    },
    data: data,
  });
};

// 마이페이지(개인) - 후원 송장 수정
export const updateApply = async (id, token, data) => {
  return await axios({
    method: "PUT",
    url: "/8000/d.apply",
    headers: {
      memberId: id,
      Authorization: token,
    },
    data: data,
  });
};

// 마이페이지(기관) - 봉사 현황 조회
export const getInquiryList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/inquiry/apply/${id}`,
    params: params,
  });
};

// 마이페이지(기관) - 봉사 참석 여부
export const endInquiry = async (id, token, volunteerApplyId, status) => {
  return await axios({
    method: "PUT",
    url: `/8000/inquiry/apply/${volunteerApplyId}/${status}`,
    headers: {
      Authorization: token,
      memberId: id,
    },
  });
};

// 마이페이지(기관) - 기부글 목록 조회
export const getDonationList = async (params) => {
  return await axios({
    method: "GET",
    url: "/8000/api/donation",
    params: params,
  });
};

// 마이페이지(기관) - 배송 현황 조회
export const getDeliveryList = async (id, token, params) => {
  return await axios({
    method: "GET",
    url: `/8000/d.apply/tracking/${id}`,
    params: params,
    headers: {
      Authorization: token,
    },
  });
};

// 마이페이지(기관) - 후기 미작성 기부글 조회
export const getNoReviewDonation = async (token, id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/donation`,
    params: params,
    headers: {
      Authorization: token,
      memberId: id,
    },
  });
};

// 마이페이지(기관) - 배송중 -> 배송완료 처리
export const endDelivery = async (token, donationApplyId, id) => {
  return await axios({
    method: "PUT",
    url: `/8000/d.apply/${donationApplyId}/${id}`,
    headers: {
      Authorization: token,
      memberId: id,
    },
  });
};

// 마이페이지(기관) - 기관 물품기부 현황 조회
export const getOrgDonationList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.apply/donation/${id}`,
    params: params,
  });
};
// 기부 뉴스
export const getNewsList = async (params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/news`,
    params: params,
  });
};

// 물품 기부글 작성
export const createDonation = async (id, token, donation, files) => {
  const newForm = new FormData();

  newForm.append(
    "donation",
    new Blob([JSON.stringify(donation)], { type: "application/json" })
  );

  files?.map((file) => newForm.append("files", file));

  // newForm.append("files", files);

  return await axios({
    method: "POST",
    url: "/8000/donation",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
    data: newForm,
  });
};

//재능 기부 글 작성
export const createTalent = async (id, token, talentDonationReqDto, files) => {
  const newForm = new FormData();

  newForm.append(
    "talentDonationReqDto",
    new Blob([JSON.stringify(talentDonationReqDto)], {
      type: "application/json",
    })
  );

  files?.map((file) => newForm.append("files", file));
  return await axios({
    method: "POST",
    url: "/8000/talentDonation",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
    data: newForm,
  });
};

// 물건 기부 신청 (개인)
export const applyDonationUser = async (id, token, data) => {
  return await axios({
    method: "POST",
    url: "/8000/d.apply",
    headers: {
      Authorization: token,
      memberId: id,
    },
    data: data,
  });
};

// 기부글 마감 (기관)
export const finishDonation = async (dId, mId, token) => {
  return await axios({
    method: "DELETE",
    url: `/8000/donation/${dId}/${mId}`,
    headers: {
      Authorization: token,
    },
  });
};

// 봉사글 마감 (기관)
export const finishVolunteer = async (volunteerId, token, memberId) => {
  return await axios({
    method: "DELETE",
    url: `/8000/volunteer/end/${volunteerId}`,
    headers: {
      Authorization: token,
      memberId: memberId,
    },
  });
};

// 재능 기부 상세 페이지 댓글 조회
export const talentCommentList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/v.comment/${id}`,
    params: params,
  });
};

// 재능 기부 상세 페이지 댓글 작성
export const talentComment = async (id, token, params) => {
  return await axios({
    method: "POST",
    url: "/8000/v.comment",
    headers: {
      Authorization: token,
    },
    data: params,
  });
};

// 재능 기부 상세 페이지 댓글 삭제
export const talentCommentDelete = async (commentId, id, token) => {
  return await axios({
    method: "DELETE",
    url: `/8000/v.comment/$commentId`,
    headers: {
      memberId: id,
      Authorization: token,
    },
  });
};

// 재능 기부 상세 페이지 대댓글 작성
export const talentRecomment = async (id, token, data) => {
  return await axios({
    method: "POST",
    url: "/8000/v.comment",
    headers: {
      Authorization: token,
      memberId: id,
    },
    data: data,
  });
};

// ----------------------- 9081 ------------------------------

// 내가 기부한 전체 목록
export const getDonatonAll = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/d.apply/all/${id}`,
  });
};
// 봉사 글 작성
export const createVolunteer = async (id, token, volunteerReqDto, files) => {
  const newForm = new FormData();

  newForm.append(
    "volunteerReqDto",
    new Blob([JSON.stringify(volunteerReqDto)], { type: "application/json" })
  );

  files?.map((file) => newForm.append("files", file));

  return await axios({
    method: "POST",
    url: "/8000/volunteer",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
    data: newForm,
  });
};

// 봉사 글 상세 조회
export const volunteerDetail = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/volunteer/${id}`,
  });
};

// 봉사 신청
export const volunteerApply = async (id, token) => {
  return await axios({
    method: "PUT",
    url: `/8000/volunteer/apply/${id}`,
    headers: {
      Authorization: token,
    },
  });
};
export const volunteerApplyCheck = async (id, token) => {
  return await axios({
    method: "GET",
    url: `/8000/volunteer/apply/${id}`,
    headers: {
      Authorization: token,
    },
  });
};
// 마이페이지 유저가 완료한 봉사 목록
export const getMyvolunteerList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/volunteer/doVolunteer/${id}`,
    params: params,
  });
};
// 봉사 상세 페이지 댓글 작성
export const volunteerComment = async (id, token, params) => {
  return await axios({
    method: "POST",
    url: "/8000/v.comment",
    headers: {
      Authorization: token,
    },
    data: params,
  });
};

// 봉사 상세 페이지 댓글 조회
export const volunteerCommentList = async (id, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/v.comment/${id}`,
    params: params,
  });
};

// 봉사 상세 페이지 댓글 삭제
export const volunteerCommentDelete = async (commentId, id, token) => {
  return await axios({
    method: "DELETE",
    url: `/8000/v.comment/${commentId}`,
    headers: {
      memberId: id,
      Authorization: token,
    },
  });
};

// 메인 페이지 - 봉사글 최근 조회 4개
export const getVolunteerMain = async (params) => {
  return await axios({
    method: "GET",
    url: "/8000/api/volunteer/main",
    params: params,
  });
};

// 기관 마이페이지 - 봉사 글 조회
export const getVolunteerOrg = async (memberId, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/volunteer/mylist/${memberId}`,
    params: params,
  });
};

//봉사 현황 조회
export const getInquiryApplyList = async (params) => {
  // console.log(params.page);
  return await axios({
    method: "GET",
    url: `/8000/api/inquiry/apply/${params.id}`,
    params: params,
  });
};

// 재능기부 목록 조회
export const getTalentDonationList = async (params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/talentDonation/main`,
    params: params,
  });
};

// 재능기부 목록 검색
export const searchTalentDonationList = async (keyword, params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/talentDonation/search/${keyword}`,
    params: params,
  });
};
// 재능기부 상세 조회
export const getTalentDonationDetail = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/talentDonation/${id}`,
  });
};

// 마이페이지(개인) - 재능기부 목록 조회
export const getMyTalentDonationList = async (params) => {
  return await axios({
    method: "GET",
    url: `/8000/api/talentDonation/mylist/${params.memberId}`,
    params: params.page,
  });
};

// ----------------------- 9082 ------------------------------

// 이메일 중복 체크
export const emailCheck = async (email) => {
  return await axios({
    method: "POST",
    url: "/8000/api/member/email-check",
    data: {
      email: email,
    },
  });
};

// 이메일 인증 메일 발송
export const emailAuth = async (email) => {
  return await axios({
    method: "POST",
    url: "/8000/api/member/email-auth",
    data: {
      email: email,
    },
  });
};

// 휴대폰 인증 문자 발송
export const phoneAuth = async (phone) => {
  return await axios({
    method: "POST",
    url: "/8000/api/member/phone-auth",
    data: {
      number: phone,
    },
  });
};

// 기관 회원가입
export const signupOrg = async (data, img) => {
  //   const data = {
  //     "email": "test5@test.com",
  //     "password": "test1",
  //     "name": "c",
  //     "tel": "01010001000",
  //     "address":"test1",
  //     "info":"a",
  //     "orgZipcode":"aa",
  //     "warnCount":0,
  //     "createDate": new Date()
  // }

  const newForm = new FormData();
  newForm.append(
    "member",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );
  newForm.append("registration", img);
  // newForm.append("profile",img)

  return await axios({
    url: "/8000/api/member/org",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newForm,
  });
};

// 일반 회원가입
export const signupUser = async (data) => {
  //   const data = {
  //     "email": "test123@test.com",
  //     "password": "test1",
  //     "name": "c",
  //     "tel": "01010001000",
  //     "info":"a",
  //     "warnCount":0,
  //     "createDate": new Date()
  // }

  return await axios({
    url: "/8000/api/member/user",
    method: "POST",
    data: data,
  });
};

// 회원정보 조회
export const userDetail = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/member/${id}`,
  });
};

// 고객센터 등록
export const createCs = async (id, token, desk, files) => {
  const newForm = new FormData();

  newForm.append(
    "desk",
    new Blob([JSON.stringify(desk)], { type: "application/json" })
  );

  files?.map((file) => newForm.append("files", file));
  return await axios({
    method: "POST",
    url: "/8000/desk",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
    data: newForm,
  });
};
// 고객센터 수정
export const csCommentUpdate = async () => {};

// 고객센터 댓글 작성
export const csComment = async (id, token, params) => {
  return await axios({
    method: "POST",
    url: "/8000/comment",
    headers: {
      Authorization: token,
    },
    data: params,
  });
};

// 고객센터 댓글 삭제
export const csCommentDelete = async (commentId, memberId, id, token) => {
  return await axios({
    method: "DELETE",
    url: `/8000/comment/${commentId}/${memberId}`,
    headers: {
      Authorization: token,
    },
  });
};

// 고객센터 상세 조회(공개)
export const getCsDetail = async (id, token) => {
  return await axios({
    method: "GET",
    url: `/8000/api/desk/${id}`,
    headers: {
      Authorization: token,
    },
  });
};

// 고객센터 상세 조회(비공개)
export const getSecretCsDetail = async (id, token, memberId) => {
  return await axios({
    method: "GET",
    url: `/8000/desk/secret/${id}/${memberId}`,
    headers: {
      Authorization: token,
    },
  });
};

// 고객센터 목록 조회
export const getCSList = async (params) => {
  // console.log(params);
  return await axios({
    method: "GET",
    url: `/8000/api/desk`,
    params: params,
  });
};

// ----------------------- 8000 ------------------------------

// 로그인
export const login = async (email, pw) => {
  return await axios({
    method: "POST",
    url: "/8000/api/member/login",
    data: {
      email: email,
      password: pw,
    },
  });
};

// 마이페이지 정보 조회
export const getUserInfo = async (id) => {
  return await axios({
    method: "GET",
    url: `/8000/api/member/${id}`,
  });
};

// -------------------------관리자페이지-------------------------

// 전체 회원 조회
export const getAllUser = async (token, page) => {
  return await axios({
    method: "GET",
    url: `/8000/member/admin/${page}`,
    headers: {
      Authorization: token,
    },
  });
};

// 회원 경고
export const warning = async (token, id) => {
  return await axios({
    method: "PUT",
    url: "/8000/member/admin/warning",
    headers: {
      Authorization: token,
    },
    data: {
      memberId: id,
    },
  });
};

// 가입 대기 기관 리스트
export const waitingList = async (token, page) => {
  return await axios({
    method: "GET",
    url: `/8000/member/admin/waiting-list/${page}`,
    headers: {
      Authorization: token,
    },
  });
};

// 기관 회원가입 승인
export const approveSignup = async (token, id) => {
  return await axios({
    method: "PUT",
    url: "/8000/member/admin/permission",
    headers: {
      Authorization: token,
    },
    data: {
      memberId: id,
      permission: true,
    },
  });
};

// 회원 검색
export const searchUser = async (token, type, keyword, page) => {
  return await axios({
    method: "GET",
    url: `/8000/member/admin/search/${type}/${keyword}/${page}`,
    headers: {
      Authorization: token,
    },
  });
};

// 토큰 체크
export const tokenCheck = async () => {
  const token = localStorage.getItem("jwt");

  if (token) {
    return await axios({
      method: "GET",
      url: "/8000/member",
      headers: {
        Authorization: token,
      },
    })
      // .then(res => console.log(res))
      .catch(() => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("id");
        localStorage.removeItem("role");
        location.href = "/";
      });
  } else {
    localStorage.removeItem("jwt");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    location.href = "/";
  }
};

// 회원 수정
export const userEdit = async (token, id, intro, file, params) => {
  const data = {
    info: intro,
  };

  const newForm = new FormData();
  newForm.append(
    "member",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );
  if (file) {
    newForm.append("profile", file);
    // console.log('파일 넣음')
  }
  // console.log(file)

  return await axios({
    method: "PUT",
    url: "/8000/member/update",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
      memberId: id,
    },
    params: params,
    data: newForm,
  });
};

// ------------------------- 증명서 -----------------------------

// 증명서 발급
export const makeCerti = async (num, img) => {
  const data = {
    certificationNum: num,
  };

  const newForm = new FormData();
  newForm.append(
    "certification",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );
  newForm.append("image", img);

  return await axios({
    url: "/8000/api/certi",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newForm,
  });
};

// 증명서 조회
export const searchCerti = async (num) => {
  return await axios({
    method: "GET",
    url: `/8000/api/certi/search/${num}`,
  });
};

// 봉사 모든 내역 조회
export const getVolunteerAll = async (id) => {
  return await axios({
    method: "GET",
    url: `8000/api/volunteer/myVolunteerList/${id}`,
  });
};


// ------------------------- 기타 ------------------------------

// ocr
export const OCR = async (url) => {
  let data = {
    version: "V2",
    requestId: "string",
    timestamp: 0,
    lang: "ko",
    images: [
      {
        format: "png",
        name: "test 1",
        url: url,
      },
    ],
  };

  return await axios({
    // url:'https://bec8udp05h.apigw.ntruss.com/custom/v1/15684/b2ab54fd83e5770a4f755bd8d556a8b0815ad072db3cd9bae4a86827b995edee/general',
    url: "/ocr",

    method: "POST",
    headers: {
      Accept: "application/json",
      "X-OCR-SECRET": "ZXB2ZWZJZ3NNTnpTUVhpZlVGa3RuY0JTd0hrWGpnUW8=",
    },
    data: data,
  });
};

// ocr_file
export const OCR_file = async (img) => {
  const data_ = {
    version: "V2",
    requestId: "string",
    timestamp: 0,
    lang: "ko",
    images: [{ format: "png", name: "string" }],
  };

  const newForm = new FormData();
  newForm.append(
    "message",
    new Blob(
      [
        JSON.stringify({
          version: "V2",
          requestId: "string",
          timestamp: 0,
          images: [{ format: "png", name: "string" }],
        }),
      ],
      { type: "application/json" }
    )
  );
  newForm.append("file", img);

  return await axios({
    // url:'https://bec8udp05h.apigw.ntruss.com/custom/v1/15684/b2ab54fd83e5770a4f755bd8d556a8b0815ad072db3cd9bae4a86827b995edee/general',
    url: "/ocr",

    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      // 'Content-Type':'multipart/form-data',
      "X-OCR-SECRET": "ZXB2ZWZJZ3NNTnpTUVhpZlVGa3RuY0JTd0hrWGpnUW8=",
    },
    data: newForm,
  });
};

// ocr_kakao
export const OCR_kakao = async (img) => {
  const newForm = new FormData();
  newForm.append("image", img);

  return await axios({
    url: "https://dapi.kakao.com/v2/vision/text/ocr",

    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      // 'Content-Type':'multipart/form-data',
      Authorization: "KakaoAK 5f6cb439fd56b3078f112ab72cd15263",
    },
    data: newForm,
  });
};

// 택배사 리스트 조회 api
export const getPostCompany = async () => {
  return await axios({
    method: "GET",
    url: `https://info.sweettracker.co.kr/api/v1/companylist?t_key=${process.env.NEXT_PUBLIC_POST_TRACKER_API_KEY}`,
  });
};
