import type { CSSProperties } from "react";
/** Editable section migrated from the D-j-View capture. */
export default function Footer() {
  return (
    <footer className={"section theme-dark footer"}>
      <div className={"vertical-lines animate-vertical-lines"}>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
      </div>
      <div className={"corner"}>
        <img src={"/assets/img/square-gradient-01@2x.png"} />
      </div>
      <div className={"visuals"}>
        <div className={"single-visual"}>
          <div className={"overlay overlay-visual animate-visual"}>
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
              style={
                {
                  WebkitClipPath: 'url("#hexagonShape")',
                  clipPath: 'url("#hexagonShape")',
                } as CSSProperties
              }
              className={"overlay lazy"}
              src={"/assets/img/hero-3@2x.jpg"}
            />
          </div>
        </div>
        <div className={"single-visual"}>
          <div className={"overlay overlay-visual"}>
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
              style={
                {
                  WebkitClipPath: 'url("#hexagonShape")',
                  clipPath: 'url("#hexagonShape")',
                } as CSSProperties
              }
              className={"overlay lazy"}
              src={"/assets/img/row1-3@2x.jpg"}
            />
          </div>
        </div>
      </div>
      <div className={"content"}>
        <div className={"container large top-footer"}>
          <div className={"row"}>
            <div className={"flex-col"}>
              <div className={"logo logo-light"}>
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
            <div className={"flex-col"}>
              <div className={"sub-col"}>
                <h4>
                  <span>{"Ecosystem"}</span>
                </h4>
                <ul>
                  <li>
                    <a
                      href={
                        "https://utrade.finance/liquidity?blockchain=ethereum"
                      }
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Ethereum"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://utrade.finance/liquidity?blockchain=binance"
                      }
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Binance"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://utrade.finance/liquidity?blockchain=iotex"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"IoTeX"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://utrade.finance/liquidity?blockchain=Ontology"
                      }
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Ontology"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://utrade.finance/liquidity?blockchain=avalanche"
                      }
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Avalanche"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://utrade.finance/liquidity?blockchain=polygon"
                      }
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Polygon"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://utrade.finance/liquidity?blockchain=harmony"
                      }
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Harmony"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://utrade.finance/?blockchain=ftm"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Fantom"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://icon.unifiprotocol.com/"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Icon"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://utrade.finance/?blockchain=tron"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Tron"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://utrade.finance/?blockchain=BitTorrent"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"BitTorrent"}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={"sub-col"}>
                <h4>
                  <span>{"Resources"}</span>
                </h4>
                <ul>
                  <li>
                    <a
                      href={"https://blog.unifiprotocol.com/"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Blog"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://unifiprotocol.zendesk.com/hc/en-us"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Help Desk"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://docs.unifiprotocol.com/"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Developer Docs"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://unifiprotocol.com/assets/Brand_assets.zip"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Brand Assets"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"http://eepurl.com/h4wMKn"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Newsletter"}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={"sub-col"}>
                <h4>
                  <span>{"Team"}</span>
                </h4>
                <ul>
                  <li>
                    <a
                      href={"https://unifiprotocol.com/about-us"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"About Us"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://apply.workable.com/unifi-protocol/"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Careers"}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={"sub-col"}>
                <h4>
                  <span>{"Community"}</span>
                </h4>
                <ul>
                  <li>
                    <a
                      href={"https://t.me/unifi_protocol"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Telegram"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://twitter.com/unifiprotocol"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Twitter"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://www.youtube.com/unifiprotocol"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Youtube"}
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://medium.com/unifiprotocol"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      {"Medium"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={"bottom-footer"}>
          <div className={"container large"}>
            <div className={"row"}>
              <div className={"flex-col absolute"}>
                <p className={"small"}>{"© 2022 All rights reserved."}</p>
              </div>
              <div className={"flex-col"}>
                <div className={"social-icons"}>
                  <a
                    href={"https://t.me/unifi_protocol"}
                    className={"s-icon"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <div className={"s-icon-wrap"}>
                      <svg
                        id={"icons"}
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 24 24"}
                      >
                        <path
                          d={
                            "M2.37,11.14c5.37-2.34,8.95-3.88,10.74-4.63,5.12-2.13,6.18-2.5,6.87-2.51,.15,0,.49,.04,.71,.21,.18,.15,.24,.36,.26,.5,.02,.14,.05,.47,.03,.72-.28,2.91-1.48,9.98-2.09,13.24-.26,1.38-.77,1.84-1.26,1.89-1.07,.1-1.88-.71-2.92-1.39-1.62-1.06-2.54-1.72-4.11-2.76-1.82-1.2-.64-1.86,.4-2.93,.27-.28,4.98-4.57,5.07-4.96,.01-.05,.02-.23-.09-.33-.11-.1-.26-.06-.38-.04-.16,.04-2.75,1.75-7.77,5.13-.73,.5-1.4,.75-2,.74-.66-.01-1.92-.37-2.86-.68-1.15-.37-2.07-.57-1.99-1.21,.04-.33,.5-.67,1.37-1.02h0Z"
                          }
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href={"https://twitter.com/unifiprotocol"}
                    className={"s-icon"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <div className={"s-icon-wrap"}>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 24 24"}
                      >
                        <path
                          d={
                            "M22.459,5.5a8.763,8.763,0,0,1-2.471.678A4.337,4.337,0,0,0,21.88,3.794,8.907,8.907,0,0,1,19.144,4.83,4.3,4.3,0,0,0,11.7,7.768a4.446,4.446,0,0,0,.111.983A12.194,12.194,0,0,1,2.935,4.266a4.226,4.226,0,0,0-.582,2.166,4.307,4.307,0,0,0,1.914,3.584,4.292,4.292,0,0,1-1.949-.539V9.53A4.306,4.306,0,0,0,5.77,13.753a4.342,4.342,0,0,1-1.935.075,4.318,4.318,0,0,0,4.028,2.989,8.629,8.629,0,0,1-5.339,1.842A9.277,9.277,0,0,1,1.5,18.6a12.254,12.254,0,0,0,6.613,1.932A12.159,12.159,0,0,0,20.361,8.3c0-.183,0-.367-.013-.551A8.69,8.69,0,0,0,22.5,5.516Z"
                          }
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href={"https://www.youtube.com/unifiprotocol"}
                    className={"s-icon"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <div className={"s-icon-wrap"}>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 24 24"}
                      >
                        <path
                          d={
                            "M22.062,6.927A2.631,2.631,0,0,0,20.234,5.1c-1.637-.439-8.224-.439-8.224-.439S5.439,4.652,3.785,5.1A2.631,2.631,0,0,0,1.957,6.927,27.322,27.322,0,0,0,1.5,12.009a27.287,27.287,0,0,0,.456,5.062A2.631,2.631,0,0,0,3.785,18.9c1.635.44,8.225.44,8.225.44s6.57,0,8.224-.44a2.631,2.631,0,0,0,1.828-1.827,27.364,27.364,0,0,0,.438-5.062A27.406,27.406,0,0,0,22.062,6.927ZM9.907,15.152v-6.3l5.483,3.153Z"
                          }
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href={"https://medium.com/unifiprotocol"}
                    className={"s-icon"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <div className={"s-icon-wrap"}>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 24 24"}
                      >
                        <path
                          d={
                            "M7,5.5A6.5,6.5,0,0,0,.5,12c0,.14,0,.29,0,.43A6.5,6.5,0,1,0,7,5.5Z"
                          }
                        ></path>
                        <path
                          d={
                            "M22.36,6.52c-.64,0-1.15,2.46-1.15,5.51s.51,5.51,1.15,5.51S23.5,15.07,23.5,12,23,6.52,22.36,6.52Z"
                          }
                        ></path>
                        <path
                          d={
                            "M17.34,5.84c-1.79,0-3.25,2.76-3.25,6.17s1.46,6.18,3.25,6.18,3.25-2.77,3.25-6.18S19.13,5.84,17.34,5.84Z"
                          }
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
