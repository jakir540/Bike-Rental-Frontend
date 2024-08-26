import React from "react";
import { Row, Col, Typography, Image } from "antd";
import { motion, useInView } from "framer-motion";
import treandingImg from "../../assets/photo-tr.jpg";
import treandingImg2 from "../../assets/photo-tr2.jpg";

const { Title } = Typography;

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariantLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariantRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const TrendingSportsWear = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#000",
        padding: "50px 20px",
        overflow: "hidden",
      }}
    >
      <Row gutter={16} align="middle" justify="center">
        <Col xs={24} md={8}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariant}
          >
            <Title style={{ color: "#fff", fontSize: "3rem", marginBottom: 0 }}>
              Trending Sports For
            </Title>
          </motion.div>
        </Col>

        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariantLeft}
          >
            <Image
              width={300}
              src={treandingImg}
              alt="Men"
              style={{ borderRadius: "10px" }}
            />
            <Title level={3} style={{ color: "#fff", marginTop: "10px" }}>
              Men
            </Title>
          </motion.div>
        </Col>

        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariantRight}
            transition={{ delay: 0.3 }}
          >
            <Image
              width={300}
              src={treandingImg2}
              alt="Women"
              style={{ borderRadius: "10px" }}
            />
            <Title level={3} style={{ color: "#fff", marginTop: "10px" }}>
              Women
            </Title>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default TrendingSportsWear;
