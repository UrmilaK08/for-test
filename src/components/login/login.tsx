import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./login.css";

import { MilesApart } from "../milesapart/milesapart";
import { HowItStarted } from "../howitstarted/howitstarted";
import { AccessGranted } from "../accessgranted/accessgranted";

type DialogType =
  | "friendship"
  | "love"
  | "april5"
  | "april10"
  | null;

export function Login() {
  const [relationship, setRelationship] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [dialog, setDialog] = useState<DialogType>(null);

  const [showMilesApart, setShowMilesApart] =
    useState(false);

  const [showHowItStarted, setShowHowItStarted] =
    useState(false);

  const [showAccessGranted, setShowAccessGranted] =
    useState(false);

  /*
   * Chapter 03
   * Access Granted
   */
  if (showAccessGranted) {
    return (
      <AccessGranted
        onBack={() => {
          setShowAccessGranted(false);
          setShowHowItStarted(true);
        }}
        // onContinue={() => {
        //   Chapter 04 will be connected here later.
        // }}
      />
    );
  }

  /*
   * Chapter 02
   * How It All Started
   */
  if (showHowItStarted) {
    return (
      <HowItStarted
        onContinue={() => {
          setShowAccessGranted(true);
        }}
      />
    );
  }

  /*
   * Chapter 01
   * Miles Apart
   */
  if (showMilesApart) {
    return (
      <MilesApart
        onContinue={() => {
          setShowHowItStarted(true);
        }}
      />
    );
  }

  const handleRelationshipChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setRelationship(value);

    if (value === "friendship") {
      setDialog("friendship");
    }

    if (value === "love") {
      setDialog("love");
    }
  };

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setMeetDate(value);

    if (value === "april5") {
      setDialog("april5");
    }

    if (value === "april10") {
      setDialog("april10");
    }
  };

  const closeDialog = () => {
    setDialog(null);
  };

  /*
   * Login Continue button
   */
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!relationship || !meetDate) {
      return;
    }

    setShowMilesApart(true);
  };

  const getDialogContent = () => {
    switch (dialog) {
      case "friendship":
        return {
          title: "Wait... WHAT? 😭",
          message: "Oh... am I just a friend to you???",
          small:
            "After everything we've been through? 🥲❤️",
          button: "Okay okay... ❤️",
        };

      case "love":
        return {
          title: "I knew it. 🥹❤️",
          message: "I love you too. ❤️",
          small:
            "Now that's the answer I was hoping for.",
          button: "Okay, let's continue 💕",
        };

      case "april5":
        return {
          title: "Wait a minute... 😂",
          message: "I thought it was April 10th!",
          small:
            "Someone definitely told me that once... 👀",
          button: "I remember now 😂",
        };

      case "april10":
        return {
          title: "HAHA! 😂",
          message:
            "You actually remembered what you told me!",
          small:
            "But the real answer is April 5th. ❤️",
          button: "I remember now 😂",
        };

      default:
        return null;
    }
  };

  const dialogContent = getDialogContent();

  return (
    <main className="login-page">

      {/* Background */}
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <div
        className="background-particles"
        aria-hidden="true"
      >
        <span className="particle particle-one">
          ♡
        </span>

        <span className="particle particle-two">
          ✦
        </span>

        <span className="particle particle-three">
          ♡
        </span>

        <span className="particle particle-four">
          ✦
        </span>
      </div>

      {/* Main Card */}
      <motion.section
        className="login-card"
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

        {/* Heart */}
        <motion.div
          className="login-heart"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
          }}
        >
          ♡
        </motion.div>

        {/* Heading */}
        <p className="secret-label">
          A LITTLE SECRET
        </p>

        <h1>
          Before we begin...
        </h1>

        <p className="login-subtitle">
          I need to make sure this little story
          belongs to the right person.
        </p>

        <div className="decorative-line" />

        <p className="login-message">
          Answer these honestly...
          <br />
          I'll know if you're lying. 👀
        </p>

        {/* Form */}
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {/* Relationship */}
          <div className="input-group">

            <label className="question-label">
              <span>01</span>
              <br />
              What relationship is this?
            </label>

            <div className="relationship-options">

              {/* Love */}
              <label className="relationship-option">

                <input
                  type="radio"
                  name="relationship"
                  value="love"
                  checked={
                    relationship === "love"
                  }
                  onChange={
                    handleRelationshipChange
                  }
                />

                <span className="radio-circle" />

                <span className="option-content">

                  <span className="option-icon">
                    ❤️
                  </span>

                  <span>
                    Love
                  </span>

                </span>

              </label>

              {/* Friendship */}
              <label className="relationship-option">

                <input
                  type="radio"
                  name="relationship"
                  value="friendship"
                  checked={
                    relationship === "friendship"
                  }
                  onChange={
                    handleRelationshipChange
                  }
                />

                <span className="radio-circle" />

                <span className="option-content">

                  <span className="option-icon">
                    🤝
                  </span>

                  <span>
                    Friendship
                  </span>

                </span>

              </label>

            </div>
          </div>

          {/* Date */}
          <div className="input-group">

            <label className="question-label">
              <span>02</span>
              <br />
              When did our story really begin?
            </label>

            <div className="date-options">

              {/* April 5 */}
              <label className="date-option">

                <input
                  type="radio"
                  name="meetDate"
                  value="april5"
                  checked={
                    meetDate === "april5"
                  }
                  onChange={
                    handleDateChange
                  }
                />

                <span className="date-option-content">

                  <span className="calendar-icon">
                    ♡
                  </span>

                  <span>
                    <small>
                      APRIL
                    </small>

                    <strong>
                      5th
                    </strong>
                  </span>

                </span>

              </label>

              {/* April 10 */}
              <label className="date-option">

                <input
                  type="radio"
                  name="meetDate"
                  value="april10"
                  checked={
                    meetDate === "april10"
                  }
                  onChange={
                    handleDateChange
                  }
                />

                <span className="date-option-content">

                  <span className="calendar-icon">
                    ♡
                  </span>

                  <span>
                    <small>
                      APRIL
                    </small>

                    <strong>
                      10th
                    </strong>
                  </span>

                </span>

              </label>

            </div>
          </div>

          {/* Continue */}
          <motion.button
            className="login-button"
            type="submit"
            disabled={
              !relationship || !meetDate
            }
            whileTap={{
              scale: 0.98,
            }}
          >
            <span>
              Continue
            </span>

            <span>
              →
            </span>
          </motion.button>

        </form>

        {/* Footer */}
        <p className="bottom-note">
          A little secret made just for you 🌹
        </p>

      </motion.section>

      {/* Custom Dialog */}
      <AnimatePresence>
        {dialog && dialogContent && (

          <motion.div
            className="dialog-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <motion.div
              className="dialog-box"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              <div className="dialog-heart">
                ❤️
              </div>

              <h2>
                {dialogContent.title}
              </h2>

              <p>
                {dialogContent.message}
              </p>

              <small className="dialog-small-text">
                {dialogContent.small}
              </small>

              <button
                type="button"
                className="dialog-button"
                onClick={closeDialog}
              >
                {dialogContent.button}
              </button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}