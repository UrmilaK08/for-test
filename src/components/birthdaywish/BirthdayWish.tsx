import { useEffect } from "react";
import { motion } from "framer-motion";
import "./birthdaywish.css";

const BirthdayWish = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="birthday-page">
      {/* Background decorations */}
      <div className="birthday-background">
        <span className="floating-heart heart-one">♡</span>
        <span className="floating-heart heart-two">♡</span>
        <span className="floating-heart heart-three">✦</span>
        <span className="floating-heart heart-four">♡</span>
        <span className="floating-heart heart-five">✧</span>
      </div>

      {/* =====================================================
          OPENING
      ===================================================== */}

      <section className="birthday-opening-section">
        <motion.div
          className="birthday-opening-content"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <motion.p
            className="birthday-eyebrow"
            initial={{
              opacity: 0,
              letterSpacing: "0.1em",
            }}
            animate={{
              opacity: 1,
              letterSpacing: "0.35em",
            }}
            transition={{
              duration: 1.5,
              delay: 0.3,
            }}
          >
            FOR YOU
          </motion.p>

          <motion.div
            className="birthday-opening-heart"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
              type: "spring",
              stiffness: 150,
            }}
          >
            ❤️
          </motion.div>

          <motion.h1
            className="birthday-main-title"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
          >
            Happy Birthday,
            <span>My Favourite Human</span>
          </motion.h1>

          <motion.div
            className="birthday-scroll-hint"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
          >
            <span>There is something waiting for you</span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          BOUQUET SECTION
      ===================================================== */}

      <section className="birthday-bouquet-section">
        <motion.div
          className="bouquet-card"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="bouquet-glow" />

          <div className="bouquet">
            <motion.div
              className="flower flower-one"
              animate={{
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌹
            </motion.div>

            <motion.div
              className="flower flower-two"
              animate={{
                rotate: [3, -3, 3],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌷
            </motion.div>

            <motion.div
              className="flower flower-three"
              animate={{
                rotate: [-2, 4, -2],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌹
            </motion.div>

            <motion.div
              className="flower flower-four"
              animate={{
                rotate: [4, -3, 4],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌸
            </motion.div>

            <motion.div
              className="flower flower-five"
              animate={{
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌹
            </motion.div>

            <div className="bouquet-stems">🌿</div>

            <div className="bouquet-ribbon">♡</div>
          </div>

          <p className="bouquet-caption">
            If I could be there today,
            <br />
            I'd bring you something like this.
          </p>

          <span className="bouquet-small-heart">♡</span>
        </motion.div>
      </section>

      {/* =====================================================
          MAIN WISH
      ===================================================== */}

      <section className="birthday-message-section">
        <motion.div
          className="birthday-message-intro"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <span className="message-number">01</span>

          <p className="message-label">
            THE THING I WISH I COULD SAY IN PERSON
          </p>
        </motion.div>

        <div className="birthday-message-flow">
          {/* =================================================
              MESSAGE 01
          ================================================= */}

          <motion.div
            className="wish-card wish-card-main"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className="wish-card-decoration">✦</div>

            <h2>Happy Birthday</h2>

            <p>Happy Birthday to my favourite human ❤️</p>

            <p>
              I wish I could be there today,
              <br />
              just to hug you for a little too long
              <br />
              and tell you in person how much you mean to me.
            </p>
          </motion.div>

          {/* =================================================
              HUG CARD
          ================================================= */}

          <motion.div
            className="hug-card"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.div
              className="hug-icon"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🫂
            </motion.div>

            <p className="hug-label">ONE VERY LONG DISTANCE HUG</p>

            <p>
              Since I can't, you'll have to imagine the hug. 😂❤️
            </p>

            <p className="hug-small">
              And yes, I'm expecting you to imagine it properly. 😌
            </p>
          </motion.div>

          {/* =================================================
              FUNNY CARD
          ================================================= */}

          <motion.div
            className="funny-wish-card"
            initial={{
              opacity: 0,
              rotate: -2,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <span className="funny-tape">✦</span>

            <p>
              I hope you have the happiest birthday,
              <br />
              enjoy your day,
              <br />
              and don't forget to think about me
              <br />
              at least a little. 😂
            </p>

            <div className="funny-face">😌</div>
          </motion.div>

          {/* =================================================
              YEAR WISH
          ================================================= */}

          <motion.div
            className="year-wish-section"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
            }}
          >
            <span className="message-number">02</span>

            <p className="message-label">FOR THE YEAR AHEAD</p>

            <h2>
              I hope this year
              <br />
              is kind to you.
            </h2>

            <p>
              I hope this year brings you lots of happiness,
              <br />
              good things, peaceful days,
              <br />
              and fewer reasons for me to scold you. 😌
            </p>
          </motion.div>

          {/* =================================================
              PHOTO FRAME
          ================================================= */}

          <motion.div
            className="birthday-photo-section"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className="photo-frame">
              <div className="photo-placeholder">
                <span>📸</span>

                <p>A PHOTO OF YOU</p>

                <small>YOUR FAVOURITE PICTURE</small>
              </div>
            </div>

            <p className="photo-caption">
              One of my favourite people
              <br />
              deserves a little space here. ❤️
            </p>
          </motion.div>

          {/* =================================================
              HEART MESSAGE
          ================================================= */}

          <motion.div
            className="heart-message-card"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.div
              className="heart-message-icon"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.div>

            <p>
              And honestly,
              <br />
              I just want you to be happy.
            </p>

            <p>
              Even on the days when I'm not there,
              <br />
              I hope you always have reasons to smile.
            </p>
          </motion.div>

          {/* =================================================
              LITTLE REMINDER
          ================================================= */}

          <motion.div
            className="reminder-section"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
            }}
          >
            <p className="reminder-small">A LITTLE REMINDER</p>

            <h2>Take care of yourself.</h2>

            <p>
              Take care of yourself, keep smiling,
              <br />
              and remember...
            </p>

            <motion.div
              className="you-have-me"
              whileInView={{
                scale: [0.95, 1.04, 1],
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span>you have me,</span>

              <strong>whether you like it or not. 😂❤️</strong>
            </motion.div>
          </motion.div>

          {/* =================================================
              PHOTO POLAROID
          ================================================= */}

          <motion.div
            className="polaroid-section"
            initial={{
              opacity: 0,
              rotate: 5,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              rotate: -2,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className="polaroid">
              <div className="polaroid-photo">
                <span>🖼️</span>

                <small>OUR LITTLE MEMORY</small>
              </div>

              <p>More memories to come... ❤️</p>
            </div>
          </motion.div>

          {/* =================================================
              DISTANCE
          ================================================= */}

          <motion.div
            className="distance-section"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className="distance-line">
              <span>YOU</span>

              <div>
                <span className="distance-dot" />
                <span className="distance-dot" />
                <span className="distance-dot" />

                <span className="distance-heart">❤️</span>
              </div>

              <span>ME</span>
            </div>

            <p>
              Maybe I can't be there for this birthday,
              <br />
              but I hope there are many more birthdays
              <br />
              where I get to annoy you in person. ❤️
            </p>
          </motion.div>

          {/* =================================================
              FINAL MESSAGE
          ================================================= */}

          <motion.div
            className="final-birthday-message"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <div className="final-stars">✦ ♡ ✦</div>

            <p className="final-small">ONE LAST THING</p>

            <h2>
              Happy Birthday,
              <br />
              love.
            </h2>

            <p>I'm really lucky to have you.</p>

            <motion.div
              className="final-love"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
              }}
            >
              I love you so much. ❤️
            </motion.div>

            <div className="final-bouquet">💐</div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          END
      ===================================================== */}

      <motion.section
        className="birthday-end"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <div className="end-heart">♡</div>

        <p>
          Made with all my love,
          <br />
          from a little too far away. ❤️
        </p>

        <span>∞</span>
      </motion.section>
    </main>
  );
};

export default BirthdayWish;