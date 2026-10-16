import type { CSSProperties } from "react";
/** Editable section migrated from the D-j-View capture. */
export default function Hero() {
  return (
    <header className={"section theme-lightgray home-header full-height"}>
      <div className={"top-bar"}>
        <div className={"logo logo-dark"}>
          <svg
            fill={"none"}
            height={"48"}
            viewBox={"0 0 125 48"}
            width={"125"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <path
              className={"path-dark turn-left"}
              d={
                "m26.1715 48.0001h-15.3143l-10.8572-10.8571v-15.3143l10.8572-10.8572h15.3143l10.8571 10.8572v15.3143zm-7.7143-4.5714h5.7713l8.2287-8.1714v-11.5429l-8.1715-8.2286h-11.5428l-8.22862 8.2286v11.5429l8.17142 8.1714z"
              }
              fill={"#000"}
            ></path>
            <path
              className={"path-primary turn-right"}
              d={
                "m37.1429 37.0286h-15.3143l-10.8572-10.8572v-15.3143l10.8572-10.8571h15.3143l10.8572 10.8571v15.3143zm-7.6572-4.5715h5.7715l8.1714-8.1714v-11.5428l-8.1714-8.22861h-11.5429l-8.2285 8.17141v11.5429l8.1713 8.1714z"
              }
              fill={"#38f997"}
            ></path>
            <g className={"path-dark logo-name"} fill={"#000"}>
              <path
                d={
                  "m109.486 22.0043v14.2858h4.228v-14.4h6.572v14.4h4.228v-17.4286h-10.914v-.4572c-.03-.6786.067-1.3569.286-2 .179-.5598.516-1.0558.971-1.4285.53-.4306 1.158-.7249 1.829-.8572.92-.1979 1.859-.2937 2.8-.2857.324.0131.65-.006.971-.0571.286-.0572.457-.1715.457-.4572l.115-2.1714c-.431-.1135-.871-.19-1.315-.2286-.493-.0465-.989-.0656-1.485-.0571-1.319-.0365-2.634.1569-3.886.5714-1.012.3466-1.944.8905-2.743 1.6-.699.6765-1.245 1.4949-1.6 2.4-.351.9509-.525 1.9579-.514 2.9714v.5715h-2.629v1.7143c-.019.1378-.004.2785.046.4085s.133.2451.24.3343c.232.1812.508.2993.8.3429z"
                }
              ></path>
              <path
                d={
                  "m104.571 13.7185c.007.3562-.072.7088-.228 1.0286-.157.3067-.349.5943-.572.8571-.238.2533-.532.4487-.857.5715-.347.1361-.713.2134-1.085.2285-.707-.0187-1.379-.3077-1.8787-.8073-.5-.4997-.7886-1.172-.8074-1.8784-.0126-.375.0657-.7476.2285-1.0857.132-.3206.3263-.6118.5715-.857.2451-.2452.5361-.4394.8571-.5716.329-.1301.676-.2073 1.029-.2285.374-.0128.747.0657 1.085.2285.315.143.604.336.857.5715.254.2385.449.5316.572.8571.163.3381.241.7107.228 1.0857z"
                }
              ></path>
              <path d={"m103.943 18.8042v17.6h-4.2287v-17.6z"}></path>
              <path
                d={
                  "m79.9429 18.8043v17.7143h4.3428v-12.7429c.5412-.5417 1.1572-1.0035 1.8286-1.3714.6308-.3434 1.3388-.5203 2.0571-.5143.4115-.0263.8235.0367 1.208.1847.3846.1479.7326.3773 1.0206.6725.54.7223.804 1.6143.7429 2.5143v11.2h4.2285v-11.2c.02-.9115-.1154-1.8197-.4-2.6858-.2417-.7717-.6297-1.4895-1.1428-2.1142-.5275-.5819-1.1697-1.0488-1.8857-1.3715-.8098-.3565-1.6869-.5321-2.5715-.5143-.5571-.0055-1.1131.052-1.6571.1715-.496.1111-.976.2838-1.4286.5143-.4497.1917-.8726.4414-1.2571.7428-.4063.2926-.7886.6175-1.1429.9714l-.2857-1.3714c-.0583-.2394-.1994-.4507-.3977-.597-.1983-.1462-.4423-.218-.688-.203z"
                }
              ></path>
              <path
                d={
                  "m64.3429 30.0044v-11.2572h-4.3429v11.2c.008.9094.1429 1.8134.4 2.6857.2411.7717.6297 1.4896 1.1429 2.1143.5274.5819 1.1697 1.0488 1.8857 1.3714.8097.3567 1.6868.5322 2.5714.5143.5571.0056 1.1131-.0519 1.6571-.1714.496-.111.976-.2838 1.4286-.5143.4497-.1916.8726-.4414 1.2572-.7428.4-.3429.8-.6858 1.1428-1.0286l.2857 1.4286c.072.2272.2183.4237.4149.5583.1971.1346.4331.1995.6708.1845h2.5715v-17.6h-4.2286v12.7429c-.5411.5417-1.1571 1.0036-1.8286 1.3714-.6308.3434-1.3388.5203-2.0571.5143-.4114.0263-.8234-.0366-1.208-.1846s-.7332-.3774-1.0206-.6726c-.5406-.7222-.804-1.6142-.7428-2.5142z"
                }
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className={"vertical-lines"}>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
      </div>
      <div className={"visuals"}>
        <div className={"single-visual"}>
          <div
            className={"overlay overlay-visual"}
            style={
              {
                WebkitClipPath: 'url("#hexagonShape")',
                clipPath: 'url("#hexagonShape")',
              } as CSSProperties
            }
          >
            <svg
              fill={"none"}
              height={"448"}
              viewBox={"0 0 388 448"}
              width={"388"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <defs>
                <clipPath
                  id={"hexagonShape"}
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d={"m0.5,0,0.5,0.25 v0.5 l-0.5,0.25,-0.5,-0.25 v-0.5"}
                    fill={"#000"}
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <img
              className={"overlay lazy"}
              src={"/assets/img/row1-3@2x.jpg"}
              alt={""}
            />
          </div>
        </div>
        <div className={"single-visual"}>
          <div
            className={"overlay overlay-visual animate-visual"}
            style={
              {
                WebkitClipPath: 'url("#hexagonShape")',
                clipPath: 'url("#hexagonShape")',
              } as CSSProperties
            }
          >
            <svg
              fill={"none"}
              height={"448"}
              viewBox={"0 0 388 448"}
              width={"388"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <defs>
                <clipPath
                  id={"hexagonShape"}
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d={"m0.5,0,0.5,0.25 v0.5 l-0.5,0.25,-0.5,-0.25 v-0.5"}
                    fill={"#000"}
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <img
              className={"overlay lazy"}
              src={"/assets/img/hero-1@2x.jpg"}
              alt={""}
            />
          </div>
        </div>
        <div className={"single-visual"}>
          <div
            className={"overlay overlay-visual animate-visual"}
            style={
              {
                WebkitClipPath: 'url("#hexagonShape")',
                clipPath: 'url("#hexagonShape")',
              } as CSSProperties
            }
          >
            <svg
              fill={"none"}
              height={"448"}
              viewBox={"0 0 388 448"}
              width={"388"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <defs>
                <clipPath
                  id={"hexagonShape"}
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d={"m0.5,0,0.5,0.25 v0.5 l-0.5,0.25,-0.5,-0.25 v-0.5"}
                    fill={"#000"}
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <img
              className={"overlay lazy"}
              src={"/assets/img/hero-3@2x.jpg"}
              alt={""}
            />
          </div>
        </div>
        <div className={"single-visual"}>
          <div className={"overlay overlay-visual animate-visual-moon"}>
            <img
              className={"overlay lazy"}
              src={"/assets/img/matte-black@2x.png"}
              alt={""}
            />
          </div>
        </div>
        <div className={"single-visual"}>
          <div className={"overlay overlay-visual animate-visual-moon"}>
            <img
              className={"overlay lazy"}
              src={"/assets/img/moon@2x.png"}
              alt={""}
            />
          </div>
        </div>
        <div className={"single-visual"}>
          <div
            className={"overlay overlay-visual playpauze"}
            style={
              {
                WebkitClipPath: 'url("#hexagonShape")',
                clipPath: 'url("#hexagonShape")',
              } as CSSProperties
            }
          >
            <svg
              fill={"none"}
              height={"448"}
              viewBox={"0 0 388 448"}
              width={"388"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <defs>
                <clipPath
                  id={"hexagonShape"}
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d={"m0.5,0,0.5,0.25 v0.5 l-0.5,0.25,-0.5,-0.25 v-0.5"}
                    fill={"#000"}
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <video
              className={"overlay"}
              src={"/assets/video/hexagon-1-short-edit.mp4"}
              loop
              muted
              playsInline
            ></video>
            <svg
              width={"388px"}
              height={"448px"}
              viewBox={"0 0 388 448"}
              version={"1.1"}
              xmlns={"http://www.w3.org/2000/svg"}
              xmlnsXlink={"http://www.w3.org/1999/xlink"}
            >
              <g
                id={"Page-1"}
                stroke={"none"}
                strokeWidth={"1"}
                fill={"none"}
                fillRule={"evenodd"}
              >
                <g id={"Group"}>
                  <polygon
                    id={"Path"}
                    fillRule={"nonzero"}
                    points={"194 0 388 112 388 336 194 448 0 336 0 112"}
                  ></polygon>
                  <path
                    d={"M194,111 L194,337 L96,280.5 L96,167.5 L194,111 Z"}
                    id={"Combined-Shape"}
                    fill={"#E7E6E4"}
                  ></path>
                  <path
                    d={
                      "M388,112.654 L388,336 L194,448 L194,337 L292,280.5 L292,168 L388,112.654 Z"
                    }
                    id={"Combined-Shape"}
                    fill={"#171818"}
                    fillRule={"nonzero"}
                  ></path>
                  <path
                    d={"M194,111 L292,167.5 L194,224 L96,167.5 L194,111 Z"}
                    id={"Combined-Shape"}
                    fill={"#38F997"}
                    fillRule={"nonzero"}
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={"container large"}>
        <div className={"row"}>
          <div className={"flex-col"}>
            <h4>
              <span className={"split-chars"}>{"A Blockchain Revolution"}</span>
            </h4>
            <div
              className={"lottie-wrapper-1 lottie-gradientbars"}
              data-lottie-json={"underline-01"}
            >
              <div className={"lottie-window"}></div>
            </div>
            <h1>
              <span className={"normal split-lines"}>
                {"Developing"}
                <br />
                {" Sustainable & Innovative"}
                <br />
              </span>
              <span className={"alt split-lines"}>
                {"Blockchain Solutions"}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className={"btn-row"}>
        <div className={"btn btn-normal"}>
          <a
            className={"btn-click btn-typewriter"}
            data-target={"#target-connect"}
            href={"#target-connect"}
            aria-label={"Get in touch"}
          >
            <div className={"btn-fill"}></div>
            <div className={"btn-text split-chars"}>
              <span>{"Get in touch"}</span>
            </div>
          </a>
        </div>
        <div className={"btn btn-secondary"}>
          <a
            href={"https://apply.workable.com/unifi-protocol/"}
            target={"_blank"}
            className={"btn-click btn-typewriter"}
            rel={"noopener noreferrer"}
            aria-label={"Join the movement"}
          >
            <div className={"btn-fill"}></div>
            <div className={"btn-text split-chars"}>
              <span>{"Join the movement"}</span>
            </div>
          </a>
        </div>
      </div>
      <div
        className={
          "lottie-wrapper-2 lottie-gradientbars animate-lottie-gradientbars-reverse"
        }
        data-lottie-json={"gradientbars-01"}
      >
        <div className={"lottie-window"}></div>
      </div>
    </header>
  );
}
