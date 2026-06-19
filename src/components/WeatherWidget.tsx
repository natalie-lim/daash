import { useEffect } from "react";

export default function WeatherWidget() {
  useEffect(() => {
    const id = "weatherwidget-io-js";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "https://weatherwidget.io/js/widget.min.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="rounded-xl w-full h-full">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/39d95n75d17/philadelphia/?unit=us"
        data-label_1="PHILADELPHIA"
        data-label_2="WEATHER"
        data-days="3"
        data-theme="original"
        data-basecolor="#6D786A"
        data-width="250"
      >
        PHILADELPHIA WEATHER
      </a>
    </div>
  );

}
