import React from "react";
import NavBar from "../../components/admin/NavBar";
import SideBar from "../../components/admin/SideBar";

function DashboardAdmin() {
  return (
    <div className="relative w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="w-[1440px] bg-ghostwhite flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border relative gap-[183px] max-w-full mq450:gap-[23px] mq800:gap-[46px] mq1350:flex-wrap mq1350:gap-[91px]">
        <img
          className="mt-[-11px] ml-[-213px] h-[30px] w-[30px] relative overflow-hidden shrink-0"
          alt=""
          src="/requests-1.svg"
        />
        <img
          className="h-[30px] w-[30px] absolute !m-[0] bottom-[523px] left-[-122px] overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/storefrontoutline-1.svg"
        />
        <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden z-[2]" />
        <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden z-[3]" />
        <section className="w-[1440px] flex flex-col items-start justify-start shrink-0 max-w-full text-left text-5xl text-gray-200 font-carter-one">
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0)] bg-gray-100 flex flex-row items-start justify-start pt-[15px] px-5 pb-[11px] box-border gap-[23.1px] top-[0] z-[99] sticky max-w-full">
            <div className="h-[76px] w-[1440px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0)] bg-gray-100 hidden max-w-full" />
            <img
              className="h-[50px] w-[54.9px] relative rounded-[9px] object-cover min-h-[50px] z-[1]"
              loading="lazy"
              alt=""
              src="/untitled-design-1-1@2x.png"
            />
            <div className="w-[180.9px] flex flex-col items-start justify-start pt-[16.4px] pb-0 pr-2 pl-0 box-border">
              <a className="[text-decoration:none] self-stretch relative leading-[25.6px] text-[inherit] whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[20px]">
                NatureTrade
              </a>
            </div>
            <header className="w-[946px] flex flex-row items-end justify-between relative gap-[20px] max-w-full text-left text-2xs text-theme-color-white font-poppins">
              <img
                className="h-6 w-5 absolute !m-[0] top-[calc(50%_-_12px)] right-[237px] overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <div className="w-[418px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <img
                      className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/glyph.svg"
                    />
                  </div>
                  <input
                    className="w-full [border:none] [outline:none] bg-whitesmoke h-[39px] flex-1 rounded-[5px] flex flex-row items-start justify-start pt-2.5 px-[21px] pb-[9px] box-border font-poppins text-[13px] text-darkgray min-w-[223px] max-w-full z-[1]"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[316px] flex flex-row items-start justify-start gap-[37.5px] mq450:gap-[19px]">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/frame-1.svg"
                      />
                    </div>
                    <div className="h-[17px] w-4 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-crimson-100 w-4 h-4 z-[1]" />
                      <a className="[text-decoration:none] absolute top-[0px] left-[5px] text-[inherit] inline-block w-[7px] h-[17px] min-w-[7px] z-[2]">
                        5
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-[59px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[19px]">
                    <div className="h-[17px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-crimson-100 w-4 h-4 z-[2]" />
                      <a className="[text-decoration:none] absolute top-[0px] left-[5px] text-[inherit] inline-block w-[7px] h-[17px] min-w-[7px] z-[3]">
                        5
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/frame-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-12 flex-1 relative text-center text-sm text-black">
                  <div className="absolute top-[5px] left-[0px] w-[110px] flex flex-col items-start justify-start">
                    <div className="w-[97px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                      <div className="flex-1 relative font-semibold whitespace-nowrap z-[1]">
                        CNM02
                      </div>
                    </div>
                    <a className="[text-decoration:none] self-stretch relative text-xs text-gray-200 whitespace-nowrap z-[1]">
                      Admin
                    </a>
                  </div>
                  <img
                    className="absolute top-[0px] left-[94px] rounded-[92px] w-[47px] h-12 object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/pexelsphoto3763188-1@2x.png"
                  />
                </div>
              </div>
            </header>
          </div>
          <div className="w-[1423.2px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] max-w-full text-lg text-black font-poppins mq1125:pl-5 mq1125:box-border">
            <div className="w-[304px] flex flex-col items-end justify-start gap-[103px] mq450:gap-[51px] mq1125:hidden">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[11px] pl-0">
                <div className="h-[84px] flex-1 relative rounded-t-none rounded-br-xl rounded-bl-none bg-gray-100">
                  <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-br-xl rounded-bl-none bg-gray-100 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[10px] bg-gray-100 w-[43px] h-[65px] z-[1]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-6 gap-[13px]">
                <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-[67px] pb-[17px] relative mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <a className="[text-decoration:none] w-[130px] relative leading-[23px] font-medium text-[inherit] inline-block shrink-0 z-[1]">
                    Dashboard
                  </a>
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-84.svg"
                    />
                    <img
                      className="absolute top-[14px] left-[17px] w-7 h-[31.6px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-16@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[196px] flex flex-row items-end justify-start gap-[4px] text-gray-200">
                  <div className="flex flex-col items-end justify-start gap-[20px]">
                    <div className="flex flex-row items-start justify-end pt-0 pb-[4.9px] pr-[5px] pl-[13px]">
                      <img
                        className="h-[35.1px] w-[31px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-17@2x.png"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 pr-1 pl-[7px]">
                      <div className="flex flex-col items-start justify-start gap-[16px]">
                        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                          <img
                            className="h-10 w-8 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/frame-3.svg"
                          />
                        </div>
                        <img
                          className="w-[38px] h-[38px] relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/frame-4.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[16px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
                        <img
                          className="h-11 w-[43px] relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/frame-5.svg"
                        />
                      </div>
                      <img
                        className="w-[38px] h-[38px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/frame-6.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[36.5px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px]">
                        <div className="flex-1 relative">Orders</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5">
                            <a className="[text-decoration:none] flex-1 relative text-[inherit]">
                              Contact
                            </a>
                          </div>
                          <div className="self-stretch relative">Profile</div>
                          <div className="flex flex-row items-start justify-start py-0 px-px text-black">
                            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px]">
                              Users
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-[130px] relative leading-[23px] inline-block">
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-[calc(100%_-_312px)] text-[32px] text-theme-color-grey-body mq1125:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-[3px] text-gray-200">
                  <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq800:text-[26px]">
                    Dashboard
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border gap-[22px] max-w-full text-lg text-darkgray">
                  <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                    <div className="relative font-medium">
                      <span>Dashboard</span>
                      <span className="text-black whitespace-pre-wrap">{`   >   Home`}</span>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-theme-color-white flex flex-row items-start justify-start pt-[42px] px-[30px] pb-[30px] box-border relative max-w-full text-6xl text-black">
                    <div className="h-[223px] w-[1088px] relative rounded-3xs bg-theme-color-white hidden max-w-full z-[0]" />
                    <div className="h-[151px] w-[664px] relative inline-block shrink-0 max-w-full z-[4]">
                      <p className="m-0">
                        <span className="whitespace-pre-wrap">
                          <span className="text-[70px]">Welcome</span>
                          <span className="text-lg whitespace-pre-wrap">{`,  `}</span>
                          <span>Admin!</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="whitespace-pre-wrap">
                          <span>&nbsp;</span>
                        </span>
                      </p>
                      <p className="m-0 text-[17px]">
                        <span>
                          <span className="whitespace-pre-wrap">{`you have `}</span>
                          <span className="text-crimson-200">3</span>
                          <span className="text-black">{` Notification & `}</span>
                          <span className="text-crimson-200">7</span>
                          <span className="text-black"> Pending Approval</span>
                        </span>
                      </p>
                    </div>
                    <img
                      className="h-[214px] w-[397px] absolute !m-[0] top-[-11px] right-[14px] overflow-hidden shrink-0 z-[4]"
                      loading="lazy"
                      alt=""
                      src="/undraw-undraw-undraw-undraw-undraw-undraw-undraw-undraw-users-per-minute-1e4q-t22j-1-0ngf-1-27dv-30ul-legv-1-il1l-2-0jip-1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[39.8px] max-w-full text-27xl font-heading-heading-5 mq800:gap-[20px] mq1125:flex-wrap">
                  <div className="flex-[0.7222] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white flex flex-row items-end justify-start pt-[34px] px-[62px] pb-[43px] box-border gap-[34.1px] min-w-[225px] max-w-full z-[4] mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                    <div className="h-[172px] w-[337.2px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white hidden max-w-full" />
                    <img
                      className="h-[95px] flex-1 relative max-w-full overflow-hidden z-[5]"
                      loading="lazy"
                      alt=""
                      src="/-emoji-house-with-garden.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <b className="w-[72px] h-[45px] relative flex items-center shrink-0 z-[1] mq450:text-9xl mq800:text-18xl">
                          20
                        </b>
                        <a className="[text-decoration:none] self-stretch relative text-base text-[inherit] z-[1]">
                          Centers
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white flex flex-row items-start justify-start pt-[37px] px-[21px] pb-9 box-border gap-[31px] min-w-[225px] max-w-full z-[4] mq450:gap-[15px]">
                    <div className="h-[172px] w-[337.2px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white hidden max-w-full" />
                    <div className="h-[92.6px] w-[119px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/-illustration-user-group.svg"
                      />
                    </div>
                    <div className="w-[106px] flex flex-col items-start justify-start gap-[8px]">
                      <b className="w-[84px] h-[45px] relative flex items-center shrink-0 z-[1] mq450:text-9xl mq800:text-18xl">
                        357
                      </b>
                      <div className="self-stretch relative text-base z-[1]">
                        Cusotmers
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[6px] text-xs text-theme-color-grey-5">
                        <img
                          className="h-[16.1px] w-4 relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/icon@2x.png"
                        />
                        <div className="relative leading-[18px] inline-block min-w-[65px] z-[1]">
                          4% (30 days)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.9661] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white flex flex-row items-end justify-start pt-[37px] px-[26px] pb-[34px] box-border gap-[38.5px] min-w-[225px] max-w-full z-[4] mq450:gap-[19px] mq450:flex-1">
                    <div className="h-[172px] w-[337.2px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white hidden max-w-full" />
                    <img
                      className="h-[91px] w-[106px] relative z-[5]"
                      loading="lazy"
                      alt=""
                      src="/-illustration-revenue.svg"
                    />
                    <div className="w-[106px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <b className="w-[78.5px] h-[45px] relative flex items-center shrink-0 z-[1] mq450:text-9xl mq800:text-18xl">
                          4M
                        </b>
                        <div className="self-stretch relative text-base z-[1]">
                          Revenue
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[6px] text-xs text-theme-color-grey-5">
                          <img
                            className="h-[16.1px] w-4 relative object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/icon-1@2x.png"
                          />
                          <div className="relative leading-[18px] inline-block min-w-[71px] z-[1]">
                            25% (30 days)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white flex flex-col items-end justify-start pt-9 pb-[35px] pr-[88px] pl-[77px] box-border relative gap-[23px] max-w-full text-5xl font-heading-heading-5 mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq800:pr-[22px] mq800:box-border mq1125:pl-[38px] mq1125:pr-11 mq1125:box-border">
                  <div className="w-[1088px] h-[430px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.04)] rounded-sm bg-theme-color-white hidden max-w-full z-[0]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] left-[197px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] left-[269.8px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] left-[342.5px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] left-[415.3px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] left-[488px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] right-[453.3px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] right-[380.6px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] right-[307.8px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="w-[1.1px] h-[216px] absolute !m-[0] top-[106px] right-[89.6px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <h2 className="m-0 w-[166.8px] relative text-inherit font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-lgi">
                        Total Revenue
                      </h2>
                      <div className="w-[142.1px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-sm text-theme-color-grey-5">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[17.9px]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[12.3px]">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="w-[17.9px] h-4 relative rounded-[50%] bg-theme-color-info z-[1]" />
                            </div>
                            <div className="flex-1 relative leading-[23px] font-medium z-[1]">
                              2020
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[9px]">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="w-[17.9px] h-4 relative rounded-[50%] bg-theme-color-danger z-[1]" />
                            </div>
                            <div className="relative leading-[23px] font-medium inline-block min-w-[31.3px] z-[1]">
                              2021
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[64.5px] max-w-full text-mini text-theme-color-grey-5 mq450:gap-[16px] mq1125:flex-wrap mq1125:gap-[32px]">
                    <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                      <div className="flex flex-col items-start justify-start gap-[40px]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[34px] z-[1]">
                          $40k
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[33px] z-[1]">
                          $30k
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[33px] z-[1]">
                          $20k
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[30px] z-[1]">
                          $10k
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[29px] min-w-[532px] max-w-full text-xs text-theme-color-info mq800:min-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border max-w-full">
                        <div className="h-[237px] flex-1 relative max-w-full">
                          <div className="absolute top-[0px] left-[319.6px] bg-transparency-quantinery flex flex-row items-start justify-start pt-0 px-[13px] pb-px whitespace-nowrap z-[1]">
                            <div className="h-[22px] w-[95.1px] relative bg-transparency-quantinery hidden" />
                            <div className="relative leading-[21px] font-semibold inline-block min-w-[68.3px] z-[1]">
                              $ 38.753,00
                            </div>
                          </div>
                          <div className="absolute top-[18px] left-[0px] w-full h-[219px] text-theme-color-danger">
                            <img
                              className="absolute top-[27.5px] left-[366.1px] w-px h-[188.5px] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/vector-11.svg"
                            />
                            <div className="absolute top-[21px] left-[359.9px] rounded-[50%] bg-theme-color-info box-border w-[19.4px] h-[18px] z-[3] border-[0px] border-solid border-theme-color-white" />
                            <div className="absolute top-[26.9px] left-[0px] w-full h-[178.1px]">
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                                alt=""
                                src="/vector-14.svg"
                              />
                              <div className="absolute top-[7.8px] left-[4px] w-full h-[164.6px]">
                                <img
                                  className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                                  alt=""
                                  src="/vector-15.svg"
                                />
                                <div className="absolute top-[114.3px] left-[668.2px] w-[95.1px] flex flex-row items-start justify-start">
                                  <div className="h-[216px] w-[1.1px] absolute !m-[0] top-[-149px] right-[38px] rounded-xl bg-theme-color-grey-2 z-[1]" />
                                  <div className="h-[22px] flex-1 relative bg-transparency-danger z-[4]">
                                    <div className="absolute top-[0px] left-[0px] bg-transparency-danger w-full h-full hidden" />
                                    <div className="absolute top-[0px] left-[13.4px] leading-[21px] font-semibold inline-block w-[64.9px] min-w-[64.9px] whitespace-nowrap z-[1]">
                                      $ 12.657,00
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-[119.3px] left-[648.1px] rounded-[50%] bg-theme-color-danger box-border w-[19.4px] h-[18px] z-[5] border-[0px] border-solid border-theme-color-white" />
                              </div>
                            </div>
                            <img
                              className="absolute top-[0px] left-[657.7px] w-px h-[219px] z-[4]"
                              loading="lazy"
                              alt=""
                              src="/vector-12.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[742px] flex flex-col items-end justify-start gap-[8px] max-w-full text-mini text-theme-color-grey-5">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-2.5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border max-w-full gap-[20px] mq800:flex-wrap">
                            <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] bg-theme-color-info z-[1]" />
                            </div>
                            <div className="h-[9px] w-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="h-[9px] w-[9px] relative rounded-[50%] bg-theme-color-danger z-[1] mq800:w-full" />
                            <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                              <div className="w-[9px] h-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                            </div>
                            <div className="h-[9px] w-[9px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-theme-color-grey-4" />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[25px] z-[1]">
                            Jan
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[25px] z-[1]">
                            Feb
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[25px] z-[1]">
                            Mar
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[24px] z-[1]">
                            Apr
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[26px] z-[1]">
                            May
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[25px] z-[1]">
                            Jun
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[21px] z-[1]">
                            Jul
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[26px] z-[1]">
                            Aug
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[31px] z-[1]">
                            Sept
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[23px] z-[1]">
                            Oct
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[26px] z-[1]">
                            Nov
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[25px] z-[1]">
                            Des
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardAdmin;