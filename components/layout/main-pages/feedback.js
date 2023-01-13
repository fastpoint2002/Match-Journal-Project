import HomeWrapper from "../HomeWrapper";
import Link from "next/link";

export default function FeedbackInfo() {
  return (
    <HomeWrapper>
      <section id="feedback">
        <div className="mx-auto flex flex-col-reverse justify-center p-6 lg:flex-row">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdc819khoS5LDW3Wu-A1qlmSsl4F14BbY686JbNNKwwZkchOQ/viewform?embedded=true"
            width="640"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>{" "}
      </section>
    </HomeWrapper>
  );
}
