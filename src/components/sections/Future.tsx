import type { CSSProperties } from "react";
/** Editable section migrated from the D-j-View capture. */
export default function Future() {
  return (
    <section className={"section theme-white home-future"}>
      <div className={"vertical-lines animate-vertical-lines"}>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line"}></div>
      </div>
      <div className={"container medium lottie-timeline-text"}>
        <div className={"row"}>
          <div className={"flex-col"}>
            <h4 className={"animate-typewriter"}>
              <span className={"split-chars"}>{"About us"}</span>
            </h4>
            <h2 className={"animate-split-lines"}>
              <span className={"normal split-lines"}>
                {
                  "We have the passion, fortitude, and ability to be disruptive."
                }
              </span>
            </h2>
            <div
              className={
                "lottie-wrapper-1 lottie-gradientbars animate-lottie-gradientbars"
              }
              data-lottie-json={"underline-03"}
            >
              <div className={"lottie-window"}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
