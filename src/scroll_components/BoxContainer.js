import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./BoxContainer.css";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export default function BoxContainer({ children, num, fieldset, borderColor }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        width: "90%",
      });
    } 
  }, [control, inView]);

  return (
    <motion.fieldset
      className="box"
      ref={ref}
      variants={boxVariant}
      initial={{ opacity: 0.9, 
        width: "80%",
      }}
      animate={control}
      style={{
        border: `2px solid #${borderColor}`,
        transformOrigin: "center center"
      }}
    >
      <legend
        className="fieldset-box"
        style={{
          border: `2px solid #${borderColor}`,
        }}
      >
        {fieldset}
      </legend>
      <div className="box-content-align">{children}</div>
    </motion.fieldset>
  );
}

