import { Page } from "../components/Page";
import { ProjectCard } from "../components/project/ProjectCard";
import { TOKENS } from "../components/theme/token";
import { TimelineRoad } from "../components/project/TimelineRoad";
import { ShineText } from "../components/typography/ShineText";

export default function Projects() {
  return (
    <div className="min-h-screen" style={{ background: TOKENS.colors.bg }}>
      <Page maxW="max-w-[1400px] xl:max-w-[1600px]" className="px-3 sm:px-6">
        <div className="grid items-start gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <TimelineRoad />
          <div>
            <section className="mt-2" id="sec-github">
              <h3
                className="text-2xl font-bold tracking-tight select-none"
                style={{
                  background: "linear-gradient(90deg, #D6A26C, #C47A3D)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 12px rgba(196, 122, 61, 0.25)",
                }}
              >
                <ShineText text="성장 과정" />
              </h3>
              <p className="mt-1 text-[14px] text-white/60">
                GitHub Page에서 시작해, 쇼핑몰/어드민, 프로젝트 소개 사이트까지
                확장했습니다.
              </p>

              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 min-[1400px]:grid-cols-2">
                <ProjectCard
                  title="GitHub Pages (초기)"
                  subtitle="첫 개인 사이트"
                  tags={["HTML/CSS", "JavaScript"]}
                  desc="가장 볼품없던 출발점. 하지만 ‘배포 → 피드백 → 개선’ 루프를 시작하게 해준 중요한 첫 걸음."
                  demoHref="https://kyung-bok.github.io/"
                  codeHref="https://github.com/kyung-bok/kyung-bok.github.io"
                  thumbnail="images/github.JPG"
                />

                <section id="sec-bok" className="contents" />

                <ProjectCard
                  title="Bok Project"
                  subtitle="개인 미니 프로젝트"
                  tags={["React", "UI 실험"]}
                  desc="첫 리액트 배포 사이트"
                  demoHref="https://bok-project.vercel.app"
                  codeHref="https://github.com/KYUNG-BOK/bok_project"
                  thumbnail="images/bokproject.JPG"
                />

                <section id="sec-ozflix" className="contents" />

                <ProjectCard
                  title="OZFLIX"
                  subtitle="영화 검색/무한스크롤 실습"
                  tags={["React", "TMDB", "Infinite Scroll"]}
                  desc="디바운스 검색, 반응형 상세/목록, 사용자 찜 목록까지."
                  demoHref="https://ozflix.vercel.app"
                  codeHref="https://github.com/KYUNG-BOK/react_mini"
                  thumbnail="images/ozflix.JPG"
                />
              </div>
            </section>

            <section className="mt-10" id="sec-ozshop">
              <h3
                className="text-2xl font-bold tracking-tight select-none"
                style={{
                  background: "linear-gradient(90deg, #EBC592, #C47A3D)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 12px rgba(196, 122, 61, 0.35)",
                }}
              >
                <ShineText text="대표 작업" />
              </h3>
              <p className="mt-1 text-[14px] text-white/60">
                실제 서비스 맥락에서 문제를 해결한 결과물들입니다.
              </p>

              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 min-[1400px]:grid-cols-4">
                <ProjectCard
                  title="OZ Shop"
                  subtitle="메인 프로젝트 — 커머스"
                  tags={["React", "JSX", "TailwindCSS", "Motion"]}
                  desc="관리자 페이지, 반응형 상세 페이지, 소셜 로그인 등 사용자 흐름을 고려한 UX 구성."
                  demoHref="https://ozshop-kappa.vercel.app"
                  codeHref="https://github.com/Wizard-Of-Oz-b/Wizard-Of-Oz-FE05"
                  thumbnail="images/ozshop.JPG"
                />

                <section id="sec-wiz" className="contents" />

                <ProjectCard
                  title="Wizards of Oz"
                  subtitle="메인 프로젝트 소개"
                  tags={["Vercel", "팀 소개", "디자인 시스템"]}
                  desc="프로젝트 소개/팀 페이지 제작."
                  demoHref="https://wizardofoz-seven.vercel.app"
                  codeHref="#"
                  thumbnail="images/wizardofoz.JPG"
                />

                <section id="sec-admin" className="contents" />

                <ProjectCard
                  title="StudyHub Admin"
                  subtitle="익스턴십 관리자 페이지"
                  tags={["React 19", "TypeScript", "TanStack Query"]}
                  desc="팀 리드. 로그인, 리뷰 관리, 지원 내역 페이지 구현."
                  demoHref="https://admin.ozcoding.site"
                  codeHref="https://github.com/OZ-Coding-School/oz_externship_fe_03_team4"
                  thumbnail="images/studyhub.JPG"
                />

                <section id="sec-hub-landing" className="contents" />

                <ProjectCard
                  title="StudyHub (소개)"
                  subtitle="프로젝트 소개/랜딩"
                  tags={["Vercel", "TypeScript", "GSAP"]}
                  desc="익스턴십 프로젝트 및 팀 소개 랜딩 제작."
                  demoHref="https://ozex3-fe4.vercel.app"
                  codeHref="#"
                  thumbnail="images/ex3.JPG"
                />
              </div>
            </section>
          </div>
        </div>
      </Page>
    </div>
  );
}
