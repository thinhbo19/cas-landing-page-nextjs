"use client";

import { Button, Typography, Layout, Row, Col } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import PartnerCarousel from "@/components/Home/PartnerCarousel";
import StatisticsSection from "@/components/Home/StatisticsSection";
import WhyChooseCASSection from "@/components/Home/WhyChooseCASSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import ClientsCarousel from "@/components/Home/ClientsSection";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1929]/40"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title
              style={{ color: "white" }}
              className="text-white text-5xl font-bold mb-8"
            >
              KIẾN TẠO NỀN TẢNG - CHẮP CÁNH THÀNH CÔNG !
            </Title>
            <Paragraph
              style={{ color: "white", fontSize: "15px" }}
              className="text-white text-lg mb-8 mx-auto max-w-3xl"
            >
              CAS cung cấp các giải pháp và dịch vụ công nghệ thanh toán hiện
              đại, đáp ứng mọi nhu cầu của doanh nghiệp.
            </Paragraph>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="primary"
                size="large"
                className="mt-4 hover:scale-105 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #F6D088 0%, #E5B660 100%)",
                  border: "none",
                  color: "#0A1929",
                  fontWeight: "500",
                  height: "44px",
                  padding: "0 28px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 14px 0 rgba(246, 208, 136, 0.39)",
                }}
              >
                <span className="text-[#0A1929]">
                  Tìm hiểu thêm về chúng tôi
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About CAS Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Title level={2} className="mb-4">
                  CAS
                </Title>
                <Title level={3} className="mb-6">
                  CUNG CẤP CÁC GIẢI PHÁP DỊCH VỤ CÔNG NGHỆ
                </Title>
                <Paragraph className="text-gray-600 mb-4">
                  Cas được xây dựng với mục tiêu hoạt đầu là cung cấp các dịch
                  vụ quản lý sản phẩm cho và đáp ứng nhu cầu các doanh nghiệp
                  trẻ. Cas Group tập trung vào việc giúp các công ty startup
                  tiết kiệm chi phí vận hành, rút ngắn thời gian thực hiện dự
                  án, từ đó tạo ra nền tảng vững chắc để phát triển.
                </Paragraph>
                <Paragraph className="text-gray-600 mb-6">
                  Cas Group cam kết quản lý cung cấp các giải pháp toàn diện,
                  không chỉ giúp các công ty vượt qua khó khăn ban đầu mà còn hỗ
                  trợ họ trong việc xây dựng quy trình, hệ thống nhất quán và
                  tối chỉnh đa dịch. Mục tiêu là tạo ra một môi trường kinh
                  doanh bền vững, giúp các doanh nghiệp khởi nghiệp đạt được
                  những bước tiến dài và vững chắc trên con đường phát triển.
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  className="hover:scale-105 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #F6D088 0%, #E5B660 100%)",
                    border: "none",
                    color: "#0A1929",
                    fontWeight: "500",
                    height: "44px",
                    padding: "0 28px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px 0 rgba(246, 208, 136, 0.39)",
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src="/team.jpg"
                    alt="CAS Team"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L100 0L100 100L0 0Z" fill="#E5B660" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Why Choose CAS Section */}
      <div className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Title level={2} className="text-4xl font-bold mb-4">
              TẠI SAO NÊN CHỌN CAS CORPORATION?
            </Title>
            <Paragraph
              style={{ fontSize: "15px" }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              CAS - Nơi nắm tìm cơ thành giá trị đẳng cấp
            </Paragraph>
          </motion.div>

          <WhyChooseCASSection />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/stats-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929]/75 to-[#0A1929]/65"></div>
          {/* Abstract shapes for modern look */}
          <div className="absolute inset-0 z-1 opacity-30">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F6D088" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E5B660" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full"></div>
            </div>
            <Title
              level={2}
              style={{ color: "white" }}
              className="text-5xl font-bold mb-4 text-white"
            >
              NHỮNG CON SỐ ẤN TƯỢNG
            </Title>
            <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full"></div>
          </motion.div>

          <StatisticsSection />
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full"></div>
            </div>
            <Title level={2} className="text-4xl font-bold mb-4">
              ĐỐI TÁC CỦA CHÚNG TÔI
            </Title>
            <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full"></div>
          </motion.div>

          <PartnerCarousel />
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full"></div>
            </div>
            <Title level={2} className="text-4xl font-bold mb-4">
              GIẢI PHÁP CAS
            </Title>
            <Paragraph className="text-gray-600 max-w-3xl mx-auto">
              Hãy để chúng tôi đồng hành và giải quyết mọi vấn đề của bạn!
            </Paragraph>
            <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full mt-4"></div>
          </motion.div>
          <SolutionsSection />
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full"></div>
            </div>
            <Title level={2} className="text-4xl font-bold mb-4">
              KHÁCH HÀNG CỦA CHÚNG TÔI
            </Title>
            <div className="h-1 w-20 bg-gradient-to-r from-[#F6D088] to-[#E5B660] mx-auto rounded-full mt-4"></div>
          </motion.div>

          <ClientsCarousel />
        </div>
      </div>
    </Layout>
  );
}
