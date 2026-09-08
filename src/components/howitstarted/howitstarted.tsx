import { motion } from "framer-motion";
import "./howitstarted.css";

interface HowItStartedProps {
  onContinue?: () => void;
}

export function HowItStarted({
  onContinue,
}: HowItStartedProps) {
  return (
    <main className="story-page">
      <div className="story-glow story-glow-one" />
      <div className="story-glow story-glow-two" />

      <motion.article
        className="story-card"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        {/* Chapter */}
        <motion.p
          className="story-chapter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          CHAPTER 02
        </motion.p>

        {/* Title */}
        <motion.h1
          className="story-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          How It All Started
        </motion.h1>

        <motion.div
          className="story-heart"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 180,
          }}
        >
          ♡
        </motion.div>

        {/* Letter */}
        <div className="letter">

          {/* Opening */}
          <motion.section
            className="letter-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="letter-greeting">
              My love,
            </p>

            <p>
              If someone had told me back then that
              you would become this important to me,
              I probably would have laughed.
            </p>

            <p>
              One day, I saw your picture on Instagram
              through my friend's account... and honestly,
              I don't know what happened.
            </p>

            <p>
              Maybe it was a little crush.
              <br />
              Maybe it was something else.
              <br />
              I really couldn't understand it at that
              time. 😅
            </p>
          </motion.section>

          {/* Stranger */}
          <motion.section
            className="letter-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I first knew you as a stranger.
              <br />
              Just my friend's cousin whom I had
              heard about.
            </p>

            <p>
              And then, my friend did something
              completely unexpected, who apparently
              had decided to become the director of
              our love story without asking either
              of us. 😂
            </p>
          </motion.section>

          {/* Accidental beginning */}
          <motion.section
            className="letter-section funny-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <div className="little-note">
              <p>
                That accidental like on your post?
              </p>

              <strong>
                Not me. 😂
              </strong>
            </div>

            <div className="little-note">
              <p>
                That request sent from my account?
              </p>

              <strong>
                Also not me. 😂
              </strong>
            </div>

            <p className="center-line">
              But somehow...
              <br />
              <span>
                you accepted it.
              </span>
            </p>
          </motion.section>

          {/* First conversation */}
          <motion.section
            className="letter-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <p>
              And then...
              <br />
              <span className="emphasis">
                you started the conversation.
              </span>
            </p>

            <p>
              Maybe that was the first little piece
              of fate in our story.
            </p>

            <p>
              My friend accidentally created the
              opportunity,
              <br />
              and you unknowingly took it forward.
            </p>

            <p>
              And somehow, that one conversation
              became another...
              <br />
              and another...
              <br />
              until two years had passed.
            </p>
          </motion.section>

          {/* Two years */}
          <motion.section
            className="letter-section two-years"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <p>
              But those two years weren't love.
              <br />
              At least, we didn't call it that.
            </p>

            <div className="short-lines">
              <p>We just talked.</p>
              <p>We laughed.</p>
              <p>We shared things.</p>
              <p>We became comfortable with each other.</p>
            </div>
          </motion.section>

          {/* Pondy */}
          <motion.section
            className="letter-section pondy-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <p>
              And in between all of that,
              I kept telling you,
            </p>

            <div className="quote">
              “Come to Pondy.”
            </div>

            <p className="small-funny">
              So many times. 😂
            </p>

            <p className="never-came">
              And you never came.
            </p>

            <p>
              After a while, I honestly stopped
              expecting you to.
            </p>
          </motion.section>

          {/* Losing hope */}
          <motion.section
            className="letter-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I started thinking maybe this was all
              our story was going to be.
            </p>

            <p>
              Two people talking from two different
              places,
              <br />
              slowly becoming strangers again someday.
            </p>

            <p>
              I even started thinking that one day
              our conversations would just end,
              <br />
              and you would go back to being the
              stranger I first knew.
            </p>
          </motion.section>

          {/* The call */}
          <motion.section
            className="letter-section turning-point"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <span className="turning-label">
              AND THEN...
            </span>

            <p>
              After two whole years,
              <br />
              when I had almost completely lost hope...
            </p>

            <p>
              I called you again.
            </p>

            <p>
              Not seriously.
              <br />
              Not with any expectation.
            </p>

            <p className="funny-highlight">
              Just for fun. 😂
            </p>
          </motion.section>

          {/* April 4 */}
          <motion.section
            className="letter-section april-section"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{ duration: 0.8 }}
          >
            <p className="date-label">
              APRIL 4TH · AROUND 1 AM
            </p>

            <h2>
              You suddenly said...
            </h2>

            <div className="yes-word">
              YES.
            </div>

            <p>
              You were coming.
            </p>

            <p className="april-five">
              April 5th, 2026.
            </p>
          </motion.section>

          {/* Everything changed */}
          <motion.section
            className="letter-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I don't think you realised it then,
              <br />
              but that one little “yes”
              <br />
              changed everything.
            </p>

            <p>
              You took the first step to come and see me.
              <br />
              You travelled all that way when you
              really didn't have to.
            </p>

            <p className="grateful">
              And for that,
              <br />
              I will always be grateful. ❤️
            </p>
          </motion.section>

          {/* Suspicion */}
          <motion.section
            className="letter-section suspicion-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Somewhere in my mind, I already had
              a feeling about why you were coming.
            </p>

            <div className="suspicion-note">
              <span>👀</span>

              <p>
                “He doesn't need to travel all this way
                just to meet me as a friend.”
              </p>
            </div>

            <p>
              I had my own little suspicions.
            </p>
          </motion.section>

          {/* The proposal */}
          <motion.section
            className="letter-section proposal-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              And honestly, I had even prepared myself
              before coming.
            </p>

            <p>
              I had already decided...
            </p>

            <div className="decision">
              <span>
                If he proposes,
              </span>

              <strong>
                I'm going to say NO.
              </strong>
            </div>

            <p>
              I had my reasons.
              <br />
              I had my doubts.
              <br />
              I had prepared my mind for that moment.
            </p>
          </motion.section>

          {/* Say yes */}
          <motion.section
            className="letter-section say-yes-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              And then...
              <br />
              you actually did it.
            </p>

            <p>
              And somehow, the moment you said it,
              <br />
              everything I had prepared in my head
              just disappeared.
            </p>

            <p>
              My mind went completely blank.
            </p>

            <div className="no-doubts">
              <p>There was no list of reasons.</p>
              <p>No doubts.</p>
              <p>No overthinking.</p>
            </div>

            <p>
              Just one little thought remained:
            </p>

            <div className="say-yes">
              “Say yes.”
            </div>

            <div className="yes-heart">
              So I did. ❤️
            </div>
          </motion.section>

          {/* Funny part */}
          <motion.section
            className="letter-section funny-ending"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              And maybe that's the funniest part
              of our story.
            </p>

            <p>
              I spent all that time preparing myself
              to say <strong>no</strong>...
            </p>

            <p className="heart-ignored">
              and then my heart completely ignored
              the plan. 😂❤️
            </p>
          </motion.section>

          {/* Trust */}
          <motion.section
            className="letter-section trust-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Since that day, I've trusted you in a way
              you already know.
            </p>

            <div className="trust-lines">
              <p>I believe in you.</p>
              <p>I believe in your intentions.</p>
              <p>
                And I believe in you even when the
                situation isn't perfect.
              </p>
            </div>

            <p className="no-proof">
              You never have to prove yourself to me.
            </p>
          </motion.section>

          {/* Always */}
          <motion.section
            className="letter-section always-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Because I want you to know something
              very clearly:
            </p>

            <div className="believe">
              I believe you.
            </div>

            <p>
              And I will always support you.
            </p>

            <p>
              Not only when things are easy.
              <br />
              Not only when everything is going right.
            </p>

            <div className="always">
              <span>Always.</span>
              <span>In every situation.</span>
              <span>In every way.</span>
            </div>

            <div className="always-big">
              Alwaysss.
              <br />
              And in all waysssss. ❤️
            </div>
          </motion.section>

          {/* Looking back */}
          <motion.section
            className="letter-section ending-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.8 }}
          >
            <p>
              So when I look back now,
              <br />
              I don't think our story started on
              April 5th.
            </p>

            <div className="maybe-list">
              <p>
                Maybe it started with a picture.
              </p>

              <p>
                Maybe with an accidental like. 😂
              </p>

              <p>
                Maybe with a friend sending a request
                she had absolutely no business sending.
              </p>

              <p>
                Maybe it started with one simple
                conversation.
              </p>
            </div>

            <p>
              I don't really know.
            </p>
          </motion.section>

          {/* Final */}
          <motion.section
            className="letter-section final-section"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{ duration: 0.9 }}
          >
            <p>
              But I know this...
            </p>

            <div className="final-story">
              <p>
                Two strangers somehow found their way
                into each other's lives,
              </p>

              <p>
                spent two years talking without knowing
                where it would go,
              </p>

              <p>
                and then, on one random night at 1 AM...
              </p>
            </div>

            <div className="final-yes">
              you said yes.
            </div>

            <p>
              And the next day,
              <br />
              you came to me.
            </p>

            <div className="final-line">
              Maybe that's where our real story began.
            </div>

            <div className="final-heart">
              ❤️🌹
            </div>
          </motion.section>

        </div>

        {/* Continue */}
        <motion.div
          className="story-continue"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="continue-line" />

          <p>
            And this...
            <br />
            was only the beginning.
          </p>

          <motion.button
            type="button"
            className="story-button"
            onClick={onContinue}
            whileTap={{
              scale: 0.97,
            }}
          >
            Continue our story
            <span>→</span>
          </motion.button>
        </motion.div>

      </motion.article>
    </main>
  );
}