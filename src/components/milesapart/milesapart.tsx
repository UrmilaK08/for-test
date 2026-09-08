import { motion } from "framer-motion";
import "./milesapart.css";

interface MilesApartProps {
  onContinue?: () => void;
}

export function MilesApart({
  onContinue,
}: MilesApartProps) {
  return (
    <main className="miles-page">
      {/* Background glows */}
      <div className="miles-glow miles-glow-one" />
      <div className="miles-glow miles-glow-two" />

      <motion.section
        className="miles-card"
        initial={{
          opacity: 0,
          y: 30,
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
          className="miles-chapter"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          CHAPTER 01
        </motion.p>

        {/* Title */}
        <motion.h1
          className="miles-title"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
        >
          Miles apart...
        </motion.h1>

        {/* Intro */}
        <motion.div
          className="miles-intro"
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
          <p>
            Two years of Instagram messages...
          </p>

          <p>
            Two years of “when are we finally going to
            meet?” 😂
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          className="journey-map"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
        >
          {/* Map grid */}
          <div className="map-grid" />

          {/* Decorative land */}
          <div className="map-land map-land-one" />
          <div className="map-land map-land-two" />

          {/* Thanjavur */}
          <motion.div
            className="location location-thanjavur"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 180,
            }}
          >
            <div className="location-pin">
              📍
            </div>

            <span>
              THANJAVUR
            </span>
          </motion.div>

          {/* Pondicherry */}
          <motion.div
            className="location location-pondicherry"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 2.2,
              type: "spring",
              stiffness: 180,
            }}
          >
            <div className="location-pin">
              📍
            </div>

            <span>
              PONDICHERRY
            </span>
          </motion.div>

          {/* Route */}
          <svg
            className="journey-route"
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 115 95 C 190 105, 245 210, 380 205"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 8"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                delay: 2.6,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Travelling heart */}
          <motion.div
            className="travelling-heart"
            initial={{
              left: "23%",
              top: "31%",
              opacity: 0,
            }}
            animate={{
              left: [
                "23%",
                "34%",
                "47%",
                "61%",
                "76%",
              ],
              top: [
                "31%",
                "36%",
                "52%",
                "65%",
                "68%",
              ],
              opacity: [
                0,
                1,
                1,
                1,
                1,
              ],
            }}
            transition={{
              delay: 3,
              duration: 3.5,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>

          {/* Distance */}
          <motion.div
            className="distance"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 6.1,
              duration: 0.6,
            }}
          >
            <strong>
              ~170 KM
            </strong>

            <span>
              between us
            </span>
          </motion.div>
        </motion.div>

        {/* Story after map */}
        <motion.div
          className="miles-story"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 6.6,
            duration: 0.8,
          }}
        >
          <p className="story-main">
            And then you actually came.
          </p>

          <p className="story-description">
            You travelled all those miles, took the first
            step, and made our first meeting happen.
          </p>
        </motion.div>

        {/* Cholan Express */}
        <motion.div
          className="cholan-message"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 7.5,
            duration: 0.8,
          }}
        >
          <span className="train">
            🚂
          </span>

          <p>
            And finally... the Cholan Express made its
            way to Pondicherry. 😂❤️
          </p>
        </motion.div>

        {/* Continue */}
        <motion.button
          type="button"
          className="miles-button"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 8.3,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={onContinue}
        >
          <span>
            Continue our story
          </span>

          <span>
            →
          </span>
        </motion.button>
      </motion.section>
    </main>
  );
}