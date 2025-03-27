"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SolutionsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Solution Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-2xl shadow-xl"
      >
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src="/partners/smart-pos.jpg"
            alt="SMART POS"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/90 to-transparent opacity-80 transition-opacity duration-500"></div>

          {/* Title always visible */}
          <div className="absolute top-6 left-6 z-10">
            <h3 className="text-white text-2xl font-bold mb-2 bg-[#0A1929]/50 px-4 py-2 rounded-lg inline-block">
              SMART POS
            </h3>
          </div>

          {/* Content that appears on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex space-x-2 mb-4">
              <span className="bg-[#E5B660] text-[#0A1929] text-sm font-medium px-3 py-1 rounded-full">
                Máy POS Hóa Ký
              </span>
              <span className="bg-[#E5B660] text-[#0A1929] text-sm font-medium px-3 py-1 rounded-full">
                Bảo mật cao
              </span>
            </div>
            <p className="text-white mb-4">
              Thanh toán được các loại thẻ: Visa, Master và JCB.
              <br />
              <br />
              Kết hợp phần mền quản lý bán hàng Posapp, giúp chủ doanh nghiệp
              quản lý đơn hàng vầ thanh toán từ xa.
              <br />
              <br />
              Quản lý hiệu quả và báo cáo thu chi rõ ràng.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0A1929] font-medium py-2 px-4 rounded-lg w-max"
            >
              Tìm hiểu thêm
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Solution Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-2xl shadow-xl"
      >
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src="/partners/cong-thanh-toan.jpg"
            alt="Cổng thanh toán"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/90 to-transparent opacity-80 transition-opacity duration-500"></div>

          {/* Title always visible */}
          <div className="absolute top-6 left-6 z-10">
            <h3 className="text-white text-2xl font-bold mb-2 bg-[#0A1929]/50 px-4 py-2 rounded-lg inline-block">
              Cổng thanh toán
            </h3>
          </div>

          {/* Content that appears on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex space-x-2 mb-4">
              <span className="bg-[#E5B660] text-[#0A1929] text-sm font-medium px-3 py-1 rounded-full">
                Máy POS Hóa Ký
              </span>
              <span className="bg-[#E5B660] text-[#0A1929] text-sm font-medium px-3 py-1 rounded-full">
                Bảo mật cao
              </span>
            </div>
            <p className="text-white mb-4">
              Thủ tục đơn giản nhanh chóng.
              <br />
              <br />
              Hoạt động được trên mọi loại hình doanh nghiệp: y tế, trường học,
              siêu thị,...
              <br />
              <br />
              Phí cạnh tranh, luôn hỗ trợ biểu phí tốt nhất.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0A1929] font-medium py-2 px-4 rounded-lg w-max"
            >
              Tìm hiểu thêm
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Solution Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-2xl shadow-xl"
      >
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src="/partners/marchant-view.jpg"
            alt="Merchant View"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/90 to-transparent opacity-80 transition-opacity duration-500"></div>

          {/* Title always visible */}
          <div className="absolute top-6 left-6 z-10">
            <h3 className="text-white text-2xl font-bold mb-2 bg-[#0A1929]/50 px-4 py-2 rounded-lg inline-block">
              Merchant View
            </h3>
          </div>

          {/* Content that appears on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex space-x-2 mb-4">
              <span className="bg-[#E5B660] text-[#0A1929] text-sm font-medium px-3 py-1 rounded-full">
                Tiện lợi
              </span>
              <span className="bg-[#E5B660] text-[#0A1929] text-sm font-medium px-3 py-1 rounded-full">
                Bảo mật cao
              </span>
            </div>
            <p className="text-white mb-4">
              Quản Lý Giao Dịch.
              <br />
              <br />
              Quản Lý người dùng.
              <br />
              <br />
              Hỗ trợ Tạo đơn hàng.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0A1929] font-medium py-2 px-4 rounded-lg w-max"
            >
              Tìm hiểu thêm
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionsSection;
