import React from "react"
import { motion } from "framer-motion"

export const ZoomIn = ({ children }) => (
  <motion.div
    animate={{ scale: [0.1, 1] }}
    transition={{ duration: 2, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
)
