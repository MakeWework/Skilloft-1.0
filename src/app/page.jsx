import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero/>
      <Footer />
    </>
  );
}
/* const Page = ({ children }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto py-4 px-2">
        <div>
          <Landingpage />
        </div>

        <section>
          <div>
            <h1>
              MakeWeWork is bridging the gap betweeen education and career
              success
            </h1>

            <p>
              Our job simulations build hands-on skill for real life jobs and a
              project tracking system to get tech ehthusiast ready for the job.
            </p>
          </div>
          <div>
            <ul>
              <li>Get registered</li>
              <li>Select a job sim</li>
              <li>Complete a project</li>
              <li>Earn a badge</li>
              <li>Get featuted and earn a chance to connect with recruiters</li>
            </ul>
            <div className="flex">
              <button>Sign up for free</button>
              <button>Learn More</button>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>Popular Categories</h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="w-40 h-30 border-4">
              <h2>IT support</h2>
              <p>[Customer experience and account management]</p>
            </div>
            <div>
              <h2>Cyber Security</h2>
              <p>[beginner level,cyber analyst]</p>
            </div>
            <div>
              <h2>Web Design</h2>
              <p>[graphics,user experience design,user interface]</p>
            </div>
            <div>
              <h2>Software Development</h2>
              <p>[Reactjs,Nextjs,C++,CSS,PostgressSQL,Python]</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col h-screen">
            <div className="flex-1 p-4 bg-[#f3e7b3]">
              <h2 className="text-xl font-bold">
                Join our community of IT innovators.
              </h2>
              <p>
                Build your portfolio,showcase your skills,and <br />
                connect with exciting entry-level IT opportunities. <br />
                Jumbstart your IT journey today!
              </p>

              <button className="py-1 px-1 text-white bg-[#28a745] rounded-lg">
                Sign up for free
              </button>
            </div>
            <div className="flex-1 p-4 bg-[#8fbe81]">
              <h2 className="text-xl font-bold">Success stories:</h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-3 p-4">
                <div className="bg-white p-6">
                  <h1 className="text-2xl font-bold">Olamide Ayomide</h1>
                  <p>Junior web developer</p>
                  <p>
                    "I landed my first dev role through MakeWeWork! The skill
                    assessments and project simulations made all the
                    difference."
                  </p>
                </div>
                <div className="bg-white p-4">
                  <h2>Sarah Chima</h2>
                  <p>Web developer</p>
                  <p></p>
                </div>
                <div className="bg-white p-4">
                  <h2>Bryan Uche</h2>
                  <p>Data analyst</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
 */
// export default Page;
