import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BirthdayWish from "../birthdaywish/BirthdayWish";
import "./accessgranted.css";

interface AccessGrantedProps {
  onBack?: () => void;
}

export function AccessGranted({
  onBack,
}: AccessGrantedProps) {
  const [timelineStarted, setTimelineStarted] = useState(false);
  const [timelineFinished, setTimelineFinished] = useState(false);
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);

  useEffect(() => {
    if (!timelineStarted) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTimelineFinished(true);
    }, 8500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [timelineStarted]);

  const startTimeline = () => {
    setTimelineFinished(false);
    setTimelineStarted(true);
  };

  if (showBirthdayWish) {
    return <BirthdayWish />;
  }

  return (
    <main className="access-page">
      <div className="access-glow access-glow-one" />
      <div className="access-glow access-glow-two" />

      <div className="access-particles" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>♡</span>
        <span>✧</span>
        <span>♡</span>
      </div>

      {/* Back Button */}
      <motion.button
        type="button"
        className="access-back-button"
        onClick={onBack}
        initial={{
          opacity: 0,
          x: -15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span>←</span>
        Back
      </motion.button>

      {/* Top Button */}
      <motion.button
        type="button"
        className="access-top-button"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        whileTap={{
          scale: 0.92,
        }}
        aria-label="Go to top"
      >
        ↑
      </motion.button>

      {/* Main Card */}
      <motion.section
        className="access-card"
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* Chapter */}
        <motion.p
          className="access-chapter"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          CHAPTER 03
        </motion.p>

        {/* Title */}
        <motion.h1
          className="access-title"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
          }}
        >
          The Little Moments
          <br />
          After Us Began
        </motion.h1>

        {/* Heart */}
        <motion.div
          className="access-lock"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 180,
          }}
        >
          ♡
        </motion.div>

        {/* =========================
            INTRO
        ========================= */}

        {!timelineStarted && (
          <motion.div
            className="access-intro"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            <p className="intro-opening">
              We talked for so long about{" "}
              <span>meeting.</span>
            </p>

            <p>
              <span>We waited.</span>
              <br />
              <span>We planned.</span>
              <br />
              We wondered when it would finally happen.
            </p>

            <p className="intro-april">
              And then came{" "}
              <strong>April 5th.</strong>
            </p>

            <p>
              <span className="highlight-text">
                Our first meeting.
              </span>
              <br />
              The day something that started with messages
              <br />
              became <em>something real.</em>
            </p>

            <p>
              And after that day,
              <br />
              there were so many little moments between us...
            </p>

            <p>
              conversations, random pictures,
              <br />
              silly moments, and memories
              <br />
              that slowly became{" "}
              <em className="ours-text">ours.</em>{" "}
              ❤️
            </p>

            <p className="intro-final">
              These are some of those moments.{" "}
              <span>📸</span>
            </p>

            <motion.button
              type="button"
              className="open-file-button memory-start-button"
              onClick={startTimeline}
              whileTap={{
                scale: 0.96,
              }}
              whileHover={{
                scale: 1.03,
              }}
            >
              <span>GO THROUGH OUR MEMORIES</span>
              <span>♡</span>
            </motion.button>
          </motion.div>
        )}

        {/* =========================
            MEMORY TRANSITION
        ========================= */}

        {timelineStarted && (
          <motion.div
            className="memory-experience"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            {/* Loader */}
            {!timelineFinished && (
              <motion.div
                className="memory-loader"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <motion.div
                  className="loader-heart"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ♡
                </motion.div>

                <p className="loader-label">
                  GATHERING OUR LITTLE MOMENTS
                </p>

                <p className="loader-text">
                  Some memories are written down.
                  <br />
                  Some are captured in photographs.
                  <br />
                  And some...
                  <br />
                  <span>just stay in the heart.</span>
                </p>

                <div className="loader-progress">
                  <motion.div
                    className="loader-progress-bar"
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 8.2,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <motion.p
                  className="loader-small"
                  animate={{
                    opacity: [0.35, 0.8, 0.35],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  OUR STORY • 001
                </motion.p>
              </motion.div>
            )}

            {/* =========================
                TIMELINE
            ========================= */}

            {timelineFinished && (
              <motion.div
                className="memory-timeline"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
              >
                <div className="timeline-heading">
                  <span>OUR STORY</span>
                  <small>MEMORIES • 001</small>
                </div>

                <div className="timeline">

                  {/* =========================
                      MEMORY 01
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-left no-photo"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                    }}
                  >
                    <div className="timeline-dot">
                      ❤️
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        APRIL 5TH
                      </span>

                      <h3>
                        The Day I'll Remember
                      </h3>

                      <p className="memory-text">
                        We don't have a picture from that day.
                        <br />
                        No note. No little proof that it happened.
                      </p>

                      <p className="memory-text">
                        But I don't think I'll ever need one.
                      </p>

                      <p className="memory-text">
                        April 5th wasn't the perfect day.
                        <br />
                        It wasn't some picture-perfect beginning.
                      </p>

                      <p className="memory-text">
                        But it was the day something inside me
                        <br />
                        changed again.
                      </p>

                      <p className="memory-text">
                        A little bit of hope came back.
                        <br />
                        The doubts I had carried for so long
                        <br />
                        slowly started disappearing.
                      </p>

                      <p className="memory-text">
                        The reasons behind every{" "}
                        <em>no</em>
                        <br />
                        didn't feel as heavy anymore.
                      </p>

                      <p className="memory-highlight">
                        And somehow, after finally seeing you,
                        <br />
                        I knew this was a moment
                        <br />
                        I would remember even without a photograph. ❤️
                      </p>
                    </div>
                  </motion.div>

                  {/* =========================
                      MEMORY 02
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-right"
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 1.1,
                      duration: 0.8,
                    }}
                  >
                    <div className="timeline-dot">
                      💍
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        OUR SECOND MEET
                      </span>

                      <h3>
                        The Surprise I Never Saw Coming
                      </h3>

                      <p className="memory-text">
                        On our second meet,
                        <br />
                        you proposed to me with a ring
                        <br />
                        at the temple.
                      </p>

                      <p className="memory-text">
                        And honestly...
                        <br />
                        I was completely blank. 😂
                      </p>

                      <p className="memory-text">
                        I was so surprised.
                        <br />
                        For a moment,
                        <br />
                        my brain just stopped working.
                      </p>

                      <p className="memory-highlight">
                        I was probably thinking,
                        <br />
                        <em>"Wait... what is happening?"</em>
                      </p>

                      {/* PHOTO 01 */}
                      <div className="memory-photo-card">
                        <div className="memory-photo-placeholder">
                          <span>📸</span>
                          <small>SECOND MEET • 01</small>
                        </div>
                      </div>

                      <p className="memory-text">
                        And somehow,
                        <br />
                        even now,
                        <br />
                        I still haven't completely recovered
                        <br />
                        from that moment. ❤️
                      </p>

                      {/* PHOTO 02 */}
                      <div className="memory-photo-card">
                        <div className="memory-photo-placeholder">
                          <span>📸</span>
                          <small>SECOND MEET • 02</small>
                        </div>
                      </div>

                      <p className="memory-text">
                        After that,
                        <br />
                        we went to a café
                        <br />
                        and spent some time together.
                      </p>

                      <p className="memory-highlight">
                        Nothing extravagant.
                        <br />
                        Just us,
                        <br />
                        making another little memory.
                      </p>
                    </div>
                  </motion.div>

                  {/* =========================
                      MEMORY 03
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-left"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 2.1,
                      duration: 0.8,
                    }}
                  >
                    <div className="timeline-dot">
                      ♡
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        OUR THIRD MEET
                      </span>

                      <h3>
                        When You Started Feeling Like Home
                      </h3>

                      <p className="memory-text">
                        By our third meet,
                        <br />
                        something had changed between us.
                      </p>

                      <p className="memory-text">
                        We were becoming comfortable.
                        <br />
                        Not trying too hard.
                        <br />
                        Not wondering what to say.
                      </p>

                      <p className="memory-highlight">
                        Just comfortable being around each other.
                      </p>

                      {/* PHOTO 01 */}
                      <div className="memory-photo-card">
                        <div className="memory-photo-placeholder">
                          <span>📸</span>
                          <small>THIRD MEET • 01</small>
                        </div>
                      </div>

                      <p className="memory-text">
                        And somewhere along the way,
                        <br />
                        I started realizing something...
                      </p>

                      <p className="memory-highlight">
                        I had started missing you
                        <br />
                        when I couldn't see you.
                      </p>

                      {/* PHOTO 02 */}
                      <div className="memory-photo-card">
                        <div className="memory-photo-placeholder">
                          <span>📸</span>
                          <small>THIRD MEET • 02</small>
                        </div>
                      </div>

                      <p className="memory-text">
                        Maybe that was when
                        <br />
                        you started becoming
                        <br />
                        a little more than just
                        <br />
                        someone I loved talking to. ❤️
                      </p>
                    </div>
                  </motion.div>

                  {/* =========================
                      MEMORY 04
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-right"
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 3.2,
                      duration: 0.8,
                    }}
                  >
                    <div className="timeline-dot">
                      ✦
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        ANOTHER LITTLE CHAPTER
                      </span>

                      <h3>
                        Another Day With You
                      </h3>

                      <p className="memory-text">
                        And then came another day with you.
                      </p>

                      <p className="memory-text">
                        Another little piece
                        <br />
                        of our story.
                      </p>

                      {/* PHOTO 01 */}
                      <div className="memory-photo-card">
                        <div className="memory-photo-placeholder">
                          <span>📸</span>
                          <small>ANOTHER MEMORY • 01</small>
                        </div>
                      </div>

                      <p className="memory-text">
                        Nothing needed to be extraordinary.
                      </p>

                      <p className="memory-highlight">
                        Somehow,
                        <br />
                        just being together
                        <br />
                        was becoming enough. ❤️
                      </p>

                      {/* PHOTO 02 */}
                      <div className="memory-photo-card">
                        <div className="memory-photo-placeholder">
                          <span>📸</span>
                          <small>ANOTHER MEMORY • 02</small>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* =========================
                      MEMORY 05
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-left travel-memory"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 4.3,
                      duration: 0.8,
                    }}
                  >
                    <div className="timeline-dot">
                      🚗
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        THAT LITTLE MOMENT
                      </span>

                      <h3>
                        The Wish I'll Never Forget
                      </h3>

                      <p className="memory-text">
                        I came to your place to pick you up,
                        <br />
                        and we were on our way to Rock Beach.
                      </p>

                      <p className="memory-text">
                        It was supposed to be just
                        <br />
                        another little moment in our day.
                      </p>

                      <div className="travel-symbol">
                        <span>♡</span>
                        <span>✦</span>
                        <span>♡</span>
                      </div>

                      <p className="memory-highlight">
                        But then you hugged me
                        <br />
                        and wished me.
                      </p>

                      <p className="memory-text">
                        And somehow,
                        <br />
                        that hug made the whole world
                        <br />
                        feel a little quieter.
                      </p>

                      <p className="memory-text">
                        There was something about
                        <br />
                        being held by you
                        <br />
                        and hearing your wish
                        <br />
                        that made me feel so deeply loved.
                      </p>

                      <p className="memory-text">
                        I don't think you knew
                        <br />
                        how much that moment would stay with me.
                      </p>

                      <p className="memory-highlight">
                        Because even now,
                        <br />
                        when I think about all the wishes
                        <br />
                        I've ever received,
                        <br />
                        <strong>
                          my heart still goes back to that one.
                        </strong>
                      </p>

                      <p className="memory-text">
                        Not because it was grand.
                        <br />
                        Not because it was perfectly planned.
                      </p>

                      <p className="memory-highlight">
                        But because it came from you.
                      </p>

                      <div className="special-memory-line">
                        THE BEST WISH I'VE EVER RECEIVED
                      </div>

                      <p className="memory-text">
                        Some moments don't need photographs
                        <br />
                        to be remembered forever.
                      </p>

                      <p className="memory-highlight final-memory-line">
                        I will carry that hug with me
                        <br />
                        for a very, very long time. ❤️
                      </p>
                    </div>
                  </motion.div>

                  {/* =========================
                      MEMORY 06
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-right birthday-memory"
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 5.5,
                      duration: 0.8,
                    }}
                  >
                    <div className="timeline-dot birthday-dot">
                      🎂
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        MY BIRTHDAY
                      </span>

                      <h3>
                        The Birthday You Made Special
                      </h3>

                      <p className="memory-text">
                        And then came my birthday...
                      </p>

                      <p className="memory-text">
                        I'm not really someone who usually feels
                        <br />
                        birthdays have to be something special.
                      </p>

                      <p className="memory-highlight">
                        But you made this one different.
                      </p>

                      <p className="memory-text">
                        You stayed in Pondy
                        <br />
                        the night before my birthday,
                        <br />
                        even though the plan was simple...
                      </p>

                      <p className="memory-text">
                        We were going to watch
                        <br />
                        the sunrise together.
                      </p>

                      <p className="memory-highlight">
                        And we did. 🌅
                      </p>

                      {/* SUNRISE PHOTO */}
                      <div className="memory-photo-card birthday-photo-card">
                        <div className="memory-photo-placeholder birthday-photo-placeholder">
                          <span>🌅</span>
                          <small>
                            ROCK BEACH • MY BIRTHDAY
                          </small>
                        </div>
                      </div>

                      <p className="memory-text">
                        Standing there at Rock Beach,
                        <br />
                        watching the sunrise on my birthday
                        <br />
                        with you...
                      </p>

                      <p className="memory-highlight">
                        that moment felt so incredibly
                        <br />
                        special to me.
                      </p>

                      <p className="memory-text">
                        You made me feel special
                        <br />
                        in a way I wasn't expecting.
                      </p>

                      <p className="memory-text">
                        You gave me presents.
                        <br />
                        You put effort into making
                        <br />
                        those two days feel like
                        <br />
                        they were truly mine.
                      </p>

                      <p className="memory-highlight">
                        And honestly...
                        <br />
                        you made my birthday
                        <br />
                        feel worthy of being remembered.
                      </p>

                      <p className="memory-text">
                        Maybe that's why,
                        <br />
                        when I think about that birthday,
                        <br />
                        I don't think about the presents first.
                      </p>

                      <p className="memory-text">
                        I think about the sunrise.
                        <br />
                        I think about you.
                        <br />
                        I think about those two days.
                      </p>

                      <p className="birthday-ending">
                        Best birthday ever. ❤️
                      </p>
                    </div>
                  </motion.div>

                  {/* =========================
                      FINAL MEMORY
                  ========================= */}

                  <motion.div
                    className="timeline-item timeline-item-left final-birthday-entry"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 6.8,
                      duration: 0.9,
                    }}
                  >
                    <div className="timeline-dot final-timeline-dot">
                      ❤️
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        TODAY · YOUR BIRTHDAY
                      </span>

                      <h3>
                        If Only I Could Be There
                      </h3>

                      <p className="memory-text">
                        Today is your birthday...
                      </p>

                      <p className="memory-text">
                        And somehow, on a day when
                        <br />
                        I wanted to be closest to you,
                        <br />
                        I'm here, miles away.
                      </p>

                      <p className="memory-text">
                        I keep thinking about
                        <br />
                        how you wished me that day,
                        <br />
                        how you made even a simple moment
                        <br />
                        feel so special.
                      </p>

                      <p className="memory-highlight">
                        And today,
                        <br />
                        I wished I could do the same for you.
                      </p>

                      <p className="memory-text">
                        I really wanted to be there.
                        <br />
                        To see you smile.
                        <br />
                        To be beside you for your birthday.
                      </p>

                      <p className="memory-highlight">
                        But I couldn't...
                      </p>

                      <p className="memory-text">
                        And honestly,
                        <br />
                        that is the one thing
                        <br />
                        I wish I could change about today.
                      </p>

                      <p className="sorry-text">
                        I'm sorry, my love. ❤️
                      </p>

                      <p className="memory-text">
                        My heart wanted to be there with you.
                        <br />
                        More than I can put into words.
                      </p>

                      <p className="memory-text">
                        But some distances
                        <br />
                        are not ours to choose.
                      </p>

                      <p className="memory-highlight">
                        So for now,
                        <br />
                        I'll just hold onto the thought
                        <br />
                        of being there with you...
                      </p>

                      <p className="memory-final-bridge">
                        even when I couldn't actually be there.
                      </p>

                      <div className="next-page-introduction">
                        <span>♡</span>
                        <p>
                          And there's something
                          <br />
                          I've been wanting to tell you...
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* =========================
                    END OF TIMELINE
                ========================= */}

                <motion.div
                  className="timeline-ending"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 7.8,
                    duration: 0.9,
                  }}
                >
                  <div className="finished-line" />

                  <div className="finished-heart">
                    ♡
                  </div>

                  <h2>
                    SOME MOMENTS
                    <br />
                    STAY FOREVER
                  </h2>

                  <p>
                    Different days.
                    <br />
                    Different places.
                    <br />
                    Different little versions of us.
                  </p>

                  <p>
                    Somehow,
                    <br />
                    they all became part of our story.
                  </p>

                  <p className="finished-final">
                    And I'm grateful
                    <br />
                    for every one of them. ❤️
                  </p>

                  <motion.button
                    type="button"
                    className="access-continue-button"
                    onClick={() => setShowBirthdayWish(true)}
                    whileTap={{
                      scale: 0.97,
                    }}
                    whileHover={{
                      scale: 1.02,
                    }}
                  >
                    There's something I want to tell you
                    <span>→</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}