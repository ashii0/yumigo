function About() {
  const h1_className =
    "text-4xl text-center font-bold pb-4 text-akcharcoal/70 dark:text-akaccent-600";
  const h2_className = "text-2xl font-semibold p-3 text-akaccent-600";
  const p1_className = "text-xl text-center";
  const p2_className = "text-xl px-10 pb-2";
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-center mt-5 font-macondo text-akcharcoal/80 dark:text-akaccent-600">
        About us
      </h1>

      {/* <h1 className={h1_className}>About Us</h1> */}
      <div className="shadow-2xl mt-5 mb-1 text-center p-5 font-macondo bg-linear-to-br from-akbeige via-[#F5D2A4] to-[#D4A056]/80 dark:from-akcharcoal dark:via-akslatebluegray dark:to-[#D4A056]/80">
        <p className={p1_className}>
          Welcome to Yumigo, a modern dining destination where flavour,
          ambience, and comfort come together. Every visit - whether dining in
          or ordering from home - is designed to feel effortless, warm, and
          memorable.
        </p>
      </div>

      <div className="grid grid-cols-2 font-macondo gap-1">
        <div>
          <div className="shadow-2xl mb-1 p-5 bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80">
            <h1 className={h1_className}>Our Story</h1>
            <p className={p1_className}>
              We started Yumigo with one goal: to serve food that makes people
              happy. Every dish is made with fresh ingredients, thoughtful
              recipes, and a little extra care.
            </p>
          </div>

          <div className="shadow-2xl mb-1 p-5 bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80">
            <h1 className={h1_className}>Our Philosophy</h1>
            <p className="text-2xl text-center font-bold p-5">
              Hospitality is an emotion.
            </p>
            <p className={p1_className}>
              At Yumigo, we believe in genuine service, honest flavours, and
              creating moments worth remembering.
            </p>
          </div>

          <div
            // style={{
            //   backgroundImage: `url("/aboutus.png")`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
            className="shadow-2xl mb-1 p-5 bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80"
          >
            <h1 className={h1_className}>You’re Always Welcome</h1>
            <p className={p1_className}>
              Thank you for being a part of our story.
            </p>
            <p className={p1_className}>
              We hope Yumigo feels like your happy place.
            </p>
          </div>
        </div>

        <div>
          <div className="shadow-2xl mb-1 p-5 text-center bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80">
            <h1 className={h1_className}>Our Promise</h1>
            <p className={p1_className}>
              Good food. Friendly service. Memorable moments.
            </p>
            <p className={p1_className}>That’s what Yumigo stands for.</p>
          </div>

          <div className="shadow-2xl p-3 text-center bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80">
            <h1 className={h1_className}>What We Offer</h1>
            <h2 className={h2_className}>🍽 Dine In Comfortably</h2>
            <p className={p2_className}>
              A warm, inviting space designed for laughter, conversations, and
              delicious bites.
            </p>
            <h2 className={h2_className}>📱 Seamless Online Orders</h2>
            <p className={p2_className}>
              Fast, smooth, and delivered just the way you like it.
            </p>
            <h2 className={h2_className}>📅 Smooth Table Reservations</h2>
            <p className={p2_className}>
              Pick your date and time, and walk into a setting prepared just for
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
