import { Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const { Paragraph } = Typography;

const StatisticsSection = () => {
  return (
    <Row gutter={[32, 32]} justify="center">
      <Col xs={24} sm={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(246, 208, 136, 0.25)",
          }}
          className="bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 transition-all duration-500 h-full flex flex-col justify-center"
        >
          <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="#F6D088"
                strokeWidth="2"
              />
              <path
                d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <CountUp
              start={0}
              end={45}
              suffix="+"
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F6D088] to-[#E5B660] mb-4 block"
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <Paragraph
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              className="text-white text-lg mb-0 font-light"
            >
              Số lượng Merchant phục vụ
            </Paragraph>
          </motion.div>
        </motion.div>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(246, 208, 136, 0.25)",
          }}
          className="bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 transition-all duration-500 h-full flex flex-col justify-center"
        >
          <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V12L15 15"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="9" stroke="#F6D088" strokeWidth="2" />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <CountUp
              start={0}
              end={55000}
              suffix="+"
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F6D088] to-[#E5B660] mb-4 block"
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <Paragraph
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              className="text-white text-lg mb-0 font-light"
            >
              Số lượng khách hàng phục vụ
            </Paragraph>
          </motion.div>
        </motion.div>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(246, 208, 136, 0.25)",
          }}
          className="bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 transition-all duration-500 h-full flex flex-col justify-center"
        >
          <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H22"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <CountUp
              start={0}
              end={300}
              suffix="+"
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F6D088] to-[#E5B660] mb-4 block"
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <Paragraph
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              className="text-white text-lg mb-0 font-light"
            >
              Số lượng máy POS đã lắp
            </Paragraph>
          </motion.div>
        </motion.div>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(246, 208, 136, 0.25)",
          }}
          className="bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 transition-all duration-500 h-full flex flex-col justify-center"
        >
          <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.48999V20.49"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.75 8.48999H5.5"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11.49H5.5"
                stroke="#F6D088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <CountUp
              start={0}
              end={6}
              suffix="+"
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F6D088] to-[#E5B660] mb-4 block"
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <Paragraph
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              className="text-white text-lg mb-0 font-light"
            >
              Tích hợp dự án
            </Paragraph>
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default StatisticsSection;
