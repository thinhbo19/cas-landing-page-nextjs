import { Col, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { motion } from "framer-motion";
import Image from "next/image";
const { Paragraph } = Typography;

const WhyChooseCASSection = () => {
  return (
    <Row gutter={[32, 32]} justify="center">
      <Col xs={24} md={8}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white rounded-xl shadow-lg p-8 h-full border-t-4 border-[#E5B660]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src="/icon-team.jpg"
                alt="Đội ngũ"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <Title level={4} className="text-center mb-4 uppercase">
            Tối ưu dịch vụ kinh hàng
          </Title>
          <Paragraph className="text-gray-600 text-center">
            Đa dạng chương trình, chính sách, sáng tạo với nhiều ngành nghề đang
            hoạt động
          </Paragraph>
        </motion.div>
      </Col>

      <Col xs={24} md={8}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white rounded-xl shadow-lg p-8 h-full border-t-4 border-[#E5B660]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src="/icon-clock.jpg"
                alt="Thời gian"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <Title level={4} className="text-center mb-4 uppercase">
            Tăng hiệu quả chốt Sale
          </Title>
          <Paragraph className="text-gray-600 text-center">
            Dễ dàng thực thi, duy trình, mở rộng đối tượng khách hàng phù hợp
            với từng chính sách
          </Paragraph>
        </motion.div>
      </Col>

      <Col xs={24} md={8}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white rounded-xl shadow-lg p-8 h-full border-t-4 border-[#E5B660]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src="/icon-cart.jpg"
                alt="Quản lý"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <Title level={4} className="text-center mb-4 uppercase">
            Tiết kiệm thời gian quản lý
          </Title>
          <Paragraph className="text-gray-600 text-center">
            Tích hợp đầy đủa tính năng toàn diện giúp thống nhất minh bạch đồng
            bộ quy trình, nâng cao quản lý
          </Paragraph>
        </motion.div>
      </Col>
    </Row>
  );
};

export default WhyChooseCASSection;
