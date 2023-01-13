import HomeWrapper from "../HomeWrapper";

export default function FeedbackInfo() {
  return (
    <HomeWrapper>
      <section id="feedback">
        <div className="mx-auto flex justify-center p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdc819khoS5LDW3Wu-A1qlmSsl4F14BbY686JbNNKwwZkchOQ/viewform?embedded=true"
            width="640"
            height="1150"
          >
            Loading…
          </iframe>
        </div>{" "}
      </section>
    </HomeWrapper>
  );
}
